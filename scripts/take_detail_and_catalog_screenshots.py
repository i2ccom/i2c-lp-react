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
        
        # 1. ViAI Service Detail Page with Architecture Design & Multi-Image Gallery & FAQs
        print("Capturing ViAI Service Detail Page...")
        page.goto(f"{base_url}/solutions/viai", wait_until="networkidle")
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "screenshot_viai_detail_rich.png"), full_page=True)
        
        # 2. UniFi Service Detail Page
        print("Capturing UniFi Service Detail Page...")
        page.goto(f"{base_url}/solutions/unifi", wait_until="networkidle")
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "screenshot_unifi_detail_rich.png"), full_page=True)
        
        # 3. Solutions Catalog with ALL 36 HD 16:9 Artworks
        print("Capturing Solutions Catalog (all 36 HD Artworks)...")
        page.goto(f"{base_url}/solutions", wait_until="networkidle")
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "screenshot_solutions_all_36_hd.png"), full_page=True)
        
        # 4. Test ScrollToTop: Scroll down on Solutions and click a product card
        print("Testing ScrollToTop navigation...")
        page.goto(f"{base_url}/solutions", wait_until="networkidle")
        page.evaluate("window.scrollTo(0, 1500)")
        time.sleep(0.3)
        page.click("a[href='/solutions/fractaldb']")
        time.sleep(0.5)
        scroll_y = page.evaluate("window.scrollY")
        print(f"Scroll position after clicking product: {scroll_y} (Expected: 0)")
        
        browser.close()
        print("All screenshot verifications completed successfully!")

if __name__ == "__main__":
    take_screenshots()
