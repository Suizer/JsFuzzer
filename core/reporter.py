"""
core/reporter.py — Generador de reportes para JS-Pentest-Automator.
 
v2.2 — Mejoras:
  - Sección FAILED DOWNLOADS reemplazada por DOWNLOAD SUMMARY compacto
  - URLs fallidas se guardan en archivo separado (failed_urls.log)
  - Solo archivos con findings aparecen listados (sin clutter de archivos limpios)
"""
 
import datetime
from collections import Counter
from pathlib import Path
from urllib.parse import urlparse
 
from rich.console import Console
from rich.panel import Panel
from rich.rule import Rule
from rich.table import Table
from rich.text import Text
from rich.theme import Theme
 
 
# ─── Theme ────────────────────────────────────────────────────────────────────
 
PENTEST_THEME = Theme({
    "info":          "bold cyan",
    "success":       "bold green",
    "warning":       "bold yellow",
    "critical":      "bold red",
    "muted":         "dim white",
    "accent":        "bold cyan",
    "file.header":   "bold white",
    "sev.critical":  "bold white on red",
    "sev.high":      "bold red",
    "sev.medium":    "bold yellow",
    "sev.low":       "bold blue",
    "sev.info":      "dim white",
})
 
# ─── Constantes ───────────────────────────────────────────────────────────────
 
REPORT_FILENAME = "RECON_REPORT.txt"
FAILED_LOG_FILENAME = "failed_urls.log"
 
SEV_ORDER = {"CRITICAL": 0, "HIGH": 1, "MEDIUM": 2, "LOW": 3, "INFO": 4}
SEV_ICON  = {"CRITICAL": "💀", "HIGH": "🔴", "MEDIUM": "🟡", "LOW": "🔵", "INFO": "⚪"}
SEV_STYLE = {
    "CRITICAL": "sev.critical",
    "HIGH":     "sev.high",
    "MEDIUM":   "sev.medium",
    "LOW":      "sev.low",
    "INFO":     "sev.info",
}
TYPE_STYLE = {
    "SECRET":    "bold red",
    "ENDPOINT":  "bold cyan",
    "URL":       "bold white",
    "CLOUD":     "bold magenta",
    "FRAMEWORK": "bold green",
    "ENTROPY":   "bold yellow",
    "SINK":      "bold red",
}
 
 
# ─── Helpers ──────────────────────────────────────────────────────────────────
def _classify_failed_url(url) -> str:
    if not isinstance(url, str):
        return "dato inválido (non-string URL)"
    # ... resto igual 
def _sev_badge(sev: str) -> Text:
    label = f" {SEV_ICON.get(sev, '·')} {sev} "
    t = Text(label, style=SEV_STYLE.get(sev, ""))
    return t
 
 
def _type_badge(ftype: str) -> Text:
    t = Text(f"[{ftype}]", style=TYPE_STYLE.get(ftype, "white"))
    return t
 
 
def _sort_findings(findings: list[dict]) -> list[dict]:
    return sorted(findings, key=lambda f: SEV_ORDER.get(f["severity"].upper(), 99))
 
 
def _sort_results(results: list) -> list:
    """Ordena FileResult por criticidad máxima, luego por cantidad."""
    def _key(r):
        if not r.findings:
            return (99, 0)
        min_sev = min(SEV_ORDER.get(f["severity"].upper(), 99) for f in r.findings)
        return (min_sev, -len(r.findings))
    return sorted(results, key=_key)
 
 
def _severity_counts(findings: list[dict]) -> dict[str, int]:
    counts: dict[str, int] = {}
    for f in findings:
        sev = f["severity"].upper()
        counts[sev] = counts.get(sev, 0) + 1
    return counts
 
 
def _clean_context(ctx: str) -> str:
    return ctx.replace("&#124;", "|").replace("  ", " ").strip()
 
 
def _truncate_url(url: str, max_len: int = 80) -> str:
    """Trunca URLs largas para display compacto."""
    if len(url) <= max_len:
        return url
    return url[:max_len - 3] + "..."
 
 
# ─── Sección: Header ─────────────────────────────────────────────────────────
 
def _render_header(console: Console, output_dir_name: str, total_files: int,
                   success_files: int, total_findings: int) -> None:
    ts = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
 
    title = Text()
    title.append("JS-PENTEST-AUTOMATOR", style="bold white")
    title.append("  ·  ", style="dim white")
    title.append("RECON REPORT", style="bold cyan")
    title.append("  ·  ", style="dim white")
    title.append(ts, style="dim cyan")
 
    meta = Text()
    meta.append("  Target  : ", style="dim white")
    meta.append(output_dir_name, style="bold white")
    meta.append("\n  Files   : ", style="dim white")
    meta.append(f"{success_files}/{total_files}", style="bold white")
    meta.append(" analyzed\n  Total   : ", style="dim white")
    meta.append(str(total_findings), style="bold white")
    meta.append(" findings", style="dim white")
 
    console.print()
    console.print(Panel(meta, title=title, border_style="cyan", expand=False, padding=(0, 2)))
    console.print()
 
 
# ─── Sección: Summary Table ──────────────────────────────────────────────────
 
def _render_summary(console: Console, all_findings: list[dict]) -> None:
    severity_totals: dict[str, int] = {}
    type_totals: dict[str, int] = {}
 
    for f in all_findings:
        sev = f["severity"].upper()
        severity_totals[sev] = severity_totals.get(sev, 0) + 1
        ftype = f["type"].upper()
        type_totals[ftype] = type_totals.get(ftype, 0) + 1
 
    console.print(Rule("[accent]SEVERITY BREAKDOWN[/accent]", style="cyan"))
    console.print()
 
    sev_table = Table(show_header=False, box=None, padding=(0, 2))
    sev_table.add_column(min_width=20)
    sev_table.add_column(justify="right", min_width=6)
    sev_table.add_column(min_width=4)
    sev_table.add_column(min_width=20)
    sev_table.add_column(justify="right", min_width=6)
 
    sev_items = sorted(severity_totals.items(), key=lambda x: SEV_ORDER.get(x[0], 99))
    type_items = sorted(type_totals.items(), key=lambda x: -x[1])
 
    max_rows = max(len(sev_items), len(type_items))
    for i in range(max_rows):
        sev_cell = ""
        sev_count = ""
        type_cell = ""
        type_count = ""
 
        if i < len(sev_items):
            sev, cnt = sev_items[i]
            sev_cell = f"   {SEV_ICON.get(sev, '·')} {sev}"
            sev_count = str(cnt)
        if i < len(type_items):
            tp, cnt = type_items[i]
            type_cell = f"[{tp}]"
            type_count = str(cnt)
 
        sev_table.add_row(sev_cell, sev_count, "   ", type_cell, type_count)
 
    console.print(sev_table)
    console.print()
 
 
# ─── Sección: Finding individual ─────────────────────────────────────────────
 
def _render_finding(console: Console, finding: dict, idx: int, total: int) -> None:
    sev = finding["severity"].upper()
    ftype = finding["type"].upper()
    name = finding.get("name", "")
    line = finding.get("line", "?")
    context = _clean_context(finding.get("context", ""))
    match_val = finding.get("match", "")
 
    is_last = (idx == total - 1)
    connector = "└─" if is_last else "├─"
    prefix = "     " if is_last else "  │  "
 
    header = Text()
    header.append(f"  {connector}  ", style="dim white")
    header.append(_sev_badge(sev))
    header.append("   ", style="")
    header.append(_type_badge(ftype))
    header.append(f"  {name}", style="bold white")
    header.append(f"  ·  line {line}", style="dim white")
 
    console.print(header)
 
    if context:
        console.print(f"{prefix}  [dim white]{context}[/dim white]")
 
    console.print()
 
 
# ─── Sección: File Block ─────────────────────────────────────────────────────
 
def _render_file_block(console: Console, result) -> None:
    if not result.findings:
        return
 
    sorted_findings = _sort_findings(result.findings)
    counts = _severity_counts(result.findings)
 
    header = Text()
    header.append("  ▶ ", style="bold cyan")
    header.append(result.filename or result.url, style="file.header")
    header.append("  ", style="")
 
    for sev in ["CRITICAL", "HIGH", "MEDIUM", "LOW", "INFO"]:
        n = counts.get(sev, 0)
        if n:
            header.append(f" {n} {sev}", style=SEV_STYLE.get(sev, ""))
 
    if result.ast_method and result.ast_method != "none":
        header.append(f"  [{result.ast_method}]", style="dim cyan")
 
    console.print(header)
 
    if result.url and result.url != result.filename:
        console.print(f"    [dim white]{result.url}[/dim white]")
 
    console.print()
 
    total = len(sorted_findings)
    for idx, f in enumerate(sorted_findings):
        _render_finding(console, f, idx, total)
 
    console.print(Rule(style="dim white"))
    console.print()
 
 
# ─── Sección: Download Summary (v2.2 — compacto) ─────────────────────────────
 
def _classify_failed_url(url: str) -> str:
    """Clasifica una URL fallida por tipo de fallo probable."""
    if "&/o/" in url or "/combo?" in url:
        return "combo/bundle (Liferay)"
    if url.count(".js&") >= 2:
        return "multi-JS concatenada"
    if len(url) > 300:
        return "URL malformada (>300 chars)"
    return "HTTP error / timeout"
 
 
def _render_download_summary(console: Console, results: list,
                             output_dir: Path) -> None:
    """
    Renderiza un resumen compacto de descargas fallidas en vez de listar
    cada URL. El detalle completo se guarda en failed_urls.log.
    """
    failed = [r for r in results if not r.success]
    success = [r for r in results if r.success]
 
    if not failed:
        return
 
    total = len(results)
    fail_count = len(failed)
    fail_pct = round(fail_count / max(total, 1) * 100, 1)
 
    # Clasificar fallos por tipo
    reason_counts: Counter = Counter()
    domain_counts: Counter = Counter()
 
    for r in failed:
        reason = _classify_failed_url(r.url)
        reason_counts[reason] += 1
        parsed = urlparse(r.url)
        if parsed.netloc:
            domain_counts[parsed.netloc] += 1
 
    console.print(Rule("[warning]DOWNLOAD SUMMARY[/warning]", style="yellow"))
    console.print()
 
    # Stats generales
    console.print(
        f"  [bold white]{fail_count}[/bold white][dim white]/{total} descargas fallidas "
        f"({fail_pct}%)[/dim white]   "
        f"[bold white]{len(success)}[/bold white][dim white] exitosas[/dim white]"
    )
    console.print()
 
    # Tabla de razones
    reason_table = Table(show_header=False, box=None, padding=(0, 1))
    reason_table.add_column(style="dim white", min_width=35)
    reason_table.add_column(style="bold white", justify="right", min_width=5)
 
    for reason, count in reason_counts.most_common():
        reason_table.add_row(f"    {reason}", str(count))
 
    console.print(reason_table)
 
    # Top dominios fallidos (si hay más de 2)
    if len(domain_counts) > 1:
        console.print()
        console.print("  [dim white]Por dominio:[/dim white]")
        dom_table = Table(show_header=False, box=None, padding=(0, 1))
        dom_table.add_column(style="dim white", min_width=35)
        dom_table.add_column(style="bold white", justify="right", min_width=5)
 
        for domain, count in domain_counts.most_common(5):
            dom_table.add_row(f"    {domain}", str(count))
        console.print(dom_table)
 
    console.print()
 
    # Guardar detalle completo en archivo separado
    log_path = output_dir / "reports" / FAILED_LOG_FILENAME
    with open(log_path, "w", encoding="utf-8") as f:
        f.write(f"# Failed Downloads — {datetime.datetime.now().isoformat()}\n")
        f.write(f"# Total: {fail_count}/{total} ({fail_pct}%)\n")
        f.write(f"# Razones:\n")
        for reason, count in reason_counts.most_common():
            f.write(f"#   {reason}: {count}\n")
        f.write(f"#\n")
        f.write(f"# {'='*80}\n\n")
 
        for r in failed:
            reason = _classify_failed_url(r.url)
            f.write(f"[{reason}] {r.url}\n")
            if r.error and r.error != "Download failed":
                f.write(f"  Error: {r.error}\n")
            f.write("\n")
 
    console.print(
        f"  [dim white]Detalle completo → [/dim white]"
        f"[bold white]{log_path}[/bold white]"
    )
    console.print()
 
 
# ─── Entry point ─────────────────────────────────────────────────────────────
 
def build_report(results: list, output_dir: Path) -> Path:
    """
    Genera el reporte completo:
      - Imprime en terminal con colores Rich completos.
      - Guarda RECON_REPORT.txt (ANSI stripped, legible con cat/less).
      - Guarda failed_urls.log con detalle de descargas fallidas.
    """
    sorted_results = _sort_results(results)
 
    total_files   = len(results)
    success_files = sum(1 for r in results if r.success)
    all_findings  = [f for r in results for f in r.findings]
    total_findings = len(all_findings)
 
    # ── Consola (colores completos) ──────────────────────────────────────
    screen_console = Console(theme=PENTEST_THEME, highlight=False)
 
    _render_header(screen_console, output_dir.name, total_files, success_files, total_findings)
    _render_summary(screen_console, all_findings)
 
    screen_console.print(Rule("[accent]FINDINGS BY FILE[/accent]", style="cyan"))
    screen_console.print()
 
    for result in sorted_results:
        if result.success and result.findings:
            _render_file_block(screen_console, result)
 
    # v2.2: Download summary compacto en vez de lista de errores
    _render_download_summary(screen_console, results, output_dir)
 
    # Footer
    critical_total = sum(1 for f in all_findings if f["severity"].upper() == "CRITICAL")
    if critical_total:
        screen_console.print(
            f"\n  [sev.critical] 💀 {critical_total} CRITICAL findings "
            f"require immediate attention [/sev.critical]\n"
        )
    screen_console.print(
        f"  [accent]★[/accent]  Scan complete — "
        f"[bold white]{total_findings}[/bold white] findings across "
        f"[bold white]{success_files}[/bold white] files\n"
    )
 
    # ── Archivo .txt (ANSI stripped) ────────────────────────────────────
    report_path = output_dir / "reports" / REPORT_FILENAME
    file_console = Console(
        theme=PENTEST_THEME,
        highlight=False,
        file=open(report_path, "w", encoding="utf-8"),
        no_color=True,
        width=120,
    )
 
    _render_header(file_console, output_dir.name, total_files, success_files, total_findings)
    _render_summary(file_console, all_findings)
 
    file_console.print(Rule("FINDINGS BY FILE"))
    file_console.print()
 
    for result in sorted_results:
        if result.success and result.findings:
            _render_file_block(file_console, result)
 
    # v2.2: Summary compacto también en el .txt
    _render_download_summary(file_console, results, output_dir)
 
    file_console.file.close()
 
    return report_path
