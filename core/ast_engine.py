"""
core/ast_engine.py — Puente Python → Node.js para deobfuscación AST

Pipeline:
  1. Ejecuta engine/transformer.js via subprocess (timeout 30s)
  2. Si Node falla → fallback a jsbeautifier (solo formateo)
  3. Si ambos fallan → devuelve el código original intacto

Thread-safe: no mantiene estado mutable. Cada llamada es independiente.
"""

import json
import shutil
import subprocess
import tempfile
from pathlib import Path
from typing import NamedTuple

from rich.console import Console

console = Console()

# ─── Configuración ────────────────────────────────────────────────────────────

# Ruta al script de Node (relativa al root del proyecto)
_ENGINE_DIR = Path(__file__).resolve().parent.parent / "engine"
_TRANSFORMER = _ENGINE_DIR / "transformer.js"

# Timeout para el proceso de Node (segundos)
AST_TIMEOUT = 30

# Tamaño máximo de archivo que procesamos con AST (5 MB)
AST_MAX_FILE_SIZE = 5 * 1024 * 1024


class ASTResult(NamedTuple):
    """Resultado de la transformación AST."""
    code: str
    method: str          # "ast" | "beautifier" | "original"
    stats: dict          # Métricas del transformer (vacío si fallback)
    success: bool


def _check_node_available() -> bool:
    """Verifica que node está disponible en el PATH."""
    return shutil.which("node") is not None


def _check_engine_installed() -> bool:
    """Verifica que las dependencias de npm están instaladas."""
    return (_ENGINE_DIR / "node_modules").is_dir()


def _install_engine_deps() -> bool:
    """Instala las dependencias del engine/ si no existen."""
    try:
        console.print("  [muted]├─ Instalando dependencias AST (npm install)...[/muted]")
        result = subprocess.run(
            ["npm", "install", "--production", "--silent"],
            cwd=str(_ENGINE_DIR),
            capture_output=True,
            text=True,
            timeout=60,
        )
        return result.returncode == 0
    except (subprocess.TimeoutExpired, FileNotFoundError):
        return False


def _run_transformer(input_path: Path, output_path: Path) -> tuple[bool, dict]:
    """
    Ejecuta transformer.js contra un archivo JS.
    
    Returns:
        (éxito: bool, stats: dict)
    """
    cmd = [
        "node",
        str(_TRANSFORMER),
        str(input_path),
        "--output", str(output_path),
    ]

    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=AST_TIMEOUT,
            cwd=str(_ENGINE_DIR),
        )

        # Parsear stats de stderr
        stats = {}
        for line in result.stderr.splitlines():
            if line.startswith("[AST_STATS]"):
                try:
                    stats = json.loads(line.replace("[AST_STATS] ", ""))
                except json.JSONDecodeError:
                    pass

        if result.returncode != 0:
            # transformer.js sale con 0 incluso en parse errors (devuelve original)
            # Solo falla si hay un crash real de Node
            console.print(f"  [warning]├─ AST engine exit code {result.returncode}[/warning]")
            return False, stats

        if not output_path.exists() or output_path.stat().st_size == 0:
            return False, stats

        return True, stats

    except subprocess.TimeoutExpired:
        console.print(f"  [warning]├─ AST timeout ({AST_TIMEOUT}s) — archivo demasiado grande[/warning]")
        return False, {}
    except FileNotFoundError:
        console.print("  [warning]├─ Node.js no encontrado en PATH[/warning]")
        return False, {}


def _beautify_fallback(code: str) -> str:
    """Fallback: usa jsbeautifier puro (solo formateo, sin deobfuscación)."""
    try:
        import jsbeautifier
        opts = jsbeautifier.default_options()
        opts.indent_size = 2
        opts.space_in_empty_paren = True
        opts.break_chained_methods = True
        opts.unescape_strings = True
        return jsbeautifier.beautify(code, opts)
    except ImportError:
        # jsbeautifier no instalado → devolver tal cual
        return code


def deobfuscate(file_path: Path) -> ASTResult:
    """
    Punto de entrada principal. Deobfusca un archivo JS.
    
    Pipeline con fallback graceful:
      AST (Node.js) → jsbeautifier → código original
    
    Args:
        file_path: Ruta al archivo .js descargado
        
    Returns:
        ASTResult con el código procesado y metadata
    """
    file_path = Path(file_path)

    if not file_path.exists():
        return ASTResult(code="", method="original", stats={}, success=False)

    original_code = file_path.read_text(encoding="utf-8", errors="replace")

    # ── Guard: archivos demasiado grandes ────────────────────────────────
    if file_path.stat().st_size > AST_MAX_FILE_SIZE:
        console.print(f"  [warning]├─ Archivo > {AST_MAX_FILE_SIZE // (1024*1024)}MB — skip AST, usando beautifier[/warning]")
        beautified = _beautify_fallback(original_code)
        file_path.write_text(beautified, encoding="utf-8")
        return ASTResult(code=beautified, method="beautifier", stats={}, success=True)

    # ── Guard: Node.js disponible ────────────────────────────────────────
    if not _check_node_available():
        console.print("  [muted]├─ Node.js no disponible, fallback a beautifier[/muted]")
        beautified = _beautify_fallback(original_code)
        file_path.write_text(beautified, encoding="utf-8")
        return ASTResult(code=beautified, method="beautifier", stats={}, success=True)

    # ── Guard: dependencias npm instaladas ───────────────────────────────
    if not _check_engine_installed():
        if not _install_engine_deps():
            console.print("  [warning]├─ npm install falló, fallback a beautifier[/warning]")
            beautified = _beautify_fallback(original_code)
            file_path.write_text(beautified, encoding="utf-8")
            return ASTResult(code=beautified, method="beautifier", stats={}, success=True)

    # ── Ejecutar AST transformer ─────────────────────────────────────────
    # Usamos un archivo temporal para el output (thread-safe)
    with tempfile.NamedTemporaryFile(suffix=".js", delete=False, mode="w") as tmp:
        tmp_output = Path(tmp.name)

    try:
        success, stats = _run_transformer(file_path, tmp_output)

        if success and tmp_output.exists():
            transformed = tmp_output.read_text(encoding="utf-8", errors="replace")
            
            # Sanity check: si el resultado está vacío o es más pequeño que el 10%
            # del original, algo salió mal → fallback
            if len(transformed.strip()) < len(original_code.strip()) * 0.1:
                console.print("  [warning]├─ AST output sospechosamente pequeño, fallback[/warning]")
                beautified = _beautify_fallback(original_code)
                file_path.write_text(beautified, encoding="utf-8")
                return ASTResult(code=beautified, method="beautifier", stats=stats, success=True)

            # Éxito: sobrescribir el archivo original con el código limpio
            file_path.write_text(transformed, encoding="utf-8")
            
            # Log de stats
            active = {k: v for k, v in stats.items() if v > 0}
            if active:
                console.print(f"  [success]├─ AST: {active}[/success]")
            
            return ASTResult(code=transformed, method="ast", stats=stats, success=True)
        else:
            # AST falló → beautifier
            console.print("  [muted]├─ AST falló, aplicando jsbeautifier[/muted]")
            beautified = _beautify_fallback(original_code)
            file_path.write_text(beautified, encoding="utf-8")
            return ASTResult(code=beautified, method="beautifier", stats={}, success=True)

    finally:
        # Limpiar archivo temporal
        try:
            tmp_output.unlink(missing_ok=True)
        except OSError:
            pass
