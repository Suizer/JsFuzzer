"""
core/reporter.py
~~~~~~~~~~~~~~~~
Reporter Rich nativo para terminal (macOS / Kali).
Reemplaza completamente el output Markdown.

Salida dual:
  1. Pantalla  → Rich con colores ANSI full (256-color)
  2. Archivo   → RECON_REPORT.txt con ANSI strips (legible con `cat`)

Orden de criticidad: CRITICAL → HIGH → MEDIUM → LOW → INFO
"""

from __future__ import annotations

import datetime
from pathlib import Path

from rich.columns import Columns
from rich.console import Console
from rich.panel import Panel
from rich.rule import Rule
from rich.table import Table
from rich.text import Text
from rich.theme import Theme

# ─── Paleta semántica ────────────────────────────────────────────────────────

PENTEST_THEME = Theme({
    "sev.critical": "bold white on dark_red",
    "sev.high":     "bold red",
    "sev.medium":   "bold yellow",
    "sev.low":      "bold cyan",
    "sev.info":     "dim white",
    "type.sink":    "magenta",
    "type.secret":  "bold red",
    "type.entropy": "yellow",
    "type.endpoint":"cyan",
    "type.url":     "blue",
    "type.cloud":   "bold magenta",
    "type.framework":"green",
    "file.header":  "bold white",
    "ctx":          "dim white",
    "muted":        "dim white",
    "accent":       "bold cyan",
})

# Orden de severidad para sorting
SEV_ORDER = {"CRITICAL": 0, "HIGH": 1, "MEDIUM": 2, "LOW": 3, "INFO": 4}

# Iconos por severidad
SEV_ICON = {
    "CRITICAL": "💀",
    "HIGH":     "🔴",
    "MEDIUM":   "🟡",
    "LOW":      "🔵",
    "INFO":     "⚪",
}

# Estilo Rich por severidad
SEV_STYLE = {
    "CRITICAL": "sev.critical",
    "HIGH":     "sev.high",
    "MEDIUM":   "sev.medium",
    "LOW":      "sev.low",
    "INFO":     "sev.info",
}

# Estilo Rich por tipo
TYPE_STYLE = {
    "SINK":      "type.sink",
    "SECRET":    "type.secret",
    "ENTROPY":   "type.entropy",
    "ENDPOINT":  "type.endpoint",
    "URL":       "type.url",
    "CLOUD":     "type.cloud",
    "FRAMEWORK": "type.framework",
}

REPORT_FILENAME = "RECON_REPORT.txt"


# ─── Helpers ─────────────────────────────────────────────────────────────────

def _sev_badge(sev: str) -> Text:
    """Renderiza un badge coloreado de severidad."""
    label = f" {SEV_ICON.get(sev, '·')} {sev} "
    t = Text(label, style=SEV_STYLE.get(sev, ""))
    return t


def _type_badge(ftype: str) -> Text:
    t = Text(f"[{ftype}]", style=TYPE_STYLE.get(ftype, "white"))
    return t


def _sort_findings(findings: list[dict]) -> list[dict]:
    return sorted(findings, key=lambda f: SEV_ORDER.get(f["severity"].upper(), 99))


def _sort_results(results: list) -> list:
    """
    Ordena FileResult por criticidad máxima del archivo,
    luego por cantidad de findings como desempate.
    """
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
    """Limpia el contexto para display: quita &#124; y normaliza espacios."""
    return ctx.replace("&#124;", "|").replace("  ", " ").strip()


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

    # Tabla de severidad
    sev_table = Table(show_header=False, box=None, padding=(0, 2))
    sev_table.add_column(no_wrap=True)
    sev_table.add_column(no_wrap=True, justify="right")

    for sev in ["CRITICAL", "HIGH", "MEDIUM", "LOW", "INFO"]:
        count = severity_totals.get(sev, 0)
        if count:
            badge = _sev_badge(sev)
            sev_table.add_row(badge, Text(str(count), style="bold white"))

    # Tabla de tipos
    type_table = Table(show_header=False, box=None, padding=(0, 2))
    type_table.add_column(no_wrap=True)
    type_table.add_column(no_wrap=True, justify="right")

    for ftype, count in sorted(type_totals.items(), key=lambda x: -x[1]):
        badge = _type_badge(ftype)
        type_table.add_row(badge, Text(str(count), style="bold white"))

    console.print(Columns([sev_table, type_table], equal=False, expand=False, padding=(0, 4)))
    console.print()


# ─── Sección: Findings por archivo ───────────────────────────────────────────

def _render_finding(console: Console, f: dict, idx: int, total: int) -> None:
    sev = f["severity"].upper()
    ftype = f["type"].upper()
    rule_name = f.get("name", "unknown")
    line = f.get("line", "N/A")
    ctx = _clean_context(f.get("context", ""))

    # Línea principal del finding
    line_text = Text()
    line_text.append(f"  {'└─' if idx == total - 1 else '├─'} ", style="dim white")
    line_text.append(_sev_badge(sev))
    line_text.append("  ", style="")
    line_text.append(_type_badge(ftype))
    line_text.append(f"  {rule_name}", style="bold white")
    line_text.append(f"  ·  line {line}", style="dim cyan")
    console.print(line_text)

    # Contexto
    if ctx:
        prefix = "  │    " if idx < total - 1 else "       "
        ctx_display = ctx[:180] + ("…" if len(ctx) > 180 else "")
        console.print(f"{prefix}[dim white]{ctx_display}[/dim white]")

    console.print()


def _render_file_block(console: Console, result) -> None:
    if not result.findings:
        return

    sorted_findings = _sort_findings(result.findings)
    counts = _severity_counts(result.findings)

    # Cabecera del archivo
    header = Text()
    header.append("  ▶ ", style="bold cyan")
    header.append(result.filename or result.url, style="file.header")
    header.append("  ", style="")

    # Mini-badges de severidad
    for sev in ["CRITICAL", "HIGH", "MEDIUM", "LOW", "INFO"]:
        n = counts.get(sev, 0)
        if n:
            header.append(f" {n} {sev}", style=SEV_STYLE.get(sev, ""))

    # AST method
    if result.ast_method and result.ast_method != "none":
        header.append(f"  [{result.ast_method}]", style="dim cyan")

    console.print(header)

    # URL fuente (dim, solo si es diferente al filename)
    if result.url and result.url != result.filename:
        console.print(f"    [dim white]{result.url}[/dim white]")

    console.print()

    total = len(sorted_findings)
    for idx, f in enumerate(sorted_findings):
        _render_finding(console, f, idx, total)

    console.print(Rule(style="dim white"))
    console.print()


def _render_errors(console: Console, results: list) -> None:
    failed = [r for r in results if not r.success]
    if not failed:
        return

    console.print(Rule("[sev.high]FAILED DOWNLOADS[/sev.high]", style="red"))
    console.print()
    for r in failed:
        console.print(f"  [sev.high]✗[/sev.high]  [dim white]{r.url}[/dim white]")
        if r.error:
            console.print(f"     [dim white]{r.error}[/dim white]")
    console.print()


# ─── Entry point ─────────────────────────────────────────────────────────────

def build_report(results: list, output_dir: Path) -> Path:
    """
    Genera el reporte completo:
      - Imprime en terminal con colores Rich completos.
      - Guarda RECON_REPORT.txt (ANSI stripped, legible con cat/less).

    Reemplaza completamente build_report() de main.py.
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

    _render_errors(screen_console, results)

    # Footer
    critical_total = sum(1 for f in all_findings if f["severity"].upper() == "CRITICAL")
    if critical_total:
        screen_console.print(
            f"\n  [sev.critical] 💀 {critical_total} CRITICAL findings require immediate attention [/sev.critical]\n"
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
        no_color=True,          # Sin ANSI → legible con cat en cualquier terminal
        width=120,
    )

    _render_header(file_console, output_dir.name, total_files, success_files, total_findings)
    _render_summary(file_console, all_findings)

    file_console.print(Rule("FINDINGS BY FILE"))
    file_console.print()

    for result in sorted_results:
        if result.success and result.findings:
            _render_file_block(file_console, result)

    _render_errors(file_console, results)
    file_console.file.close()

    return report_path
