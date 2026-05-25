#!/usr/bin/env python3
"""
JS-Pentest-Automator — Recon Mode (v2.2)

Pipeline concurrente:
  1. Ingesta de URLs (Katana / archivo / manual)
  2. Download + Source Map extraction (paralelo)
  3. AST Deobfuscation pre-scan (paralelo, con fallback)
  4. Static Analysis: sinks, secrets, endpoints (paralelo)
  5. Reporte Rich en terminal + RECON_REPORT.txt (sin Markdown)

v2.2 — Cambios:
  - recon: ejecuta Katana directamente sin preguntar (zero-friction)
  - local: pregunta por archivo Katana previo (única ruta donde tiene sentido)
  - local: muestra la carpeta de output completa al finalizar
"""

import argparse
import datetime
import select
import subprocess
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass, field
from pathlib import Path
from urllib.parse import urlparse

from rich.console import Console
from rich.panel import Panel
from rich.progress import Progress, SpinnerColumn, TextColumn, BarColumn, MofNCompleteColumn
from rich.prompt import Confirm, Prompt
from rich.theme import Theme

from core.ast_engine import deobfuscate
from core.downloader import download_js_file
from core.map import unpack_map
from core.reporter import build_report          # ← Reporter Rich nativo
from core.scanner import JScanner
from core.url_sanitizer import sanitize_js_urls

# ─── UI ───────────────────────────────────────────────────────────────────────

PENTEST_THEME = Theme({
    "info":     "bold cyan",
    "success":  "bold green",
    "warning":  "bold yellow",
    "critical": "bold red",
    "muted":    "dim white",
})
console = Console(theme=PENTEST_THEME)

_print_lock = threading.Lock()

# ─── Configuración ────────────────────────────────────────────────────────────

MAX_WORKERS = 8


def safe_print(*args, **kwargs):
    """Wrapper thread-safe para console.print."""
    with _print_lock:
        console.print(*args, **kwargs)


# ─── Data Classes ─────────────────────────────────────────────────────────────

@dataclass
class FileResult:
    """Resultado del procesamiento de un solo archivo JS."""
    url: str
    filename: str = ""
    findings: list = field(default_factory=list)
    ast_method: str = "none"
    ast_stats: dict = field(default_factory=dict)
    success: bool = False
    error: str = ""


# ─── Scanner (instancia global, read-only después de __init__) ────────────────

scanner = JScanner()


# ─── Core Functions ───────────────────────────────────────────────────────────

def _normalize_url(url: str) -> str:
    """Asegura esquema HTTP/S para que urlparse() extraiga netloc correctamente."""
    if not url.startswith(("http://", "https://")):
        return "https://" + url
    return url


def get_output_dir(url: str) -> Path:
    """
    Genera estructura de directorios con timestamp por escaneo.
    Cada ejecución crea su propia carpeta dentro del dominio:
    output/{domain}/{YYYY-MM-DD_HHMMSS}/
    ├── js_files/
    └── reports/
    """
    domain = urlparse(_normalize_url(url)).netloc.replace(".", "_")
    if not domain:
        domain = "local_analysis"

    timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H%M%S")
    base_path = Path(f"output/{domain}/{timestamp}")
    (base_path / "js_files").mkdir(parents=True, exist_ok=True)
    (base_path / "reports").mkdir(parents=True, exist_ok=True)

    return base_path


def process_single_js(url: str, output_dir: Path) -> FileResult:
    """
    Procesa un único archivo JS: download → map → AST → scan.
    Diseñado para ejecutarse en un ThreadPoolExecutor.
    """
    result = FileResult(url=url)

    try:
        # ── Paso 1: Download ─────────────────────────────────────────────
        success, file_path = download_js_file(url, output_dir / "js_files")

        if not success or file_path is None:
            result.error = "Download failed"
            return result

        result.filename = file_path.name

        # ── Paso 2: Source Map (oportunista) ─────────────────────────────
        possible_map = Path(str(file_path) + ".map")
        has_source_map = False
        if possible_map.exists():
            has_source_map = unpack_map(possible_map, output_dir)

        # ── Paso 3: AST Deobfuscation ────────────────────────────────────
        if not has_source_map:
            ast_result = deobfuscate(file_path)
            result.ast_method = ast_result.method
            result.ast_stats = ast_result.stats
        else:
            result.ast_method = "source_map"

        # ── Paso 4: Static Scan ──────────────────────────────────────────
        # Pass URL so route-dump parsers can identify sw.js / manifest.json by filename
        findings = scanner.scan_file(file_path, url=url)
        result.findings = findings or []
        result.success = True

        # Log inline (thread-safe)
        if findings:
            severity_counts: dict[str, int] = {}
            for f in findings:
                sev = f["severity"].upper()
                severity_counts[sev] = severity_counts.get(sev, 0) + 1

            has_critical = "CRITICAL" in severity_counts
            sev_str = " | ".join(
                f"{k}: {v}" for k, v in sorted(severity_counts.items())
            )
            tag = "[critical]" if has_critical else "[success]"
            end_tag = "[/critical]" if has_critical else "[/success]"
            safe_print(
                f"  {tag}✓{end_tag} {file_path.name} "
                f"→ {len(findings)} hallazgos ({sev_str})"
            )
        else:
            safe_print(f"  [muted]–[/muted] {file_path.name} → limpio")

    except Exception as exc:
        result.error = str(exc)
        safe_print(f"  [critical]✗ {url}: {exc}[/critical]")

    return result


def process_js_queue(js_urls: set, output_dir: Path, workers: int = MAX_WORKERS):
    """
    Pipeline concurrente: descarga, deobfusca y escanea N archivos en paralelo.
    El reporte se construye en el hilo principal después del join.
    """
    url_list = list(js_urls)
    total = len(url_list)

    console.print(Panel(
        f"[info]Pipeline: Download → AST → Scan → Report[/info]\n"
        f"[muted]{total} archivos | {workers} workers[/muted]",
        title="[info]Recon Mode v2.2[/info]",
        expand=False,
    ))

    results: list[FileResult] = []

    with Progress(
        SpinnerColumn(),
        TextColumn("[progress.description]{task.description}"),
        BarColumn(),
        MofNCompleteColumn(),
        console=console,
    ) as progress:
        task = progress.add_task("Procesando JS...", total=total)

        with ThreadPoolExecutor(max_workers=workers) as executor:
            future_to_url = {
                executor.submit(process_single_js, url, output_dir): url
                for url in url_list
            }

            for future in as_completed(future_to_url):
                try:
                    result = future.result()
                    results.append(result)
                except Exception as exc:
                    url = future_to_url[future]
                    safe_print(f"  [critical]✗ Worker crash ({url}): {exc}[/critical]")
                    results.append(FileResult(url=url, error=str(exc)))
                finally:
                    progress.advance(task)

    # ── Reporte (hilo principal, sin race conditions) ────────────────────
    console.print()
    report_path = build_report(results, output_dir)
    console.print(f"\n  [info]★[/info]  Reporte guardado → [bold white]{report_path}[/bold white]\n")


# ─── Katana Runner ────────────────────────────────────────────────────────────

def run_katana_crawler(url: str) -> set[str]:
    """
    Ejecuta Katana restringido al dominio objetivo.

    Flags de scope:
      -fs fqdn  → sólo URLs cuyo host coincida exactamente con el del target
                  (evita seguir CDNs, third-party scripts, analytics, etc.)
    """
    js_urls: set[str] = set()
    normalized = _normalize_url(url)          # garantiza que tenga https://
    target_domain = urlparse(normalized).netloc  # "qa.lidl.nl", "www.target.com", etc.

    console.print(f"[info]Ejecutando Katana sobre {normalized}...[/info]")
    console.print(f"[muted]Scope → {target_domain} (fqdn strict)[/muted]")

    try:
        cmd = [
            "katana",
            "-u", normalized,  # Katana necesita URL con esquema
            "-jc",             # JavaScript crawling
            "-d", "3",         # profundidad máxima
            "-fs", "fqdn",     # scope estricto: sólo el dominio exacto
            "-silent",
        ]
        proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, text=True)

        skipped_external = 0
        while True:
            ready = select.select([proc.stdout], [], [], 0.1)[0]
            if ready:
                line = proc.stdout.readline()
                if not line:
                    break
                line = line.strip()
                if not line.endswith(".js"):
                    continue
                # Segunda línea de defensa: filtro de dominio en Python
                line_domain = urlparse(line).netloc
                if line_domain and line_domain != target_domain:
                    skipped_external += 1
                    continue
                js_urls.add(line)
                safe_print(f"  [muted]→[/muted] {line}")
            elif proc.poll() is not None:
                break

        proc.wait()

        if skipped_external:
            console.print(
                f"[muted]  ↳ {skipped_external} URLs externas descartadas (out-of-scope)[/muted]"
            )

    except FileNotFoundError:
        console.print("[critical]✗ Katana no encontrado en PATH[/critical]")

    console.print(f"[success]✓[/success] Katana: {len(js_urls)} archivos JS en scope")
    return js_urls


# ─── Ingestion Pipeline (Recon Mode) ─────────────────────────────────────────

def run_ingestion_pipeline(url: str, workers: int = MAX_WORKERS):
    """
    Modo recon: ejecuta Katana directamente y procesa los JS descubiertos.
    Sin preguntas redundantes — si elegiste recon, Katana corre automáticamente.
    """
    output_dir = get_output_dir(url)
    console.print(f"[info]Target:[/info] {url}")
    console.print(f"[info]Output:[/info] {output_dir.resolve()}\n")

    # ── Katana directo (zero-friction) ───────────────────────────────────
    js_urls = run_katana_crawler(url)

    if not js_urls:
        console.print("[warning]⚠ Katana no descubrió URLs JS. Abortando.[/warning]")
        return

    clean_urls, sanitize_stats = sanitize_js_urls(js_urls)
    console.print(
        f"[info]URL Sanitizer: {sanitize_stats['original_count']} → {sanitize_stats['cleaned_count']} "
        f"({sanitize_stats['removed_count']} fantasmas eliminadas, -{sanitize_stats['reduction_pct']}%)[/info]"
    )
    process_js_queue(clean_urls, output_dir, workers=workers)

    # ── Resumen de output ────────────────────────────────────────────────
    console.print(Panel(
        f"[success]Scan completo[/success]\n"
        f"[muted]Output → {output_dir.resolve()}[/muted]",
        title="[info]Done[/info]",
        expand=False,
    ))


# ─── Local Analysis Mode ─────────────────────────────────────────────────────

def run_local_analysis(js_dir: Path, workers: int = MAX_WORKERS):
    """
    Modo local: escanea archivos JS desde disco.

    Ofrece dos opciones de ingesta:
      1. Cargar un archivo de salida de Katana previo (URLs → download + scan)
      2. Escanear directamente el directorio proporcionado (sin download)
    """
    # ── Preguntar si tiene output previo de Katana ───────────────────────
    has_katana_file = Confirm.ask(
        "[info]¿Tienes un archivo de salida de Katana previo para cargar URLs?[/info]"
    )

    if has_katana_file:
        # ── Modo: archivo Katana → download remoto + scan ────────────────
        katana_file = Prompt.ask("Ruta al archivo Katana")
        katana_path = Path(katana_file)

        if not katana_path.exists():
            console.print("[critical]✗ Archivo no encontrado[/critical]")
            return

        js_urls: set[str] = set()
        with open(katana_path) as f:
            for line in f:
                line = line.strip()
                if line.endswith(".js"):
                    js_urls.add(line)

        if not js_urls:
            console.print("[warning]⚠ No se encontraron URLs .js en el archivo. Abortando.[/warning]")
            return

        console.print(f"[success]✓[/success] {len(js_urls)} URLs JS cargadas desde archivo")

        # Necesitamos una URL base para el output dir — extraer del primer URL
        sample_url = next(iter(js_urls))
        output_dir = get_output_dir(sample_url)
        console.print(f"[info]Output:[/info] {output_dir.resolve()}\n")

        clean_urls, sanitize_stats = sanitize_js_urls(js_urls)
        console.print(
            f"[info]URL Sanitizer: {sanitize_stats['original_count']} → {sanitize_stats['cleaned_count']} "
            f"({sanitize_stats['removed_count']} fantasmas eliminadas, -{sanitize_stats['reduction_pct']}%)[/info]"
        )
        process_js_queue(clean_urls, output_dir, workers=workers)

    else:
        # ── Modo: directorio local → scan directo (sin download) ─────────
        if not js_dir.is_dir():
            console.print(f"[critical]✗ No es un directorio válido: {js_dir}[/critical]")
            return

        timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H%M%S")
        output_dir = Path(f"output/local_analysis/{timestamp}")
        (output_dir / "js_files").mkdir(parents=True, exist_ok=True)
        (output_dir / "reports").mkdir(parents=True, exist_ok=True)

        js_files = list(js_dir.glob("**/*.js"))
        if not js_files:
            console.print("[warning]⚠ No se encontraron archivos .js en el directorio[/warning]")
            return

        console.print(f"[info]Modo local:[/info] {len(js_files)} archivos en {js_dir.resolve()}")
        console.print(f"[info]Output:[/info] {output_dir.resolve()}\n")

        results: list[FileResult] = []

        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            BarColumn(),
            MofNCompleteColumn(),
            console=console,
        ) as progress:
            task = progress.add_task("Escaneando...", total=len(js_files))

            with ThreadPoolExecutor(max_workers=workers) as executor:
                def scan_local(fp: Path) -> FileResult:
                    r = FileResult(url=str(fp), filename=fp.name)
                    try:
                        ast_result = deobfuscate(fp)
                        r.ast_method = ast_result.method
                        r.ast_stats = ast_result.stats
                        r.findings = scanner.scan_file(fp) or []
                        r.success = True
                        if r.findings:
                            safe_print(f"  [success]✓[/success] {fp.name} → {len(r.findings)} hallazgos")
                        else:
                            safe_print(f"  [muted]–[/muted] {fp.name} → limpio")
                    except Exception as e:
                        r.error = str(e)
                        safe_print(f"  [critical]✗ {fp.name}: {e}[/critical]")
                    return r

                futures = {executor.submit(scan_local, fp): fp for fp in js_files}
                for future in as_completed(futures):
                    results.append(future.result())
                    progress.advance(task)

        console.print()
        report_path = build_report(results, output_dir)
        console.print(f"\n  [info]★[/info]  Reporte guardado → [bold white]{report_path}[/bold white]\n")

    # ── Resumen final con carpeta completa ───────────────────────────────
    console.print(Panel(
        f"[success]Scan completo[/success]\n"
        f"[muted]Output → {output_dir.resolve()}[/muted]",
        title="[info]Done[/info]",
        expand=False,
    ))


# ─── CLI ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="JS-Pentest-Automator — Recon Mode v2.2",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    subparsers = parser.add_subparsers(dest="command")

    # Subcomando: recon (URL remota)
    recon_parser = subparsers.add_parser("recon", help="Analizar URL remota (Katana automático)")
    recon_parser.add_argument("url", help="URL objetivo (ej: https://www.target.com)")
    recon_parser.add_argument("-w", "--workers", type=int, default=MAX_WORKERS)

    # Subcomando: local (archivos locales)
    local_parser = subparsers.add_parser("local", help="Analizar directorio local de .js")
    local_parser.add_argument("path", help="Directorio con archivos .js")
    local_parser.add_argument("-w", "--workers", type=int, default=MAX_WORKERS)

    args = parser.parse_args()

    if args.command == "recon":
        run_ingestion_pipeline(args.url, args.workers)
    elif args.command == "local":
        run_local_analysis(Path(args.path), args.workers)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
