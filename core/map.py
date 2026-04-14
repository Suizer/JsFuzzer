import json
import os
from pathlib import Path
from rich.console import Console

console = Console()

def unpack_map(map_file, output_base_dir):
    """
    Desempaqueta un archivo .map extrayendo su código fuente original.
    """
    map_path = Path(map_file)
    
    if not map_path.exists():
        return False

    try:
        with open(map_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        if 'sources' not in data or 'sourcesContent' not in data:
            console.print(f"  [warning][-] El archivo {map_path.name} no contiene sourcesContent.[/warning]")
            return False

        # Carpeta donde se guardará: output/qa_lidl_nl/unpacked_sources/nombre_del_map
        unpack_dir = Path(output_base_dir) / "unpacked_sources" / map_path.name.replace('.js.map', '').replace('.map', '')
        extracted_count = 0

        # Tu lógica exacta usando zip()
        for path, content in zip(data['sources'], data['sourcesContent']):
            # Limpiar la ruta (cubrimos un par de variantes comunes de webpack)
            clean_path = path.replace('webpack:///', '').replace('webpack://', '').replace('../', '').lstrip('/')
            
            output_path = unpack_dir / clean_path
            
            # Crear los directorios necesarios
            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            
            # Guardar el archivo
            with open(output_path, 'w', encoding='utf-8') as out_f:
                out_f.write(content if content else "// Archivo vacío")
                
            extracted_count += 1
            
        console.print(f"  [success][+] Extraídos {extracted_count} archivos fuente en: {unpack_dir.name}[/success]")
        return True

    except Exception as e:
        console.print(f"  [critical]✗ Error al desempaquetar {map_path.name}: {e}[/critical]")
        return False
