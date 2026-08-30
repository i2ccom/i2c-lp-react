import os

static_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images"

for root, dirs, files in os.walk(static_dir):
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            full = os.path.join(root, f)
            rel = os.path.relpath(full, r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static").replace("\\", "/")
            print(f"/{rel}")
