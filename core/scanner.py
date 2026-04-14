"""
core/scanner.py — Motor de análisis estático para JS (v3 — Surgical)

Cambios vs v2:
  - Sink filtering: elimina Function constructor FPs (isFunction checks),
    setTimeout con callback refs (no string), y sinks dentro de frameworks conocidos.
  - Entropy filtering: mata i18n keys, CSS properties, template literals,
    dotted.key.paths, y strings que son claramente texto humano.
  - URL filtering: ignora W3C namespaces, license/docs URLs, SVG data URIs,
    framework error references, y CDN polyfill URLs.
  - Subdomain filtering: elimina FPs de config filenames (cs-CZ_dev-xxx.js),
    SDK internals (Kameleoon.API.Events), y environment detection strings.

Thread-safe: instancia read-only después de __init__. scan_file() no muta estado.
"""

import bisect
import math
import re
from collections import Counter
from pathlib import Path

import yaml
from rich.console import Console

console = Console()

# ─── Entropy helpers ──────────────────────────────────────────────────────────

def _shannon_entropy(data: str) -> float:
    if not data:
        return 0.0
    length = len(data)
    counts = Counter(data)
    return -sum(
        (count / length) * math.log2(count / length)
        for count in counts.values()
    )


# ─── Noise Filters (compilados una sola vez) ─────────────────────────────────

# URLs que son ruido: W3C namespaces, licenses, framework docs, SVG/XML schemas
_URL_NOISE_PATTERNS = re.compile(
    r"(?:"
    r"w3\.org/"
    r"|polymer\.github\.io/"
    r"|vuejs\.org/error-reference"
    r"|github\.com/[a-zA-Z-]+/[a-zA-Z-]+(?:/issues|/blob|#)"
    r"|bit\.ly/"
    r"|schema\.org"
    r"|iframe-resizer\.com/"
    r"|googleapis\.com/css"
    r"|cdnjs\.cloudflare\.com/"
    r")",
    re.IGNORECASE,
)

# Subdomain FPs: config filenames, SDK internals, environment checks
_SUBDOMAIN_NOISE_PATTERNS = re.compile(
    r"(?:"
    r"[a-z]{2}-[A-Z]{2}_(?:dev|test|prod)"
    r"|\.(?:js|css|json|mjs|map)(?:[\"'\s,)\]])"
    r"|Kameleoon\."
    r"|\.API\."
    r"|\.runWhenElementPresent"
    r"|new URL\("
    r")",
    re.IGNORECASE,
)

# Entropy FPs: i18n keys, CSS, templates, dotted paths
_ENTROPY_NOISE_PATTERNS = re.compile(
    r"(?:"
    r"(?:[a-z]+\.){3,}"
    r"|(?:[a-z]+-){2,}[a-z]+"
    r"|deliveryCosts\.|deliveryOptions\."
    r"|pages\.|form\.|footer\."
    r"|TooltipTitle|TooltipText"
    r"|SpecificProduct_"
    r"|ArticleDetails_"
    r"|background-color|border-radius"
    r"|position:\s*absolute"
    r"|content:\s*[\"']"
    r"|viewBox=|xmlns="
    r"|\\u[0-9a-fA-F]{4}"
    r"|%[0-9a-fA-F]{2}"
    r")",
)

# Sink: Function constructor false positives
_FUNCTION_CONSTRUCTOR_FP = re.compile(
    r"(?:"
    r"isFunction\s*\("
    r"|typeof\s+\w+\s*===?\s*[\"']function"
    r"|\.isFunction\b"
    r")",
)

# setTimeout: solo string argument es sink real
_SETTIMEOUT_STRING_ONLY = re.compile(
    r"setTimeout\s*\(\s*[\"'`]"
)

# ─── Framework signatures ────────────────────────────────────────────────────

_FRAMEWORK_SIGNATURES = {
    "React": [
        r"\bReact\b", r"\bcreateElement\b", r"\buseState\b", r"\buseEffect\b",
        r"\bReactDOM\b", r"__REACT_DEVTOOLS",
    ],
    "Vue.js": [
        r"\bVue\b", r"\bcreateApp\b", r"\bv-bind\b", r"\bv-model\b",
        r"__VUE__", r"__vue__",
    ],
    "Angular": [
        r"\bng-\w+", r"\bangular\b", r"@Component", r"@Injectable",
        r"__ng_", r"platformBrowserDynamic",
    ],
    "jQuery": [
        r"\bjQuery\b", r"\$\(\s*[\"'#\.]", r"\$\.ajax\b", r"\$\.get\b",
    ],
    "Svelte": [
        r"__svelte", r"\bSvelteComponent\b", r"svelte/internal",
    ],
    "Next.js": [
        r"__NEXT_DATA__", r"next/router", r"_next/static",
    ],
    "Nuxt": [
        r"__NUXT__", r"nuxt:reload", r"\bnuxt\b.*\bplugin\b",
    ],
}


class JScanner:
    """Motor de escaneo estático v3 — Surgical precision."""

    def __init__(self, config_dir: str = "config"):
        self.config_dir = Path(config_dir)
        self.rules = self._load_rules()

        self._compiled_sinks = self._compile_group("sinks", "sinks")
        self._compiled_secrets = self._compile_secrets()
        self._compiled_endpoints = self._compile_endpoints()
        self._compiled_frameworks = self._compile_frameworks()

        self._entropy_cfg = self.rules.get("secrets", {}).get("entropy", {})
        self._entropy_enabled = self._entropy_cfg.get("enabled", False)
        self._entropy_skip = [
            re.compile(p) for p in self._entropy_cfg.get("skip_patterns", [])
        ]

        self._quoted_string_re = re.compile(r"""["'`]([^"'`]{16,256})["'`]""")

    # ─── Config Loading ──────────────────────────────────────────────────

    def _load_rules(self) -> dict:
        rules = {}
        for config_name in ("secrets.yaml", "sinks.yaml", "endpoints.yaml"):
            config_path = self.config_dir / config_name
            if config_path.exists():
                with open(config_path, "r", encoding="utf-8") as f:
                    rules[config_name.split(".")[0]] = yaml.safe_load(f) or {}
            else:
                console.print(f"[warning]Config no encontrado: {config_path}[/warning]")
                rules[config_name.split(".")[0]] = {}
        return rules

    # ─── Regex Pre-compilation ───────────────────────────────────────────

    def _compile_group(self, rule_key: str, list_key: str) -> list[dict]:
        compiled = []
        items = self.rules.get(rule_key, {}).get(list_key, [])
        if not items:
            return compiled
        for item in items:
            patterns = []
            for p in item.get("patterns", []):
                try:
                    patterns.append(re.compile(p))
                except re.error as e:
                    console.print(f"[warning]Regex inválido en {item['name']}: {e}[/warning]")
            if patterns:
                compiled.append({**item, "_compiled": patterns})
        return compiled

    def _compile_secrets(self) -> list[dict]:
        compiled = []
        items = self.rules.get("secrets", {}).get("patterns", [])
        if not items:
            return compiled
        for item in items:
            p = item.get("pattern", "")
            if not p:
                continue
            try:
                compiled.append({**item, "_compiled": re.compile(p)})
            except re.error as e:
                console.print(f"[warning]Regex inválido en {item['name']}: {e}[/warning]")
        return compiled

    def _compile_endpoints(self) -> list[dict]:
        compiled = []
        ep_rules = self.rules.get("endpoints", {})
        for section_key in ("endpoints", "cloud_buckets", "urls"):
            items = ep_rules.get(section_key, [])
            if not items:
                continue
            for item in items:
                patterns = []
                for p in item.get("patterns", []):
                    try:
                        patterns.append(re.compile(p))
                    except re.error as e:
                        console.print(f"[warning]Regex inválido en {item['name']}: {e}[/warning]")
                if patterns:
                    compiled.append({**item, "_compiled": patterns, "_section": section_key})
        return compiled

    def _compile_frameworks(self) -> dict[str, list[re.Pattern]]:
        return {
            name: [re.compile(p) for p in patterns]
            for name, patterns in _FRAMEWORK_SIGNATURES.items()
        }

    # ─── Main Scanner ────────────────────────────────────────────────────

    def scan_file(self, file_path: Path) -> list[dict]:
        file_path = Path(file_path)
        try:
            content = file_path.read_text(encoding="utf-8", errors="replace")
        except Exception as e:
            console.print(f"[critical]Error leyendo {file_path}: {e}[/critical]")
            return []

        if not content.strip():
            return []

        line_starts = self._build_line_index(content)
        findings: list[dict] = []

        findings.extend(self._scan_sinks(content, line_starts))
        findings.extend(self._scan_secrets(content, line_starts))
        if self._entropy_enabled:
            findings.extend(self._scan_entropy(content, line_starts))
        findings.extend(self._scan_endpoints(content, line_starts))
        findings.extend(self._detect_frameworks(content))
        findings = self._deduplicate(findings)
        return findings

    # ─── Scan: Sinks (con filtrado contextual) ───────────────────────────

    def _scan_sinks(self, content: str, line_starts: list[int]) -> list[dict]:
        results = []
        for sink in self._compiled_sinks:
            sink_name = sink["name"]

            for regex in sink["_compiled"]:
                for match in regex.finditer(content):
                    ctx_window = self._get_raw_context(content, match.start(), 40, 40)

                    # Function constructor: filtrar isFunction() type-checks
                    if sink_name == "Function constructor":
                        if _FUNCTION_CONSTRUCTOR_FP.search(ctx_window):
                            continue

                    # setTimeout/setInterval: solo string arg es sink
                    if sink_name == "setTimeout with string":
                        local = content[match.start():min(len(content), match.start() + 30)]
                        if not _SETTIMEOUT_STRING_ONLY.match(local):
                            continue

                    if sink_name == "setInterval with string":
                        local = content[match.start():min(len(content), match.start() + 30)]
                        if not re.match(r"setInterval\s*\(\s*[\"'`]", local):
                            continue

                    results.append({
                        "type": "SINK",
                        "name": sink_name,
                        "severity": sink["severity"],
                        "category": sink.get("category", ""),
                        "line": self._get_line_number(line_starts, match.start()),
                        "context": self._get_context(content, match.start(), match.end()),
                    })
        return results

    # ─── Scan: Secrets ───────────────────────────────────────────────────

    def _scan_secrets(self, content: str, line_starts: list[int]) -> list[dict]:
        results = []
        for secret in self._compiled_secrets:
            regex = secret["_compiled"]
            for match in regex.finditer(content):
                matched_value = match.group(1) if match.lastindex else match.group(0)
                results.append({
                    "type": "SECRET",
                    "name": secret["name"],
                    "severity": secret["severity"],
                    "line": self._get_line_number(line_starts, match.start()),
                    "match": self._redact(matched_value),
                    "context": self._get_context(content, match.start(), match.end()),
                })
        return results

    # ─── Scan: Entropy (quirúrgico) ──────────────────────────────────────

    def _scan_entropy(self, content: str, line_starts: list[int]) -> list[dict]:
        results = []
        threshold = self._entropy_cfg.get("shannon_threshold", 4.5)
        min_len = self._entropy_cfg.get("min_length", 16)
        max_len = self._entropy_cfg.get("max_length", 256)

        seen_values: set[str] = set()

        for match in self._quoted_string_re.finditer(content):
            value = match.group(1)

            if len(value) < min_len or len(value) > max_len:
                continue
            if value in seen_values:
                continue
            seen_values.add(value)

            if any(skip.match(value) for skip in self._entropy_skip):
                continue

            # URLs, paths, data URIs
            if value.startswith(("http://", "https://", "/", "./", "../", "data:")):
                continue

            # Texto humano
            if " " in value:
                continue

            # i18n, CSS, SVG, templates
            if _ENTROPY_NOISE_PATTERNS.search(value):
                continue

            # Dotted i18n keys: pages.checkout.delivery.title
            if value.count(".") >= 3 and all(c.isalnum() or c in "._-" for c in value):
                continue

            # CSS blocks
            if "{" in value and "}" in value and (":" in value or ";" in value):
                continue

            # Template literals
            if "${" in value:
                continue

            entropy = _shannon_entropy(value)
            if entropy < threshold:
                continue

            # Context keywords que indican un secreto real
            ctx_around = self._get_raw_context(content, match.start(), 60, 10).lower()
            has_secret_context = any(kw in ctx_around for kw in (
                "key", "secret", "token", "password", "passwd", "apikey",
                "api_key", "auth", "credential", "private", "bearer",
            ))

            # Sin contexto de secreto → threshold más alto para cortar ruido
            if not has_secret_context and entropy < 5.0:
                continue

            results.append({
                "type": "ENTROPY",
                "name": "High-entropy string",
                "severity": "high" if has_secret_context else "medium",
                "line": self._get_line_number(line_starts, match.start()),
                "match": self._redact(value),
                "context": self._get_context(content, match.start(), match.end()),
                "entropy": round(entropy, 2),
            })

        return results

    # ─── Scan: Endpoints (con filtrado de ruido) ─────────────────────────

    def _scan_endpoints(self, content: str, line_starts: list[int]) -> list[dict]:
        results = []
        seen_matches: set[str] = set()

        for rule in self._compiled_endpoints:
            section = rule.get("_section", "endpoint")
            rule_name = rule["name"]

            type_label = {
                "endpoints": "ENDPOINT",
                "cloud_buckets": "CLOUD",
                "urls": "URL",
            }.get(section, "ENDPOINT")

            for regex in rule["_compiled"]:
                for match in regex.finditer(content):
                    matched_value = match.group(0)

                    # URLs: filtrar ruido
                    if rule_name == "Absolute URL":
                        if _URL_NOISE_PATTERNS.search(matched_value):
                            continue

                    # Subdominios: filtrar config files y SDK internals
                    if rule_name == "Subdomain reference":
                        ctx_around = self._get_raw_context(content, match.start(), 30, 30)
                        if _SUBDOMAIN_NOISE_PATTERNS.search(ctx_around):
                            continue
                        if _SUBDOMAIN_NOISE_PATTERNS.search(matched_value):
                            continue

                    dedup_key = f"{rule_name}:{matched_value}"
                    if dedup_key in seen_matches:
                        continue
                    seen_matches.add(dedup_key)

                    results.append({
                        "type": type_label,
                        "name": rule_name,
                        "severity": rule.get("severity", "info"),
                        "category": rule.get("category", ""),
                        "line": self._get_line_number(line_starts, match.start()),
                        "match": matched_value[:120],
                        "context": self._get_context(content, match.start(), match.end()),
                    })
        return results

    # ─── Framework Detection ─────────────────────────────────────────────

    def _detect_frameworks(self, content: str) -> list[dict]:
        results = []
        for name, patterns in self._compiled_frameworks.items():
            hit_count = sum(1 for regex in patterns if regex.search(content))
            if hit_count >= 2:
                results.append({
                    "type": "FRAMEWORK",
                    "name": name,
                    "severity": "info",
                    "line": "N/A",
                    "context": f"{hit_count}/{len(patterns)} signatures matched",
                })
        return results

    # ─── Helpers ─────────────────────────────────────────────────────────

    @staticmethod
    def _build_line_index(content: str) -> list[int]:
        starts = [0]
        for i, ch in enumerate(content):
            if ch == "\n":
                starts.append(i + 1)
        return starts

    @staticmethod
    def _get_line_number(line_starts: list[int], index: int) -> int:
        return bisect.bisect_right(line_starts, index)

    @staticmethod
    def _get_raw_context(content: str, index: int, before: int, after: int) -> str:
        """Contexto sin sanitizar — para uso interno en filtros."""
        start = max(0, index - before)
        end = min(len(content), index + after)
        return content[start:end]

    @staticmethod
    def _get_context(content: str, start_idx: int, end_idx: int,
                     before: int = 50, after: int = 80) -> str:
        ctx_start = max(0, start_idx - before)
        ctx_end = min(len(content), end_idx + after)
        snippet = content[ctx_start:ctx_end]
        snippet = " ".join(snippet.split())
        snippet = snippet.replace("|", "&#124;")
        if len(snippet) > 200:
            snippet = snippet[:200] + "…"
        return f"...{snippet}..."

    @staticmethod
    def _redact(value: str) -> str:
        if len(value) <= 12:
            return value[:3] + "***" + value[-2:]
        return value[:6] + "..." + value[-4:]

    @staticmethod
    def _deduplicate(findings: list[dict]) -> list[dict]:
        seen: set[str] = set()
        unique: list[dict] = []
        for f in findings:
            key = f"{f['type']}:{f['name']}:{f.get('line', '')}"
            if key not in seen:
                seen.add(key)
                unique.append(f)
        return unique
