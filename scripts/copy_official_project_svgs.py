import os
import shutil

dest_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images\icons"
os.makedirs(dest_dir, exist_ok=True)

official_mappings = {
    "fluid.svg": r"g:\i2c\PROJECTS\Fluid\Sources\docs\assets\fluid-icon.svg",
    "fly.svg": r"g:\i2c\PROJECTS\Fluidy\assets\fluidy.svg",
    "hypergraph.svg": r"g:\i2c\PROJECTS\HyperGraph\assets\logo.svg",
    "jigsaw.svg": r"g:\i2c\PROJECTS\Jigsaw\Sources\docs\assets\jigsaw-logo.svg",
    "long.svg": r"g:\i2c\PROJECTS\LongQAI\docs\logo\longq.svg",
    "minhai.svg": r"g:\i2c\PROJECTS\i2c_Docs\components\MinhAI_Logo.svg",
    "quang.svg": r"g:\i2c\PROJECTS\Quang\Sources\Quang\docs\assets\quang-logo.svg",
    "rings.svg": r"g:\i2c\PROJECTS\Rings\.github\logo.svg",
    "shai.svg": r"g:\i2c\PROJECTS\Shai\Sources\assets\shai-icon.svg",
    "transformerhub.svg": r"g:\i2c\PROJECTS\TransformerHub\Sources\TransformerHub\docs\assets\transformerhub-hub-logo.svg",
    "miniplatform.svg": r"g:\i2c\PROJECTS\MiniPlatform\MiniSearch\Design\MiniLook-logo.svg",
}

for name, src in official_mappings.items():
    if os.path.exists(src):
        target = os.path.join(dest_dir, name)
        shutil.copy(src, target)
        print(f"Copied official SVG: {name} from {src}")
    else:
        print(f"Warning: {src} not found")

print("Official project SVGs copied successfully!")
