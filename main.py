#!/usr/bin/env python3
"""
JS-Pentest-Automator — Recon Mode (v2.0)

Pipeline concurrente:
  1. Ingesta de URLs (Katana / archivo / manual)
  2. Download + Source Map extraction (paralelo)
  3. AST Deobfuscation pre-scan (paralelo, con fallback)
  4. Static Analysis: sinks, secrets, endpoints (paralelo)
  5. Reporte maestro thread-safe en Markdown
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
from core.scanner import JScanner

# ─── UI ───────────────────────────────────────────────────────────────────────

PENTEST_THEME = Theme({
    "info": "bold cyan",
    "success": "bold green",
    "warning": "bold yellow",
    "critical": "bold red",
    "muted": "dim white",
})
console = Console(theme=PENTEST_THEME)

# Lock global para operaciones de Rich (print thread-safe)
_print_lock = threading.Lock()

# ─── Configuración ────────────────────────────────────────────────────────────

MAX_WORKERS = 8          # Hilos de descarga + análisis
REPORT_FILENAME = "RECON_REPORT.md"


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
    Toda la I/O de cada archivo es independiente.
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

        # ── Paso 3: AST Deobfuscation (solo si NO hay source map) ────────
        # Si tenemos source map, el código original ya está desempaquetado;
        # el archivo .js minificado sigue siendo útil para regex scanning,
        # pero no necesita deobfuscación AST.
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
            severity_counts = {}
            for f in findings:
                sev = f["severity"].upper()
                severity_counts[sev] = severity_counts.get(sev, 0) + 1
            
            sev_str = " | ".join(f"{k}: {v}" for k, v in sorted(severity_counts.items()))
            safe_print(f"  [success]✓[/success] {file_path.name} → {len(findings)} hallazgos ({sev_str})")
        else:
            safe_print(f"  [muted]–[/muted] {file_path.name} → limpio")

    except Exception as exc:
        result.error = str(exc)
        safe_print(f"  [critical]✗ {url}: {exc}[/critical]")

    return result


def build_report(results: list[FileResult], output_dir: Path) -> Path:
    """
    Genera el reporte Markdown maestro a partir de los resultados.
    
    Se ejecuta en el hilo principal DESPUÉS de que todos los workers terminan,
    así que no necesita locks.
    """
    # Ordenar: archivos con más hallazgos primero
    results.sort(key=lambda r: len(r.findings), reverse=True)

    total_findings = sum(len(r.findings) for r in results)
    total_files = len(results)
    success_files = sum(1 for r in results if r.success)

    lines = [
        f"# JS-Pentest-Automator — Recon Report",
        f"**Target:** `{output_dir.name}`  ",
        f"**Files analyzed:** {success_files}/{total_files}  ",
        f"**Total findings:** {total_findings}  ",
        "",
        "---",
        "",
    ]

    # ── Resumen ejecutivo ────────────────────────────────────────────────
    severity_totals = {}
    type_totals = {}
    for r in results:
        for f in r.findings:
            sev = f["severity"].upper()
            severity_totals[sev] = severity_totals.get(sev, 0) + 1
            ftype = f["type"]
            type_totals[ftype] = type_totals.get(ftype, 0) + 1

    if severity_totals:
        lines.append("## Executive Summary")
        lines.append("")
        lines.append("| Severity | Count |")
        lines.append("|----------|-------|")
        for sev in ["CRITICAL", "HIGH", "MEDIUM", "LOW", "INFO"]:
            if sev in severity_totals:
                lines.append(f"| **{sev}** | {severity_totals[sev]} |")
        lines.append("")

        lines.append("| Type | Count |")
        lines.append("|------|-------|")
        for ftype, count in sorted(type_totals.items()):
            lines.append(f"| {ftype} | {count} |")
        lines.append("")
        lines.append("---")
        lines.append("")

    # ── Detalle por archivo ──────────────────────────────────────────────
    for r in results:
        if not r.success:
            lines.append(f"## ✗ `{r.url}`")
            lines.append(f"**Error:** {r.error}")
            lines.append("")
            continue

        if not r.findings:
            continue  # No incluir archivos limpios en el reporte detallado

        lines.append(f"## `{r.filename}`")
        lines.append(f"- **URL:** {r.url}")
        lines.append(f"- **Deobfuscation:** {r.ast_method}")
        
        if r.ast_stats:
            active_stats = {k: v for k, v in r.ast_stats.items() if v > 0}
            if active_stats:
                lines.append(f"- **AST Transforms:** {active_stats}")
        
        lines.append("")
        lines.append("| Type | Severity | Rule | Line | Context |")
        lines.append("|------|----------|------|------|---------|")

        for f in r.findings:
            ctx = f.get("context", "N/A")
            # Sanitizar para Markdown table
            ctx = ctx.replace("\n", " ").replace("|", "&#124;")
            sev = f["severity"].upper()
            lines.append(
                f"| {f['type']} | **{sev}** | {f['name']} | {f.get('line', 'N/A')} | `{ctx}` |"
            )

        lines.append("")
        lines.append("---")
        lines.append("")

    report_path = output_dir / "reports" / REPORT_FILENAME
    report_path.write_text("\n".join(lines), encoding="utf-8")
    return report_path


def process_js_queue(js_urls: set, output_dir: Path, workers: int = MAX_WORKERS):
    """
    Pipeline concurrente: descarga, deobfusca y escanea N archivos en paralelo.
    
    Estrategia de thread-safety:
      - Cada worker opera sobre su propio archivo (no comparte file paths).
      - console.print se serializa via _print_lock.
      - El reporte se construye DESPUÉS de join, en el hilo principal.
      - JScanner es read-only después de __init__ (safe para compartir).
    """
    url_list = list(js_urls)
    total = len(url_list)

    console.print(Panel(
        f"[info]Pipeline: Download → AST → Scan → Report[/info]\n"
        f"[muted]{total} archivos | {workers} workers[/muted]",
        title="[info]Recon Mode v2.0[/info]",
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
            # Lanzar todos los jobs
            future_to_url = {
                executor.submit(process_single_js, url, output_dir): url
                for url in url_list
            }

            # Recoger resultados conforme terminan
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
    report_path = build_report(results, output_dir)

    # ── Resumen final ────────────────────────────────────────────────────
    total_findings = sum(len(r.findings) for r in results)
    critical_count = sum(
        1 for r in results for f in r.findings if f["severity"].upper() == "CRITICAL"
    )

    console.print()
    if critical_count > 0:
        console.print(f"[critical]★ {critical_count} hallazgos CRÍTICOS detectados[/critical]")
    console.print(f"[success]★ Escaneo finalizado: {total_findings} items en {total} archivos[/success]")
    console.print(f"[info]★ Reporte: {report_path}[/info]")


# ─── Ingestion Pipeline ──────────────────────────────────────────────────────

def run_ingestion_pipeline(url: str, workers: int = MAX_WORKERS):
    """Orquesta: descubrimiento de URLs → cola de procesamiento."""
    output_dir = get_output_dir(url)
    console.print(f"[info]Target:[/info] {url}")

    js_urls: set[str] = set()

    # ── Lógica interactiva ───────────────────────────────────────────────
    has_file = Confirm.ask("¿Tienes un archivo de salida de Katana previo?", default=False)

    if has_file:
        file_path = Prompt.ask("Introduce la ruta del archivo")
        p = Path(file_path)
        if p.exists():
            with open(p, "r") as f:
                js_urls.update(
                    line.strip() for line in f
                    if line.strip() and ".js" in line
                )
            console.print(f"[success]Cargadas {len(js_urls)} URLs desde archivo[/success]")
        else:
            console.print(f"[critical]Archivo no encontrado: {file_path}[/critical]")
    else:
        if Confirm.ask("¿Ejecutar Katana crawler?", default=True):
            depth = Prompt.ask("Profundidad (depth)", default="3")
            katana_timeout = Prompt.ask("Timeout en segundos", default="180")

            # Normalizar URL: Katana necesita protocolo explícito
            target_url = url if url.startswith(("http://", "https://")) else f"https://{url}"

            cmd = [
                "katana",
                "-u", target_url,
                "-d", str(depth),
                "-em", "js,json",
                "-hl",
                "-no-color",
                "-silent",
                "-timeout", "10",
                "-H", "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
            ]

            console.print(f"[muted]Ejecutando:[/muted] katana -u {target_url} -d {depth} -em js,json")

            # Streaming con Popen: capturamos URLs en tiempo real
            # en lugar de esperar a que Katana termine (puede no terminar nunca)
            try:
                proc = subprocess.Popen(
                    cmd,
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                    text=True,
                    bufsize=1,  # Line-buffered
                )

                deadline = time.monotonic() + int(katana_timeout)

                # Leer stdout línea por línea con timeout global
                while time.monotonic() < deadline:
                    # Verificar si el proceso terminó
                    retcode = proc.poll()
                    if retcode is not None:
                        # Proceso terminó → leer las últimas líneas
                        for line in proc.stdout:
                            stripped = line.strip()
                            if stripped.startswith("http"):
                                js_urls.add(stripped)
                                safe_print(f"  [muted]↳[/muted] {stripped}")
                        break

                    # Leer una línea (non-blocking via select o readline con timeout)
                    ready, _, _ = select.select([proc.stdout], [], [], 1.0)
                    if ready:
                        line = proc.stdout.readline()
                        if not line:
                            break
                        stripped = line.strip()
                        if stripped.startswith("http"):
                            js_urls.add(stripped)
                            safe_print(f"  [muted]↳[/muted] {stripped}")
                else:
                    # Timeout alcanzado → matar Katana
                    console.print(f"[warning]Katana timeout ({katana_timeout}s) — terminando proceso[/warning]")
                    proc.terminate()
                    try:
                        proc.wait(timeout=5)
                    except subprocess.TimeoutExpired:
                        proc.kill()
                        proc.wait()

                # Leer stderr para diagnóstico
                stderr_out = proc.stderr.read() if proc.stderr else ""
                if stderr_out and not stderr_out.strip().startswith("[INF]"):
                    console.print(f"[warning]Katana stderr:[/warning] {stderr_out.strip()[:200]}")

                console.print(f"[success]Katana descubrió {len(js_urls)} URLs de JS[/success]")

            except FileNotFoundError:
                console.print("[critical]Katana no encontrado en PATH. Instálalo: go install github.com/projectdiscovery/katana/cmd/katana@latest[/critical]")
            except Exception as e:
                console.print(f"[critical]Error ejecutando Katana: {e}[/critical]")

    # ── Lanzar pipeline ──────────────────────────────────────────────────
    if js_urls:
        process_js_queue(js_urls, output_dir, workers=workers)
    else:
        console.print("[warning]No se descubrieron archivos JS.[/warning]")


# ─── Entrypoint ──────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="JS-Pentest-Automator — Recon Mode v2.0",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="Ejemplo: python main.py -u https://target.com -w 12",
    )
    parser.add_argument("-u", "--url", help="URL objetivo", required=True)
    parser.add_argument(
        "-w", "--workers",
        help="Número de workers concurrentes (default: 8)",
        type=int,
        default=MAX_WORKERS,
    )
    args = parser.parse_args()

    # Clamp workers entre 1 y 32
    workers = max(1, min(args.workers, 32))

    try:
        run_ingestion_pipeline(args.url, workers=workers)
    except KeyboardInterrupt:
        console.print("\n[warning]Interrumpido por el usuario.[/warning]")


if __name__ == "__main__":
    main()
