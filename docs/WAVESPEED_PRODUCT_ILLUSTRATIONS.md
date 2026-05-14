# WaveSpeed Product Illustrations

## Objective
Generate product-illustration assets using WaveSpeed MCP:
- 2 images for each product (UI/look-and-feel showcase)
- 1 corporate-users image (Asian market context)

## Source of Truth
- Product list: `src/data/data.services.ts`
- Footer links now read products dynamically via `showInFooter: true`

## Generation Script
- `scripts/assetgen/generate_assets.py --config product-illustrations.json`

## Model
- `wavespeed-ai/qwen-image-2.0/text-to-image`

## Output Folder
- `static/images/product-illustrations`

## Generated Files
- `unibi-ui-1.jpeg`
- `unibi-ui-2.jpeg`
- `uniqi-ui-1.jpeg`
- `uniqi-ui-2.jpeg`
- `unifi-ui-1.jpeg`
- `unifi-ui-2.jpeg`
- `webbuilder-ui-1.jpeg`
- `webbuilder-ui-2.jpeg`
- `tion-ui-1.jpeg`
- `tion-ui-2.jpeg`
- `viai-ui-1.jpeg`
- `viai-ui-2.jpeg`
- `osee-ui-1.jpeg`
- `osee-ui-2.jpeg`
- `corporate-users-asia.jpeg`

## Suggested Usage
- Service detail pages: use `*-ui-1` as hero-style product UI visual, `*-ui-2` as context/support visual.
- About/Clients/Promo sections: use `corporate-users-asia.jpeg` for enterprise adoption storytelling.

## Re-run Command
```powershell
$env:WAVESPEED_API_KEY="<your-key>"
$env:WAVESPEED_PYTHON="C:\Python312\python.exe"
$env:WAVESPEED_MODEL="wavespeed-ai/qwen-image-2.0/text-to-image"
C:\Python312\python.exe scripts\assetgen\generate_assets.py --config product-illustrations.json
```
