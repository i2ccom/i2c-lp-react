import re

file_path = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\src\data\data.service-details.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Check structure
print(f"Read {len(content)} characters from data.service-details.ts")
