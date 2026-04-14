#!/usr/bin/env python3
"""
JS-Pentest-Automator — Recon Mode (v2.1)

Pipeline concurrente:
  1. Ingesta de URLs (Katana / archivo / manual)
  2. Download + Source Map extraction (paralelo)
  3. AST Deobfuscation pre-scan (paralelo, con fallback)
  4. Static Analysis: sinks, secrets, endpoints (paralelo)
  5. Reporte Rich en terminal + RECON_REPORT.txt (sin Markdown)
"""

import argparse
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
from core.url_sanitizer import sanitize_js_urls, get_sanitize_stats
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

def get_output_dir(url: str) -> Path:
    """Genera estructura de directorios limpia basada en el dominio."""
    domain = urlparse(url).netloc.replace(".", "_")
    if not domain:
        domain = "local_analysis"

    base_path = Path(f"output/{domain}")
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
        findings = scanner.scan_file(file_path)
        result.findings = findings or []
        result.success = True

        # Log inline (thread-safe)
        if findings:
            severity_counts: dict[str, int] = {}
            for f in findings:
                sev = f["severity"].upper()
                severity_counts[sev] = severity_counts.get(sev, 0) + 1

            # Resaltar si hay críticos
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
        title="[info]Recon Mode v2.1[/info]",
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


# ─── Ingestion Pipeline ──────────────────────────────────────────────────────

def run_ingestion_pipeline(url: str, workers: int = MAX_WORKERS):
    """Orquesta: descubrimiento de URLs → cola de procesamiento."""
    output_dir = get_output_dir(url)
    console.print(f"[info]Target:[/info] {url}")

    js_urls: set[str] = set()

    # ── Lógica interactiva ───────────────────────────────────────────────
    has_file = Confirm.ask("¿Tienes un archivo de salida de Katana previo?")

    if has_file:
        katana_file = Prompt.ask("Ruta al archivo Katana")
        katana_path = Path(katana_file)
        if katana_path.exists():
            with open(katana_path) as f:
                for line in f:
                    line = line.strip()
                    if line.endswith(".js"):
                        js_urls.add(line)
            console.print(f"[success]✓[/success] {len(js_urls)} URLs JS cargadas desde archivo")
        else:
            console.print("[critical]✗ Archivo no encontrado[/critical]")
            return
    else:
        run_katana = Confirm.ask("¿Ejecutar Katana ahora?")
        if run_katana:
            js_urls = run_katana_crawler(url)
        else:
            manual = Prompt.ask("Pega URLs JS (separadas por coma o newline)")
            for u in manual.replace(",", "\n").split("\n"):
                u = u.strip()
                if u:
                    js_urls.add(u)

    if not js_urls:
        console.print("[warning]⚠ No se encontraron URLs JS. Abortando.[/warning]")
        return
    clean_urls = sanitize_js_urls(js_urls)
    stats = get_sanitize_stats(js_urls, clean_urls)
    console.print(f"[info]URL Sanitizer: {stats['original_count']} → {stats['cleaned_count']} "
    f"({stats['removed_count']} fantasmas eliminadas, -{stats['reduction_pct']}%)[/info]")
    process_js_queue(clean_urls, output_dir, workers=workers)


def run_katana_crawler(url: str) -> set[str]:
    """Ejecuta Katana y retorna URLs JS descubiertas."""
    js_urls: set[str] = set()
    console.print(f"[info]Ejecutando Katana sobre {url}...[/info]")

    try:
        cmd = ["katana", "-u", url, "-jc", "-d", "3", "-silent"]
        proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, text=True)

        while True:
            ready = select.select([proc.stdout], [], [], 0.1)[0]
            if ready:
                line = proc.stdout.readline()
                if not line:
                    break
                line = line.strip()
                if line.endswith(".js"):
                    js_urls.add(line)
                    safe_print(f"  [muted]→[/muted] {line}")
            elif proc.poll() is not None:
                break

        proc.wait()
    except FileNotFoundError:
        console.print("[critical]✗ Katana no encontrado en PATH[/critical]")

    console.print(f"[success]✓[/success] Katana: {len(js_urls)} archivos JS descubiertos")
    return js_urls


# ─── Local Analysis Mode ─────────────────────────────────────────────────────

def run_local_analysis(js_dir: Path, workers: int = MAX_WORKERS):
    """Escanea archivos JS locales sin descargar."""
    output_dir = Path("output/local_analysis")
    (output_dir / "js_files").mkdir(parents=True, exist_ok=True)
    (output_dir / "reports").mkdir(parents=True, exist_ok=True)

    js_files = list(js_dir.glob("**/*.js"))
    if not js_files:
        console.print("[warning]⚠ No se encontraron archivos .js[/warning]")
        return

    console.print(f"[info]Modo local:[/info] {len(js_files)} archivos en {js_dir}")

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


# ─── CLI ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="JS-Pentest-Automator — Recon Mode v2.1",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    subparsers = parser.add_subparsers(dest="command")

    # Subcomando: recon (URL remota)
    recon_parser = subparsers.add_parser("recon", help="Analizar URL remota")
    recon_parser.add_argument("url", help="URL objetivo (ej: https://www.target.com)")
    recon_parser.add_argument("-w", "--workers", type=int, default=MAX_WORKERS)

    # Subcomando: local (archivos locales)
    local_parser = subparsers.add_parser("local", help="Analizar directorio local")
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
