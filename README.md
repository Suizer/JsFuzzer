# JsFuzzer — JS Pentest Automator

A penetration testing automation tool for JavaScript reconnaissance and static analysis. It crawls web targets, downloads JS files, deobfuscates them using AST transforms, and scans for secrets, endpoints, and cloud resources.

---

## Features

- **Automated JS Discovery** — Integrates with [Katana](https://github.com/projectdiscovery/katana) to crawl targets and collect JavaScript URLs
- **Source Map Extraction** — Attempts to fetch `.js.map` files and unpack original source code
- **AST Deobfuscation** — Babel-based Node.js engine resolves string arrays, inlines proxies, folds constants, neutralizes anti-tampering, and decodes escape sequences
- **Precision Static Analysis** — 60+ hardcoded patterns plus Shannon entropy analysis to detect secrets, API endpoints, cloud buckets, and WebSocket connections
- **Framework Detection** — Identifies React, Vue, Angular, Next.js, Salesforce Aura/LWC, and more
- **URL Sanitization** — Cleans Katana output (removes ghost URLs, Liferay combos, normalizes ports, deduplicates by filename)
- **Rich Reporting** — Color-coded terminal output with severity badges and a plain-text `RECON_REPORT.txt`

---

## Requirements

| Dependency | Version | Purpose |
|---|---|---|
| Python | 3.8+ | Main runtime |
| Node.js | 14+ | Babel AST engine |
| npm | — | JS dependency management |
| [Katana](https://github.com/projectdiscovery/katana) | latest | Web crawler (recon mode only) |

**Python packages** (see [requirements.txt](requirements.txt)):

```
requests>=2.31.0
jsbeautifier>=1.15.1
rich>=13.7.0
pyyaml>=6.0.1
colorama>=0.4.6
```

**Node.js packages** (auto-installed on first run):

```
@babel/parser ^7.24.0
@babel/traverse ^7.24.0
@babel/generator ^7.24.0
@babel/types ^7.24.0
```

---

## Installation

```bash
git clone <repository-url>
cd JsFuzzer

# Python dependencies
pip install -r requirements.txt

# Node.js dependencies (or let the tool install them automatically)
cd engine && npm install --production && cd ..

# Verify Katana is in PATH (required for recon mode)
katana -version
```

> A virtual environment is recommended: `python -m venv venv && source venv/bin/activate`

---

## Usage

### Recon Mode — Crawl a live target

```bash
python main.py recon https://target.com
python main.py recon https://target.com -w 12   # custom worker count (default: 8)
```

Katana crawls the domain (FQDN-scoped), discovers all JS files, downloads them, and runs the full analysis pipeline.

### Local Mode — Analyze files already on disk

```bash
python main.py local /path/to/js/files
python main.py local /path/to/js/files -w 4
```

Two sub-options are presented interactively:
1. Load URLs from a Katana output file (downloads then scans)
2. Scan a directory of `.js` files directly (no downloading)

---

## Output Structure

```
output/
└── {domain}_{timestamp}/
    ├── js_files/               # Downloaded .js and .js.map files
    ├── unpacked_sources/       # Source map extracted originals (if any)
    └── reports/
        ├── RECON_REPORT.txt    # Main findings report (plain text, ANSI-free)
        └── failed_urls.log     # Download failures with classification
```

### Severity Levels

| Badge | Severity | Examples |
|---|---|---|
| CRITICAL | Full account compromise | AWS keys, GitHub PAT, DB URIs |
| HIGH | Lateral movement risk | Google OAuth secrets, Stripe restricted keys |
| MEDIUM | Information disclosure | Google API keys, Auth0 domains |
| LOW | Requires additional context | Publishable keys, app IDs |
| INFO | Structural findings | Framework detected, endpoints discovered |

---

## Configuration

### [config/secrets.yaml](config/secrets.yaml)

Defines 100+ secret detection patterns organized by severity. Includes entropy-based detection settings:

```yaml
entropy_detection:
  shannon_threshold: 4.5   # Minimum entropy score
  min_length: 16            # Ignore strings shorter than this
  max_length: 256           # Ignore strings longer than this
```

Entropy analysis is context-aware: strings are excluded if they match known noise patterns (UUIDs, hashes, MIME types, framework boilerplate, Salesforce Aura/LWC code).

### [config/endpoints.yaml](config/endpoints.yaml)

Pattern groups for endpoint discovery:

- **REST** — `/api/v[0-9]+/`, `/rest/[a-zA-Z]+`, etc.
- **GraphQL** — `/graphql`, `query {`, `mutation {`
- **WebSocket** — `wss?://` connections
- **Cloud** — AWS S3, GCS, Azure Blob, Firebase Storage
- **Subdomains** — Internal environments: `dev`, `staging`, `admin`, etc.

---

## Architecture

```
main.py                  # CLI entry point, orchestrates workers
├── core/
│   ├── scanner.py       # Static analysis engine (secrets, endpoints, entropy)
│   ├── downloader.py    # HTTP downloader with source map extraction
│   ├── ast_engine.py    # Python ↔ Node.js bridge for AST deobfuscation
│   ├── reporter.py      # Terminal + file report generator
│   ├── url_sanitizer.py # Katana output cleaning and deduplication
│   └── map.py           # Source map unpacking utility
├── engine/
│   └── transformer.js   # Babel AST transformation passes
├── config/
│   ├── secrets.yaml
│   └── endpoints.yaml
└── utils/
    └── entropy.py       # Shannon entropy calculation
```

### AST Deobfuscation Pipeline

1. **String Array Resolution** — Resolves `_0xabc[0]` → `"literal"`
2. **Variable Proxy Inlining** — Replaces proxy vars with their values
3. **Constant Folding** — `"he" + "llo"` → `"hello"`
4. **Anti-Tampering Neutralization** — Removes self-defending code
5. **Escape Sequence Decoding** — Hex/unicode escapes → readable text

Fallback chain: `Babel AST → jsbeautifier → original source`  
Limits: 30-second timeout per file, 5 MB max file size.

---

## Legal Disclaimer

This tool is intended for **authorized penetration testing and security research only**. Usage against systems without explicit written permission is illegal. The authors assume no liability for misuse.

---

## License

See [LICENSE](LICENSE) if present. Not for commercial redistribution without authorization.
