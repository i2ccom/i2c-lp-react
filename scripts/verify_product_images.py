import os
import json

data_services_path = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\src\data\data.services.ts"

# Distinct, dedicated, non-duplicated 16:9 illustration/infographic mapping for each product
image_mapping = {
    # Layer 7 & Vertical Solutions
    "unibi": "/images/product-illustrations/unibi-concept.jpeg",
    "uniqi": "/images/services/uniqi-hero.jpeg",
    "unifi": "/images/topics/Blockchain-To-Fintech.png",
    "webbuilder": "/images/services/webbuilder-hero.jpeg",
    "tion": "/images/topics/smart-content-marketing.png",
    "osee": "/images/topics/social-listening-1.png",
    "ierp": "/images/topics/iERP.jpg",
    "ireport": "/images/services/ireport-hero.jpeg",
    "automotiveeco": "/images/services/automotive-hero.jpeg",
    "logop": "/images/topics/mapbox.png",
    "cyop": "/images/services/cyop-hero.jpeg",
    "defikit": "/images/services/defikit-hero.jpeg",
    "myestate": "/images/topics/iBuilding.jpg",
    "i2chomenet": "/images/product-illustrations/myestate-concept.jpeg",
    "miniplatform": "/images/services/miniplatform-hero.jpeg",
    
    # Core Data Substrates (Layer 6 & 5)
    "kitchen": "/images/product-illustrations/kitchen-concept.jpeg",
    "fractaldb": "/images/product-illustrations/fractaldb-concept.jpeg",
    "hypergraph": "/images/slides/slide_03.png",
    "fluid": "/images/slides/slide_04.png",
    
    # AI Engines & Execution Runtimes (Layer 3, 2, 1)
    "minhai": "/images/slides/slide_01_architecture.png",
    "hyperai": "/images/services/hyperai-hero.jpeg",
    "viai": "/images/services/viai-hero.jpeg",
    "garden": "/images/services/garden-hero.jpeg",
    "transformerhub": "/images/product-illustrations/transformerhub-concept.jpeg",
    "long": "/images/services/long-runtime-hero.jpeg",
    "rsts": "/images/services/rsts-hero.jpeg",
    "fly": "/images/services/fly-hero.jpeg",
    "uploop": "/images/services/uploop-hero.jpeg",
    "lac": "/images/slides/slide_06.png",
    
    # Trust, Governance & Developer Toolchains (Layer 5 & 4)
    "jigsaw": "/images/slides/slide_05.png",
    "rings": "/images/slides/slide_07.png",
    "i2c-forge": "/images/services/forge-hero.jpeg",
    "quang": "/images/services/quang-collab-hero.jpeg",
    "shai": "/images/services/shai-hero.jpeg",
    "i2collab": "/images/slides/slide_08.png",
    "devplatform": "/images/slides/slide_09.png",
}

print(f"Total mapped unique images: {len(image_mapping)}")

# Verify all images exist on disk
public_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static"
missing = []
for slug, img_path in image_mapping.items():
    full_path = os.path.join(public_dir, img_path.lstrip("/").replace("/", os.sep))
    if not os.path.exists(full_path):
        missing.append((slug, img_path, full_path))

if missing:
    print("Warning: Missing files on disk:")
    for m in missing:
        print(m)
else:
    print("All 36 mapped images verified to exist on disk!")
