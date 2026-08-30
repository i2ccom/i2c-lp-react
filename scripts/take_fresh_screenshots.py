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
        
        # 1. Company Page Founders Tab (Cuong Nguyen)
        print("Capturing Company Founders Tab (Cuong Nguyen)...")
        page.goto(f"{base_url}/company", wait_until="networkidle")
        time.sleep(0.5)
        page.click("button:has-text('Founders & Leadership')")
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "screenshot_company_cuong_nguyen.png"), full_page=True)
        
        # 2. Solutions Page - Tab 1 (Catalog with HD UI Artworks)
        print("Capturing Solutions Catalog with HD Artworks...")
        page.goto(f"{base_url}/solutions", wait_until="networkidle")
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "screenshot_solutions_hd_artworks.png"), full_page=True)
        
        # 3. Home Page (Top 10 Products Grid with HD Artworks)
        print("Capturing Home Page Top 10 with HD Artworks...")
        page.goto(f"{base_url}/", wait_until="networkidle")
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "screenshot_homepage_hd_top10.png"), full_page=True)
        
        browser.close()
        print("All screenshots captured successfully!")

if __name__ == "__main__":
    take_screenshots()
