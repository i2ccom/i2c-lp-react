import os
import glob
import shutil

projects_root = r"g:\i2c\PROJECTS"
icons_dest = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images\icons"
os.makedirs(icons_dest, exist_ok=True)

print("Scanning g:\\i2c\\PROJECTS for logos and icons...")
found_assets = {}

for root, dirs, files in os.walk(projects_root):
    # Don't go too deep in node_modules, target, .git, venv
    dirs[:] = [d for d in dirs if d not in ['.git', 'node_modules', 'target', 'dist', 'build', '.venv', 'venv', '__pycache__']]
    
    for f in files:
        fl = f.lower()
        if fl.endswith('.svg') or ('logo' in fl and (fl.endswith('.png') or fl.endswith('.jpg') or fl.endswith('.jpeg'))):
            full_path = os.path.join(root, f)
            rel = os.path.relpath(full_path, projects_root)
            found_assets[rel] = full_path

for rel, path in sorted(found_assets.items()):
    print(f"Found: {rel}")
