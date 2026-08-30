import os
import shutil

source_dir = r"C:\Users\atomi\.gemini\antigravity\brain\2c6ba8e5-352c-4649-a6e5-65b9d22512fd"
dest_hd_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images\products-hd"
dest_team_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images\team"

os.makedirs(dest_hd_dir, exist_ok=True)
os.makedirs(dest_team_dir, exist_ok=True)

# Copy Cuong Nguyen portrait
cuong_portrait_src = os.path.join(source_dir, "cuong_nguyen_portrait_1788046236384.jpg")
cuong_portrait_dst = os.path.join(dest_team_dir, "cuong-nguyen.jpg")
if os.path.exists(cuong_portrait_src):
    shutil.copy2(cuong_portrait_src, cuong_portrait_dst)
    print("Copied Cuong Nguyen executive portrait to static/images/team/cuong-nguyen.jpg")

# Copy generated product HD images
image_mappings = {
    "unibi.jpg": "unibi_flagship_ui_1788046390290.jpg",
    "unifi.jpg": "unifi_fintech_ui_1788046411123.jpg",
    "uniqi.jpg": "uniqi_education_ui_1788046434200.jpg",
    "kitchen.jpg": "kitchen_middleware_core_1788046456053.jpg",
    "fractaldb.jpg": "fractaldb_spacetime_core_1788046479231.jpg",
    "minhai.jpg": "minhai_edge_slm_chip_1788046503688.jpg",
    "tion.jpg": "tion_marketing_crm_ui_1788046530005.jpg",
    "osee.jpg": "osee_social_radar_ui_1788046555932.jpg",
    "ierp.jpg": "ierp_supply_chain_ui_1788046582375.jpg",
    "automotiveeco.jpg": "automotive_connected_os_ui_1788046609511.jpg",
    "logop.jpg": "logop_gis_router_ui_1788046639768.jpg",
    "cyop.jpg": "cyop_threat_defense_ui_1788046669302.jpg",
}

for dest_name, src_name in image_mappings.items():
    src_path = os.path.join(source_dir, src_name)
    dst_path = os.path.join(dest_hd_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dst_path)
        print(f"Copied {src_name} -> static/images/products-hd/{dest_name}")

print("All HD images organized successfully!")
