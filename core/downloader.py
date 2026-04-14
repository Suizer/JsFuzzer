import requests
import urllib3
from pathlib import Path
from rich.console import Console

# Silenciar las advertencias de certificados SSL
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

console = Console()

def download_js_file(url, target_dir):
    """Descarga un JS y busca su .map correspondiente de forma silenciosa"""
    try:
        filename = url.split("/")[-1].split("?")[0]
        if not filename: filename = "index.js"
        
        target_path = Path(target_dir) / filename
        
        # 1. Descargar archivo JS
        response = requests.get(url, timeout=10, verify=False)
        if response.status_code == 200:
            target_path.write_text(response.text)
            console.print(f"  [muted][+] Guardado:[/muted] {filename}")
            
            # 2. Intento de Source Map (Paso A)
            map_url = f"{url}.map"
            map_response = requests.get(map_url, timeout=5, verify=False)
            if map_response.status_code == 200 and "{" in map_response.text[:10]: # Validar que parece un JSON
                map_path = Path(target_dir) / f"{filename}.map"
                map_path.write_text(map_response.text)
                console.print(f"  [success]↳ [!] Source Map encontrado:[/success] {filename}.map")
            
            # ¡CORRECCIÓN!: Si el JS se descargó, devolvemos True sin importar si hubo .map o no
            return True, target_path
            
        return False, None
    except Exception as e:
        console.print(f"  [critical]✗ Error descargando {url}[/critical]")
        return False, None
