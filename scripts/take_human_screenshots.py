import os
import time
from playwright.sync_api import sync_playwright

def take_screenshots():
    base_url = "http://localhost:5175"
    output_dir = r"C:\Users\atomi\.gemini\antigravity\brain\2c6ba8e5-352c-4649-a6e5-65b9d22512fd"
    os.makedirs(output_dir, exist_ok=True)
    
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        
        # 1. Homepage Top 10 with Bright Human Thumbnails
        print("Capturing Homepage...")
        page.goto(f"{base_url}/", wait_until="networkidle")
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "screenshot_homepage_human_thumbnails.png"), full_page=True)
        
        # 2. Solutions Catalog with ALL 36 Bright Human Thumbnails
        print("Capturing Solutions Catalog...")
        page.goto(f"{base_url}/solutions", wait_until="networkidle")
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "screenshot_solutions_all_36_human.png"), full_page=True)
        
        # 3. LogOp Product Detail Page
        print("Capturing LogOp Detail Page...")
        page.goto(f"{base_url}/solutions/logop", wait_until="networkidle")
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "screenshot_logop_detail_human_gallery.png"), full_page=True)

        # 4. FractalDB Product Detail Page
        print("Capturing FractalDB Detail Page...")
        page.goto(f"{base_url}/solutions/fractaldb", wait_until="networkidle")
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "screenshot_fractaldb_detail_human_gallery.png"), full_page=True)
        
        browser.close()
        print("All human scenario screenshot verifications completed successfully!")

if __name__ == "__main__":
    take_screenshots()
