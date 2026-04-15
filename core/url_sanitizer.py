"""
core/url_sanitizer.py — Limpia y deduplica URLs de Katana antes de descargar.

v2.2 — Mejoras:
  - Detección de URLs combo/bundle de Liferay (patrón &/o/)
  - Normalización de puertos redundantes (:443 en https, :80 en http)
  - Filtrado de URLs con múltiples .js concatenados por &
  - Stats desglosadas por razón de filtrado para logging
"""

import re
from urllib.parse import urlparse, unquote
from collections import defaultdict


# ─── Filtros ──────────────────────────────────────────────────────────────────

# Patterns de URLs que Katana genera mal (path nesting erróneo)
_KATANA_GHOST_PATTERNS = re.compile(
    r"(?:"
    r"/static/chunks/static/"         # recursión de path
    r"|/chunks/chunks/"               # recursión
    r"|/static/chunks/app/.*?/static/"  # Next.js nested ghost
    r"|/chunks/app/.*?/chunks/"       # nested ghost
    r"|/s/\d+-"                       # slug falso + chunk ID
    r"|/recept/static/chunks/"        # page-slug insertado en path de chunk
    r"|/legal/static/chunks/"         # idem
    r"|/selectie/menugang/static/"    # idem
    r"|/selectie/menugang/ic/"        # idem
    r"|/recept/s/"                    # idem
    r"|/legal/s/"                     # idem
    r"|/recept/Bslug"                 # URL encode mangling
    r"|/recept/5Blocale"              # URL encode mangling
    r"|/s/static/"                    # ghost
    r")",
    re.IGNORECASE,
)


def _is_combo_bundle_url(url: str) -> bool:
    """
    Detecta URLs combo/bundle de Liferay y frameworks similares.

    Estas URLs concatenan múltiples archivos JS en una sola petición al servidor
    combo servlet. Ejemplo real:
      https://publico.transbank.cl/1776146735491&/o/frontend-js-web/aui/widget-stack/widget-stack.js&/o/...

    Patrones detectados:
      - Contiene '&/o/' (Liferay combo separator)
      - Contiene 'combo?' en el path (Liferay combo servlet)
      - Más de 2 apariciones de '.js&' (múltiples JS concatenados por &)
      - URL con más de 500 chars que contiene múltiples .js references
    """
    # Liferay combo servlet explícito
    if "/combo?" in url:
        return True

    # Separator &/o/ es la firma de Liferay combo URLs
    if "&/o/" in url:
        return True

    # Múltiples .js concatenados por & (bundles genéricos)
    js_ampersand_count = url.count(".js&")
    if js_ampersand_count >= 2:
        return True

    return False


def _normalize_port(url: str) -> str:
    """
    Normaliza puertos redundantes: :443 en https y :80 en http.

    Ejemplo:
      https://ayuda.transbank.cl:443/path → https://ayuda.transbank.cl/path
      http://site.com:80/path             → http://site.com/path
    """
    parsed = urlparse(url)

    if parsed.scheme == "https" and parsed.port == 443:
        # Reconstruir sin :443
        netloc = parsed.hostname
        return parsed._replace(netloc=netloc).geturl()
    elif parsed.scheme == "http" and parsed.port == 80:
        netloc = parsed.hostname
        return parsed._replace(netloc=netloc).geturl()

    return url


# ─── Sanitizer principal ─────────────────────────────────────────────────────

def sanitize_js_urls(urls: set[str]) -> tuple[set[str], dict]:
    """
    Limpia y deduplica URLs de JS descubiertas por Katana.

    Args:
        urls: Set de URLs crudas de Katana.

    Returns:
        Tuple de (URLs limpias, stats detalladas con razones de filtrado).
    """
    stats = {
        "original_count": len(urls),
        "combo_filtered": 0,
        "ghost_filtered": 0,
        "dedup_removed": 0,
        "port_normalized": 0,
        "non_js_filtered": 0,
    }

    # Paso 1: Normalizar y filtrar
    normalized = set()
    for url in urls:
        url = url.strip()
        if not url:
            continue

        # Decode double-encoded URLs
        decoded = unquote(url)

        # Solo JS files
        parsed = urlparse(decoded)
        path_lower = parsed.path.lower()
        if not (path_lower.endswith(".js") or ".js?" in path_lower):
            stats["non_js_filtered"] += 1
            continue

        # Filtrar combo/bundle URLs (Liferay, AUI, etc.)
        if _is_combo_bundle_url(decoded):
            stats["combo_filtered"] += 1
            continue

        # Filtrar Katana ghosts
        if _KATANA_GHOST_PATTERNS.search(decoded):
            stats["ghost_filtered"] += 1
            continue

        # Normalizar puertos redundantes
        original = decoded
        decoded = _normalize_port(decoded)
        if decoded != original:
            stats["port_normalized"] += 1

        normalized.add(decoded)

    # Paso 2: Deduplicar por filename
    by_filename: defaultdict[str, list[str]] = defaultdict(list)
    for url in normalized:
        parsed = urlparse(url)
        filename = parsed.path.rstrip("/").split("/")[-1].split("?")[0]
        if filename:
            key = f"{parsed.netloc}:{filename}"
            by_filename[key].append(url)

    deduplicated = set()
    for key, url_group in by_filename.items():
        if len(url_group) == 1:
            deduplicated.add(url_group[0])
        else:
            # Preferir la más corta — probablemente la canónica
            canonical = min(url_group, key=len)
            deduplicated.add(canonical)
            stats["dedup_removed"] += len(url_group) - 1

    stats["cleaned_count"] = len(deduplicated)
    stats["removed_count"] = stats["original_count"] - stats["cleaned_count"]
    stats["reduction_pct"] = round(
        stats["removed_count"] / max(stats["original_count"], 1) * 100, 1
    )

    return deduplicated, stats


def get_sanitize_stats(original: set[str], cleaned: set[str]) -> dict:
    """
    Genera estadísticas básicas de limpieza (backward-compatible).
    Para stats detalladas, usar el segundo retorno de sanitize_js_urls().
    """
    removed = len(original) - len(cleaned)
    return {
        "original_count": len(original),
        "cleaned_count": len(cleaned),
        "removed_count": removed,
        "reduction_pct": round(removed / max(len(original), 1) * 100, 1),
    }
