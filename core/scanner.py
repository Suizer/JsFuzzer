"""
core/scanner.py — Motor de análisis estático para JS (v5 — Precision)

Cambios vs v4:
  - Entropy: filtro quirúrgico contra código minificado (Salesforce Aura/LWC,
    event handlers, DOM APIs, framework internals). El 95% de los ENTROPY FPs
    del reporte Lidl eran strings de código minificado con keywords como
    "keydown", "keyCode", "addEventListener", "getCallback" — NO secretos.
  - Entropy: nuevo filtro de "code smell" — si un string contiene >=3 tokens
    de código JS (function, return, var, this, if, else, etc.), se descarta.
  - URL noise: filtros ampliados para salesforce.com schemas, reactjs.org,
    nextjs.org docs, momentjs.com, ckeditor.com, youtube.com embeds,
    googleapis.com (excepto APIs activas), gstatic.com, Google SDK URLs.
  - Subdomain noise: filtros para salesforce.com internals.

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

# URLs que son ruido: framework docs, schemas, CDNs, error pages
_URL_NOISE_PATTERNS = re.compile(
    r"(?:"
    r"w3\.org/"
    r"|polymer\.github\.io/"
    r"|vuejs\.org/"
    r"|reactjs\.org/"
    r"|react\.dev/"
    r"|nextjs\.org/"
    r"|momentjs\.com/"
    r"|ckeditor\.com/"
    r"|github\.com/[a-zA-Z-]+/[a-zA-Z-]+(?:/issues|/blob|#)"
    r"|bit\.ly/"
    r"|schema\.org"
    r"|iframe-resizer\.com/"
    r"|googleapis\.com/css"
    r"|cdnjs\.cloudflare\.com/"
    r"|fb\.me/"
    r"|err\.47ng\.com/"
    r"|salesforce\.com/charts/"
    r"|json-schema\.org/"
    r"|lwc\.dev/"
    r"|sfdc\.co/"
    r"|unpkg\.com/"
    r"|cdn\.jsdelivr\.net/"
    r"|gstatic\.com/"
    r"|youtube\.com/iframe_api"
    r"|youtube\.com/embed/"
    r"|youtube\.com/subscribe"
    r"|google-analytics\.com/"
    r"|googletagmanager\.com/"
    r"|accounts\.google\.com/o/oauth2"
    r"|plus\.google\.com"
    r"|plus\.googleapis\.com"
    r"|play\.google\.com/"
    r"|classroom\.google\.com/"
    r"|families\.google\.com/"
    r"|workspace\.google\.com/"
    r"|drive\.google\.com/"
    r"|pay\.google\.com/"
    r"|talkgadget\.google\.com/"
    r"|clients3\.google\.com/"
    r"|apis\.google\.com/"
    r"|www\.google\.com/shopping/"
    r"|dataconnector\.corp\.google\.com/"
    r"|apache\.org/licenses"
    r"|lightningdesignsystem\.com/"
    r"|ct\.de/"
    r"|cke4\.ckeditor\.com/"
    r"|yarnpkg\.com/"
    r"|facebook\.com/sharer"
    r"|twitter\.com/intent"
    r"|x\.com/intent"
    r"|linkedin\.com/shareArticle"
    r"|pinterest\.com/pin/"
    r"|reddit\.com/submit"
    r"|t\.me/share"
    r"|tumblr\.com/widgets"
    r"|vk\.com/share"
    r"|xing\.com/spi"
    r"|buffer\.com/add"
    r"|getpocket\.com/save"
    r"|stumbleupon\.com/submit"
    r"|flipboard\.com/bookmarklet"
    r"|diasporafoundation\.org/"
    r"|addthis\.com/"
    r"|weibo\.com/share"
    r"|qzone\.qq\.com/"
    r"|lidlplus\.com/"
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
    r"|api\.salesforce\.com"
    r"|api\.reciteme\.com"
    r"|dev\.virtualearth\.net"
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

# Entropy: tokens de código JS — si un string tiene >=3 de estos, es código no secreto
_CODE_TOKENS = re.compile(
    r"\b(?:"
    r"function|return|var|let|const|this|if|else|for|while|switch|case|break"
    r"|throw|catch|try|new|typeof|instanceof|void|delete|null|undefined|true|false"
    r"|document|window|console|addEventListener|removeEventListener|createElement"
    r"|getAttribute|setAttribute|appendChild|removeChild|querySelector"
    r"|indexOf|substring|toString|prototype|hasOwnProperty"
    r"|\.push|\.pop|\.shift|\.splice|\.slice|\.map|\.filter|\.reduce|\.forEach"
    r"|\.length|\.split|\.join|\.replace|\.match|\.test|\.exec"
    r"|\.get\(|\.set\(|\.add\(|\.has\("
    r"|keyCode|keydown|keyup|keypress|click|focus|blur|mouseover|mousedown"
    r"|preventDefault|stopPropagation|getCallback|fireEvent"
    r"|getParam|setParam|getComponent|getElement|getReference"
    r")\b",
    re.IGNORECASE,
)

# Entropy: patrones de código minificado → no secreto
_MINIFIED_CODE_PATTERNS = re.compile(
    r"(?:"
    r"===?\s*[\"']"
    r"|!==?\s*[\"']"
    r"|\(\s*function"
    r"|\.prototype\."
    r"|\.call\(|\.apply\("
    r"|\.bind\("
    r"|=>\s*\{"
    r"|\?\s*\w+\s*:"
    r"|&&\s*\w+|[\|]{2}\s*\w+"
    r"|\\x3d|\\x3e|\\x3c"
    r"|aura://"
    r"|markup://"
    r"|\$A\.util\."
    r"|\$A\.get\("
    r"|getEvt\("
    r"|metricsService"
    r"|force_record"
    r"|RecordTemplate"
    r"|MetadataStore"
    r")",
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
    "Salesforce Aura/LWC": [
        r"\$A\.", r"aura://", r"markup://", r"lightning-",
        r"__AURA__", r"Aura\.Component",
    ],
}


class JScanner:
    """Motor de escaneo estático v5 — Precision-grade secret & endpoint detection."""

    def __init__(self, config_dir: str = "config"):
        self.config_dir = Path(config_dir)
        self.rules = self._load_rules()

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
        for config_name in ("secrets.yaml", "endpoints.yaml"):
            config_path = self.config_dir / config_name
            if config_path.exists():
                with open(config_path, "r", encoding="utf-8") as f:
                    rules[config_name.split(".")[0]] = yaml.safe_load(f) or {}
            else:
                console.print(f"[warning]Config no encontrado: {config_path}[/warning]")
                rules[config_name.split(".")[0]] = {}
        return rules

    # ─── Regex Pre-compilation ───────────────────────────────────────────

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

        findings.extend(self._scan_secrets(content, line_starts))
        if self._entropy_enabled:
            findings.extend(self._scan_entropy(content, line_starts))
        findings.extend(self._scan_endpoints(content, line_starts))
        findings.extend(self._detect_frameworks(content))
        findings = self._deduplicate(findings)
        return findings

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

    # ─── Scan: Entropy (quirúrgico v2) ───────────────────────────────────

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

            # ── Fast-path exclusions ─────────────────────────────────────
            if value.startswith(("http://", "https://", "/", "./", "../", "data:")):
                continue
            if " " in value:
                continue
            if _ENTROPY_NOISE_PATTERNS.search(value):
                continue
            if value.count(".") >= 3 and all(c.isalnum() or c in "._-" for c in value):
                continue
            if "{" in value and "}" in value and (":" in value or ";" in value):
                continue
            if "${" in value:
                continue

            # ── Code-smell detection (NEW v5) ────────────────────────────
            if _MINIFIED_CODE_PATTERNS.search(value):
                continue

            code_token_count = len(_CODE_TOKENS.findall(value))
            if code_token_count >= 3:
                continue

            # Context check: code-like chars + minified context = skip
            ctx_wide = self._get_raw_context(content, match.start(), 120, 120)
            if _MINIFIED_CODE_PATTERNS.search(ctx_wide):
                if any(c in value for c in "(){}[];=<>!&|"):
                    continue

            # ── Entropy calculation ──────────────────────────────────────
            entropy = _shannon_entropy(value)
            if entropy < threshold:
                continue

            # Secret-context keywords
            ctx_around = self._get_raw_context(content, match.start(), 60, 10).lower()
            has_secret_context = any(kw in ctx_around for kw in (
                "key", "secret", "token", "password", "passwd", "apikey",
                "api_key", "auth", "credential", "private", "bearer",
            ))

            # Stricter threshold without secret context (v5: 5.0 → 5.5)
            if not has_secret_context and entropy < 5.5:
                continue

            # Framework-context killer: Salesforce/Aura/DOM code = not a secret
            if not has_secret_context:
                if any(fw in ctx_around for fw in (
                    "$a.", "aura://", "markup://", "getparam", "setparam",
                    "getcallback", "getelement", "getcomponent", "fireevent",
                    "addeventlistener", "removeeventlistener", "keydown",
                    "keyup", "keycode", "keypress", "metricsservice",
                    "force_record", "recordtemplate", "metadatastore",
                    "descriptor", "controller", "action$",
                    "regexp(", "\\x3d", "\\x3e",
                    "createelement", "appendchild", "queryselector",
                    "classlist", "setattribute", "getattribute",
                )):
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

                    if rule_name == "Absolute URL":
                        if _URL_NOISE_PATTERNS.search(matched_value):
                            continue

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
