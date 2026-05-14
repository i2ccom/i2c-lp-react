# Asset Generation

Unified WaveSpeed asset pipeline.

## Script
- `generate_assets.py`

## Configs
- Stored in `scripts/assetgen/configs/*.json`
- Each config defines:
  - `name`
  - `outputDir`
  - `defaults`
  - `items[]`

## Usage
```powershell
$env:WAVESPEED_API_KEY="<key>"
$env:WAVESPEED_PYTHON="C:\Python312\python.exe"
$env:WAVESPEED_MODEL="wavespeed-ai/qwen-image-2.0/text-to-image"
python scripts/assetgen/generate_assets.py --config services-heroes.json
python scripts/assetgen/generate_assets.py --config product-illustrations.json --config product-concepts.json
python scripts/assetgen/generate_assets.py
```

## Non-generating commands
```powershell
python scripts/assetgen/generate_assets.py --list
python scripts/assetgen/generate_assets.py --dry-run
```
