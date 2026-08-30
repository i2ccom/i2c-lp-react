import re

path = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\src\data\data.services.ts"

with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# Add import at the top if not present
if 'import { getProductImage }' not in text:
    text = 'import { getProductImage } from "./data.product-images";\n\n' + text

# Replace heroImageUrl: "/images/products-human/..." with heroImageUrl: getProductImage("slug")
text = re.sub(
    r'heroImageUrl:\s*"/images/products-human/([a-zA-Z0-9_\-]+)\.jpg"',
    r'heroImageUrl: getProductImage("\1")',
    text
)

with open(path, "w", encoding="utf-8") as f:
    f.write(text)

print("data.services.ts successfully updated with dynamic getProductImage mapping!")
