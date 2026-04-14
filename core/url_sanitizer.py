"""
core/url_sanitizer.py — Limpia y deduplicar URLs de Katana antes de descargar.

Problema resuelto:
  Katana genera URLs fantasma combinando paths relativos con bases incorrectas.
  Ejemplo real del reporte Lidl:
    - recepten.lidl.nl/_next/static/chunks/8506-797a03bfd72317bb.js  ← REAL
    - recepten.lidl.nl/recept/static/chunks/8506-797a03bfd72317bb.js  ← FANTASMA
    - recepten.lidl.nl/selectie/menugang/static/chunks/8506-797a03bfd72317bb.js ← FANTASMA
    - recepten.lidl.nl/legal/static/chunks/8506-797a03bfd72317bb.js  ← FANTASMA
    - recepten.lidl.nl/chunks/8506-797a03bfd72317bb.js  ← FANTASMA

  Resultado: 490 de 534 URLs fallan → 92% de downloads inútiles.

Estrategia:
  1. Deduplicar por filename: si N URLs terminan en el mismo archivo,
     quedarse con la más corta (probablemente la canónica).
  2. Filtrar URLs que son claramente path-mangling de Katana.
  3. HEAD request previo opcional para validar antes de descargar.
"""

import re
from urllib.parse import urlparse, unquote
from collections import defaultdict


# Patterns de URLs que Katana genera mal (path nesting erróneo)
_KATANA_GHOST_PATTERNS = re.compile(
    r"(?:"
    r"/static/chunks/static/"     # recursión de path
    r"|/chunks/chunks/"           # recursión
    r"|/static/chunks/app/.*?/static/"  # Next.js nested ghost
    r"|/chunks/app/.*?/chunks/"   # nested ghost
    r"|/s/\d+-"                   # slug falso + chunk ID
    r"|/recept/static/chunks/"    # page-slug insertado en path de chunk
    r"|/legal/static/chunks/"     # idem
    r"|/selectie/menugang/static/chunks/"  # idem
    r"|/selectie/menugang/ic/"    # idem
    r"|/recept/s/"                # idem
    r"|/legal/s/"                 # idem
    r"|/recept/Bslug"             # URL encode mangling
    r"|/recept/5Blocale"          # URL encode mangling
    r"|/s/static/"                # ghost
    r")",
    re.IGNORECASE,
)


def sanitize_js_urls(urls: set[str]) -> set[str]:
    """
    Limpia y deduplica URLs de JS descubiertas por Katana.

    Args:
        urls: Set de URLs crudas de Katana.

    Returns:
        Set limpio de URLs únicas y probablemente válidas.
    """
    # Paso 1: Normalizar
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
            continue

        # Filtrar Katana ghosts
        if _KATANA_GHOST_PATTERNS.search(decoded):
            continue

        normalized.add(decoded)

    # Paso 2: Deduplicar por filename
    # Agrupar URLs que terminan en el mismo archivo
    by_filename: dict[str, list[str]] = defaultdict(list)
    for url in normalized:
        parsed = urlparse(url)
        filename = parsed.path.rstrip("/").split("/")[-1].split("?")[0]
        if filename:
            # Key = netloc + filename para no cruzar dominios
            key = f"{parsed.netloc}:{filename}"
            by_filename[key].append(url)

    # Para cada grupo, quedarse con la URL más corta (la canónica)
    deduplicated = set()
    for key, url_group in by_filename.items():
        if len(url_group) == 1:
            deduplicated.add(url_group[0])
        else:
            # Preferir la más corta — es la más probable de ser la URL real
            canonical = min(url_group, key=len)
            deduplicated.add(canonical)

    return deduplicated


def get_sanitize_stats(original: set[str], cleaned: set[str]) -> dict:
    """Genera estadísticas de limpieza para logging."""
    removed = len(original) - len(cleaned)
    return {
        "original_count": len(original),
        "cleaned_count": len(cleaned),
        "removed_count": removed,
        "reduction_pct": round(removed / max(len(original), 1) * 100, 1),
    }
