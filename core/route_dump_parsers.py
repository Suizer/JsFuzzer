"""
core/route_dump_parsers.py — Structured parsers for framework route dumps.

The generic regex extractor in scanner.py misses the most valuable JS files:
"route dumps" — structured listings of every backend endpoint produced by
specific frameworks. A single fos_js_routes.js from a Symfony app can leak
137 routes that a regex-based extractor reduces to ~10-20 loose strings.

This module detects known route-dump formats by signature (content or URL
filename) and applies a structured parser to extract every endpoint.

Parsers implemented (priority order):
  1. Symfony FOSJsRoutingBundle    — `fos.Router.setData({...})`
  2. Service Worker URL caches     — sw.js / service-worker.js
  3. PWA Manifest                  — manifest.json / asset-manifest.json
  4. Webpack chunk map             — `__webpack_require__.u`
  5. Webpack dynamic imports       — `webpackChunkName:`
  6. Module Federation             — remoteEntry.js

Findings produced by this module use type "ROUTE_DUMP" so they're trivially
filterable downstream (e.g. for prioritised triage in the reporter).
"""

from __future__ import annotations

import json
import re
from typing import Any, Iterable


# ─── Public API ──────────────────────────────────────────────────────────────


def detect_and_parse_route_dumps(content: str, url: str = "") -> list[dict]:
    """Dispatcher — runs every applicable parser against the content."""
    findings: list[dict] = []

    if not content:
        return findings

    url_lower = (url or "").lower()

    # URL-based dispatch (filename hints from the downloader)
    if url_lower.endswith(("sw.js", "service-worker.js")):
        findings.extend(parse_service_worker(content))
    if url_lower.endswith(("manifest.json", "asset-manifest.json")):
        findings.extend(parse_pwa_manifest(content))
    if url_lower.endswith("remoteentry.js"):
        findings.extend(parse_module_federation(content))

    # Content-signature dispatch (can fire even when URL hint is absent)
    if "fos.Router.setData(" in content:
        findings.extend(parse_symfony_routes(content))

    if "__webpack_require__" in content and (
        ".u=function" in content
        or ".u = function" in content
        or "webpackChunkName" in content
    ):
        findings.extend(parse_webpack_chunkmap(content))

    # Vite chunk map: produced by `import()` dynamic imports in Vite builds.
    # Common in Django REST + Vite SPAs. Format differs from webpack:
    #   __vite__mapDeps = (i, m=..., d=(m.f||(m.f=["assets/A-hash.js","assets/B-hash.js"])))=>...
    if "__vite__mapDeps" in content or "__vitePreload" in content:
        findings.extend(parse_vite_chunkmap(content))

    # SW content signature even if URL didn't match (some apps inline it)
    sw_signature = "self.addEventListener" in content and "caches.open" in content
    if sw_signature and not url_lower.endswith(("sw.js", "service-worker.js")):
        findings.extend(parse_service_worker(content))

    return _deduplicate(findings)


# ─── Symfony FOSJsRoutingBundle ──────────────────────────────────────────────

_SYMFONY_CALL_RE = re.compile(
    r"fos\.Router\.setData\(\s*(\{.*?\})\s*\)\s*;?",
    re.DOTALL,
)


def parse_symfony_routes(content: str) -> list[dict]:
    """Extract routes from `fos.Router.setData({...})`.

    The argument is JSON-compatible. Each route is `{tokens, defaults,
    requirements, methods, schemes}` and tokens are stored in REVERSE order
    as ``[type, ...]`` lists:
        ['text', literal]
        ['variable', separator, regex, name]
    Reversing and joining produces the full URL path with `{param}` markers.
    """
    findings: list[dict] = []

    match = _SYMFONY_CALL_RE.search(content)
    if not match:
        return findings

    json_str = _balance_braces(content, match.start(1))
    if not json_str:
        return findings

    try:
        data = json.loads(json_str)
    except (json.JSONDecodeError, ValueError):
        return findings

    base_url = data.get("base_url", "") or ""
    prefix = data.get("prefix", "") or ""
    host = data.get("host", "") or ""
    scheme = data.get("scheme", "") or ""
    routes = data.get("routes", {})
    if not isinstance(routes, dict):
        return findings

    host_prefix = f"{scheme}://{host}" if (scheme and host) else ""

    for route_name, route_def in routes.items():
        if not isinstance(route_def, dict):
            continue
        tokens = route_def.get("tokens", [])
        path = _build_symfony_path(tokens)
        if not path:
            continue

        methods = route_def.get("methods", []) or []
        method_str = ",".join(methods) if methods else "ANY"
        full_path = f"{base_url}{prefix}{path}"
        display = f"{host_prefix}{full_path}" if host_prefix else full_path

        findings.append(_finding(
            name="Symfony route",
            severity="high",
            match=f"{method_str} {display}",
            context=f"Route '{route_name}' from FOSJsRoutingBundle",
        ))

    return findings


def _build_symfony_path(tokens: list) -> str:
    if not isinstance(tokens, list):
        return ""
    parts: list[str] = []
    for token in reversed(tokens):
        if not isinstance(token, list) or len(token) < 2:
            continue
        ttype = token[0]
        if ttype == "text":
            parts.append(str(token[1]))
        elif ttype == "variable":
            # ['variable', separator, regex, name]
            sep = str(token[1]) if len(token) > 1 else "/"
            name = str(token[3]) if len(token) > 3 else "param"
            parts.append(f"{sep}{{{name}}}")
    return "".join(parts)


# ─── Service Worker ──────────────────────────────────────────────────────────

_SW_PRECACHE_BLOCK_RE = re.compile(
    r"(?:precacheAndRoute|precache)\s*\(\s*\[([\s\S]*?)\]\s*[\),]",
)
_SW_SELF_PRECACHE_RE = re.compile(
    r"self\.__(?:precacheManifest|WB_MANIFEST)\s*=\s*\[([\s\S]*?)\]",
)
_SW_ADDALL_RE = re.compile(r"\.addAll\s*\(\s*\[([\s\S]*?)\]\s*\)")
_SW_MATCH_RE = re.compile(r"caches\.match\s*\(\s*[\"']([^\"']+)[\"']")
_SW_URL_KEY_RE = re.compile(r"[\"']url[\"']\s*:\s*[\"']([^\"']+)[\"']")
_SW_BARE_PATH_RE = re.compile(r"[\"'](\/[^\"']{1,200})[\"']")


def parse_service_worker(content: str) -> list[dict]:
    """Extract cached URLs from common service-worker patterns (Workbox, manual)."""
    findings: list[dict] = []

    for block_match in _SW_PRECACHE_BLOCK_RE.finditer(content):
        block = block_match.group(1)
        for url_match in _SW_URL_KEY_RE.finditer(block):
            findings.append(_sw_finding(url_match.group(1), "precacheAndRoute"))

    for block_match in _SW_SELF_PRECACHE_RE.finditer(content):
        block = block_match.group(1)
        for url_match in _SW_URL_KEY_RE.finditer(block):
            findings.append(_sw_finding(url_match.group(1), "self.__precacheManifest"))
        # workbox writes bare strings for some manifest variants
        for url_match in _SW_BARE_PATH_RE.finditer(block):
            findings.append(_sw_finding(url_match.group(1), "self.__precacheManifest"))

    for block_match in _SW_ADDALL_RE.finditer(content):
        block = block_match.group(1)
        for url_match in _SW_BARE_PATH_RE.finditer(block):
            findings.append(_sw_finding(url_match.group(1), "cache.addAll"))

    for url_match in _SW_MATCH_RE.finditer(content):
        findings.append(_sw_finding(url_match.group(1), "caches.match"))

    return findings


def _sw_finding(url: str, source: str) -> dict:
    return _finding(
        name="Service worker cached URL",
        severity="medium",
        match=url[:200],
        context=f"From {source}",
    )


# ─── PWA / CRA Manifest ──────────────────────────────────────────────────────


def parse_pwa_manifest(content: str) -> list[dict]:
    """Parse PWA manifest.json or Create-React-App asset-manifest.json.

    CRA manifest exposes the complete static asset map; PWA manifest exposes
    routing-relevant URLs (start_url, scope, shortcuts) that are useful seeds.
    """
    try:
        data = json.loads(content)
    except (json.JSONDecodeError, ValueError):
        return []

    if not isinstance(data, dict):
        return []

    findings: list[dict] = []

    # CRA asset-manifest.json: {"files": {"main.js": "/static/js/main.abc.js", ...}}
    files = data.get("files")
    if isinstance(files, dict):
        for asset_name, asset_url in files.items():
            if isinstance(asset_url, str):
                findings.append(_finding(
                    name="CRA asset manifest entry",
                    severity="medium",
                    match=asset_url[:200],
                    context=f"Asset '{asset_name}'",
                ))

    # CRA entrypoints (just a list of strings)
    entrypoints = data.get("entrypoints")
    if isinstance(entrypoints, list):
        for ep in entrypoints:
            if isinstance(ep, str):
                findings.append(_finding(
                    name="CRA entrypoint",
                    severity="low",
                    match=ep[:200],
                    context="Initial bundle path",
                ))

    # PWA top-level URL fields
    for key in ("start_url", "scope", "manifest_url"):
        value = data.get(key)
        if isinstance(value, str):
            findings.append(_finding(
                name=f"PWA manifest {key}",
                severity="low",
                match=value[:200],
                context=f"PWA manifest key '{key}'",
            ))

    # Icons / screenshots — collections of {src, sizes, type}
    for collection_key in ("icons", "screenshots"):
        items = data.get(collection_key)
        if not isinstance(items, list):
            continue
        for item in items:
            if isinstance(item, dict) and isinstance(item.get("src"), str):
                findings.append(_finding(
                    name=f"PWA {collection_key} URL",
                    severity="low",
                    match=item["src"][:200],
                    context=f"PWA {collection_key} entry",
                ))

    # Shortcuts often have route URLs interesting for testing
    shortcuts = data.get("shortcuts")
    if isinstance(shortcuts, list):
        for sc in shortcuts:
            if isinstance(sc, dict) and isinstance(sc.get("url"), str):
                findings.append(_finding(
                    name="PWA shortcut URL",
                    severity="medium",
                    match=sc["url"][:200],
                    context=f"PWA shortcut '{sc.get('name', '?')}'",
                ))

    return findings


# ─── Webpack Chunk Map / Dynamic Imports ─────────────────────────────────────

_WEBPACK_CHUNK_FN_RE = re.compile(
    r"__webpack_require__\.u\s*=\s*function\s*\([a-zA-Z_$]\)\s*\{[\s\S]*?(\{[^{}]+\})",
)
_WEBPACK_NAME_FN_RE = re.compile(
    r"__webpack_require__\.(?:miniCssF|f|fM|miniCssFlit)[A-Za-z0-9_$]*\s*=\s*function\s*\([a-zA-Z_$]\)\s*\{[\s\S]*?(\{[^{}]+\})",
)
_WEBPACK_MAP_ENTRY_RE = re.compile(
    r"(\d+|\"[^\"]+\"|'[^']+')\s*:\s*[\"']([^\"']+)[\"']"
)
_WEBPACK_CHUNKNAME_RE = re.compile(
    r"webpackChunkName\s*:\s*[\"']([^\"']+)[\"']",
)


def parse_webpack_chunkmap(content: str) -> list[dict]:
    """Extract chunk IDs, lazy chunk names, and dynamic import hints from webpack."""
    findings: list[dict] = []

    for match in _WEBPACK_CHUNK_FN_RE.finditer(content):
        map_str = match.group(1)
        for cid, chash in _WEBPACK_MAP_ENTRY_RE.findall(map_str):
            findings.append(_finding(
                name="Webpack chunk",
                severity="low",
                match=f"chunk[{cid}] → {chash}",
                context="Webpack lazy chunk mapping (__webpack_require__.u)",
            ))

    for match in _WEBPACK_NAME_FN_RE.finditer(content):
        map_str = match.group(1)
        for cid, chash in _WEBPACK_MAP_ENTRY_RE.findall(map_str):
            findings.append(_finding(
                name="Webpack chunk asset",
                severity="low",
                match=f"chunk[{cid}] → {chash}",
                context="Webpack asset filename mapping",
            ))

    for name_match in _WEBPACK_CHUNKNAME_RE.finditer(content):
        findings.append(_finding(
            name="Webpack dynamic chunk name",
            severity="low",
            match=name_match.group(1),
            context="Webpack dynamic import (preserves route hint)",
        ))

    return findings


# ─── Vite Chunk Map ──────────────────────────────────────────────────────────

# Captures the assets array in `__vite__mapDeps = (..., d=(m.f||(m.f=[...])))=>...`.
# Also tolerates whitespace and the alternative `__vitePreload(...,[...],...)` form.
_VITE_MAPDEPS_RE = re.compile(
    r"__vite__mapDeps[\s\S]{0,200}?m\.f\s*=\s*\[([\s\S]*?)\]\s*\)",
)
_VITE_PRELOAD_RE = re.compile(
    r"__vitePreload\s*\([^,]+,\s*\[([\s\S]*?)\]",
)
_VITE_ASSET_RE = re.compile(r"[\"']((?:\.\.?/)?assets/[^\"']+)[\"']")


def parse_vite_chunkmap(content: str) -> list[dict]:
    """Extract chunk URLs from Vite's __vite__mapDeps / __vitePreload arrays."""
    findings: list[dict] = []
    seen: set[str] = set()

    for match in _VITE_MAPDEPS_RE.finditer(content):
        for asset_match in _VITE_ASSET_RE.finditer(match.group(1)):
            asset = asset_match.group(1)
            if asset in seen:
                continue
            seen.add(asset)
            findings.append(_finding(
                name="Vite chunk",
                severity="medium",
                match=asset,
                context="Vite __vite__mapDeps (dynamic import target)",
            ))

    for match in _VITE_PRELOAD_RE.finditer(content):
        for asset_match in _VITE_ASSET_RE.finditer(match.group(1)):
            asset = asset_match.group(1)
            if asset in seen:
                continue
            seen.add(asset)
            findings.append(_finding(
                name="Vite chunk",
                severity="medium",
                match=asset,
                context="Vite __vitePreload (lazy module)",
            ))

    return findings


# ─── Module Federation ───────────────────────────────────────────────────────

_MF_NAME_RE = re.compile(
    r"(?:^|[,{])\s*name\s*:\s*[\"']([a-zA-Z_][a-zA-Z0-9_-]{1,80})[\"']"
)
_MF_EXPOSES_RE = re.compile(r"exposes\s*:\s*\{([^}]+)\}")
_MF_EXPOSES_ENTRY_RE = re.compile(r"[\"']([^\"']+)[\"']\s*:\s*[\"']([^\"']+)[\"']")
_MF_REMOTES_RE = re.compile(r"remotes\s*:\s*\{([^}]+)\}")


def parse_module_federation(content: str) -> list[dict]:
    """Extract exposed modules / remote names from Module Federation remoteEntry.js."""
    findings: list[dict] = []

    for name in {m.group(1) for m in _MF_NAME_RE.finditer(content)}:
        findings.append(_finding(
            name="Module Federation name",
            severity="medium",
            match=name,
            context="Remote module identifier",
        ))

    exposes_match = _MF_EXPOSES_RE.search(content)
    if exposes_match:
        for public, internal in _MF_EXPOSES_ENTRY_RE.findall(exposes_match.group(1)):
            findings.append(_finding(
                name="Module Federation exposed module",
                severity="high",
                match=f"{public} ← {internal}",
                context="Exposed module (callable from any remote)",
            ))

    remotes_match = _MF_REMOTES_RE.search(content)
    if remotes_match:
        for remote_name, remote_url in _MF_EXPOSES_ENTRY_RE.findall(remotes_match.group(1)):
            findings.append(_finding(
                name="Module Federation remote",
                severity="medium",
                match=f"{remote_name} → {remote_url}",
                context="Configured remote dependency",
            ))

    return findings


# ─── Helpers ─────────────────────────────────────────────────────────────────


def _finding(*, name: str, severity: str, match: str, context: str) -> dict:
    """Produce a finding dict compatible with scanner.py output."""
    return {
        "type": "ROUTE_DUMP",
        "name": name,
        "severity": severity,
        "category": "route_exposure",
        "line": "N/A",
        "match": match,
        "context": f"...{context}...",
    }


def _balance_braces(content: str, start: int) -> str:
    """Return balanced `{...}` substring starting at ``start`` (or "" if unbalanced).

    Needed because `fos.Router.setData(...)` arguments contain nested objects
    and a naive `re.search(r'\\{.*?\\}', ..., re.DOTALL)` matches only up to
    the first `}`. We walk the string and track brace depth, respecting
    string boundaries to avoid `}` inside JSON values.
    """
    if start >= len(content) or content[start] != "{":
        return ""

    depth = 0
    in_str = False
    quote = ""
    escape = False

    for i in range(start, len(content)):
        ch = content[i]
        if in_str:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == quote:
                in_str = False
            continue
        if ch in ('"', "'"):
            in_str = True
            quote = ch
            continue
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return content[start:i + 1]
    return ""


def _deduplicate(findings: Iterable[dict]) -> list[dict]:
    seen: set[tuple[str, str]] = set()
    unique: list[dict] = []
    for f in findings:
        key = (f.get("name", ""), f.get("match", ""))
        if key in seen:
            continue
        seen.add(key)
        unique.append(f)
    return unique
