"""Tests for core.route_dump_parsers — structured route-dump extraction."""

from __future__ import annotations

import sys
from pathlib import Path

# Allow running from the test/ directory without installing the package
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from core.route_dump_parsers import (  # noqa: E402
    detect_and_parse_route_dumps,
    parse_module_federation,
    parse_pwa_manifest,
    parse_service_worker,
    parse_symfony_routes,
    parse_vite_chunkmap,
    parse_webpack_chunkmap,
)

FIXTURES = ROOT / "test" / "fixtures"


def _load(name: str) -> str:
    return (FIXTURES / name).read_text(encoding="utf-8")


def _by_name(findings, name):
    return [f for f in findings if f["name"] == name]


# ─── Symfony FOSJsRoutingBundle ──────────────────────────────────────────────


def test_symfony_extracts_all_routes():
    content = _load("fos_routes_sample.js")
    findings = parse_symfony_routes(content)
    # 5 routes in fixture → 5 findings, all type ROUTE_DUMP
    assert len(findings) == 5
    for f in findings:
        assert f["type"] == "ROUTE_DUMP"
        assert f["name"] == "Symfony route"
        assert f["severity"] == "high"


def test_symfony_resolves_parameterized_paths():
    findings = parse_symfony_routes(_load("fos_routes_sample.js"))
    matches = [f["match"] for f in findings]
    # Parameter-bearing routes should render {id}
    assert any("/nl/myapp/deleteSearch/{id}" in m for m in matches), \
        f"Expected /deleteSearch/{{id}} in {matches}"
    assert any("/nl/myapp/changeAlert/{id}" in m for m in matches), \
        f"Expected /changeAlert/{{id}} in {matches}"


def test_symfony_preserves_http_methods():
    findings = parse_symfony_routes(_load("fos_routes_sample.js"))
    matches = [f["match"] for f in findings]
    assert any(m.startswith("POST ") and "boosted-search" in m for m in matches)
    assert any(m.startswith("GET ") and "jwt" in m for m in matches)


def test_symfony_includes_host_when_available():
    findings = parse_symfony_routes(_load("fos_routes_sample.js"))
    # Fixture has scheme=https + host=www.example.com → absolute URLs in match
    assert all("https://www.example.com" in f["match"] for f in findings)


def test_symfony_skips_garbage_content():
    assert parse_symfony_routes("var x = 1;") == []
    assert parse_symfony_routes("fos.Router.setData()") == []  # empty args


def test_symfony_beats_generic_regex():
    """The whole point of this parser: structured > regex."""
    content = _load("fos_routes_sample.js")
    structured = parse_symfony_routes(content)

    # Simulate the generic regex approach
    import re
    generic = re.findall(r'["\'](\/[a-z0-9/-]+)["\']', content, re.IGNORECASE)
    generic_unique = set(generic)

    # Structured parser must extract ALL routes including parameterized ones,
    # which the generic regex cannot reconstruct from token lists.
    assert len(structured) >= len(generic_unique), \
        f"Structured ({len(structured)}) should match or exceed generic ({len(generic_unique)})"
    # And critically: the parameterized form is unique to the structured parser.
    structured_matches = " ".join(f["match"] for f in structured)
    assert "{id}" in structured_matches


# ─── Service Worker ──────────────────────────────────────────────────────────


def test_service_worker_extracts_workbox_precache():
    findings = parse_service_worker(_load("service_worker_sample.js"))
    urls = {f["match"] for f in findings}
    assert "/api/manifest.json" in urls
    assert "/static/img/logo.svg" in urls
    assert "/static/fonts/inter.woff2" in urls


def test_service_worker_extracts_cache_addall():
    findings = parse_service_worker(_load("service_worker_sample.js"))
    urls = {f["match"] for f in findings}
    assert "/index.html" in urls
    assert "/static/css/main.abc123.css" in urls
    assert "/static/js/main.def456.js" in urls


def test_service_worker_extracts_wb_manifest():
    findings = parse_service_worker(_load("service_worker_sample.js"))
    urls = {f["match"] for f in findings}
    assert "/about" in urls
    assert "/contact" in urls


def test_service_worker_extracts_caches_match():
    findings = parse_service_worker(_load("service_worker_sample.js"))
    urls = {f["match"] for f in findings}
    assert "/api/offline-fallback.json" in urls


# ─── PWA / CRA Manifest ──────────────────────────────────────────────────────


def test_cra_asset_manifest_extracts_all_files():
    content = _load("asset_manifest_sample.json")
    findings = parse_pwa_manifest(content)
    asset_findings = _by_name(findings, "CRA asset manifest entry")
    # Fixture has 6 entries in "files"
    assert len(asset_findings) == 6
    matches = {f["match"] for f in asset_findings}
    assert "/static/js/main.d4e5f6.js" in matches
    assert "/service-worker.js" in matches  # SW reference inside manifest


def test_cra_asset_manifest_extracts_entrypoints():
    findings = parse_pwa_manifest(_load("asset_manifest_sample.json"))
    eps = _by_name(findings, "CRA entrypoint")
    assert len(eps) == 3


def test_pwa_manifest_extracts_start_url_and_scope():
    findings = parse_pwa_manifest(_load("pwa_manifest_sample.json"))
    names = {f["name"]: f["match"] for f in findings}
    assert names.get("PWA manifest start_url") == "/?source=pwa"
    assert names.get("PWA manifest scope") == "/app/"


def test_pwa_manifest_extracts_shortcuts():
    findings = parse_pwa_manifest(_load("pwa_manifest_sample.json"))
    shortcuts = _by_name(findings, "PWA shortcut URL")
    assert len(shortcuts) == 2
    urls = {f["match"] for f in shortcuts}
    assert "/dashboard" in urls
    assert "/settings/profile" in urls


def test_pwa_manifest_invalid_json_returns_empty():
    assert parse_pwa_manifest("not valid json {") == []


def test_pwa_manifest_array_root_returns_empty():
    # Sometimes manifest endpoints return arrays — should not crash
    assert parse_pwa_manifest("[1,2,3]") == []


# ─── Webpack Chunk Map ───────────────────────────────────────────────────────


def test_webpack_extracts_chunk_map():
    findings = parse_webpack_chunkmap(_load("webpack_runtime_sample.js"))
    chunks = _by_name(findings, "Webpack chunk")
    # Fixture has 4 entries in the chunkId map (0, 1, 2, 17)
    assert len(chunks) == 4


def test_webpack_extracts_dynamic_chunk_names():
    findings = parse_webpack_chunkmap(_load("webpack_runtime_sample.js"))
    names = {f["match"] for f in _by_name(findings, "Webpack dynamic chunk name")}
    assert "dashboard" in names
    assert "admin-panel" in names


# ─── Vite Chunk Map ──────────────────────────────────────────────────────────


def test_vite_extracts_mapdeps_array():
    findings = parse_vite_chunkmap(_load("vite_mapdeps_sample.js"))
    chunks = {f["match"] for f in findings}
    # 8 entries in __vite__mapDeps + 3 in __vitePreload = 11 unique
    assert "assets/Academy1-D1KeBM74.js" in chunks
    assert "assets/academy-pyCTizHJ.css" in chunks
    assert "assets/CopyOutlined-BH1AuKB1.js" in chunks
    assert "assets/Admin-XyZ.js" in chunks  # from __vitePreload form


def test_vite_dedupes_chunks_present_in_both_forms():
    """If a chunk appears in both mapdeps and preload, count it once."""
    content = (
        'const __vite__mapDeps = (i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/A.js"])))=>i.map(i=>d[i]);\n'
        '__vitePreload(() => import("./A.js"), ["assets/A.js"]);'
    )
    findings = parse_vite_chunkmap(content)
    assert len(findings) == 1
    assert findings[0]["match"] == "assets/A.js"


def test_dispatcher_routes_vite_by_signature():
    findings = detect_and_parse_route_dumps(
        _load("vite_mapdeps_sample.js"),
        url="https://x.test/index-D7g25rSR.js",
    )
    assert any(f["name"] == "Vite chunk" for f in findings)


# ─── Module Federation ───────────────────────────────────────────────────────


def test_module_federation_extracts_name():
    findings = parse_module_federation(_load("remote_entry_sample.js"))
    names = {f["match"] for f in _by_name(findings, "Module Federation name")}
    assert "shellApp" in names


def test_module_federation_extracts_exposed_modules():
    findings = parse_module_federation(_load("remote_entry_sample.js"))
    exposed = _by_name(findings, "Module Federation exposed module")
    assert len(exposed) == 3
    matches = " ".join(f["match"] for f in exposed)
    assert "./AdminWidget" in matches  # the spicy one


def test_module_federation_extracts_remotes():
    findings = parse_module_federation(_load("remote_entry_sample.js"))
    remotes = _by_name(findings, "Module Federation remote")
    assert len(remotes) == 2
    matches = " ".join(f["match"] for f in remotes)
    assert "cdn.example.com" in matches


# ─── Dispatcher integration ──────────────────────────────────────────────────


def test_dispatcher_routes_by_url_filename():
    sw_content = _load("service_worker_sample.js")
    # Even if signature would fire, URL hint should drive the SW parser
    findings = detect_and_parse_route_dumps(sw_content, url="https://x.test/sw.js")
    assert any(f["name"] == "Service worker cached URL" for f in findings)


def test_dispatcher_routes_pwa_manifest_by_filename():
    findings = detect_and_parse_route_dumps(
        _load("asset_manifest_sample.json"),
        url="https://x.test/asset-manifest.json",
    )
    assert any(f["name"] == "CRA asset manifest entry" for f in findings)


def test_dispatcher_routes_remote_entry_by_filename():
    findings = detect_and_parse_route_dumps(
        _load("remote_entry_sample.js"),
        url="https://cdn.x.test/remoteEntry.js",
    )
    assert any(f["name"] == "Module Federation name" for f in findings)


def test_dispatcher_routes_symfony_by_signature_only():
    """Symfony parser must fire even when the URL hint is irrelevant."""
    findings = detect_and_parse_route_dumps(
        _load("fos_routes_sample.js"),
        url="https://x.test/random.js",
    )
    assert any(f["name"] == "Symfony route" for f in findings)


def test_dispatcher_handles_empty_input():
    assert detect_and_parse_route_dumps("", "") == []
    assert detect_and_parse_route_dumps("   ", "https://x/sw.js") == []


def test_dispatcher_deduplicates_overlap():
    # Symfony content fed twice via different paths shouldn't duplicate findings
    content = _load("fos_routes_sample.js") + "\n" + _load("fos_routes_sample.js")
    findings = detect_and_parse_route_dumps(content, "")
    symfony = [f for f in findings if f["name"] == "Symfony route"]
    # Deduped to 5 unique routes even with content present twice
    assert len(symfony) == 5
