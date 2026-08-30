import os
import time
from playwright.sync_api import sync_playwright

def run():
    out_dir = r"C:\Users\atomi\.gemini\antigravity\brain\2c6ba8e5-352c-4649-a6e5-65b9d22512fd"
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page(viewport={"width": 1440, "height": 900})
        
        # Homepage Footer
        page.goto("http://localhost:5175/", wait_until="networkidle")
        time.sleep(1)
        # Scroll to footer
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(1)
        page.screenshot(path=os.path.join(out_dir, "screenshot_footer_contrast_verified.png"))
        
        # Solutions Page
        page.goto("http://localhost:5175/solutions", wait_until="networkidle")
        time.sleep(1)
        page.screenshot(path=os.path.join(out_dir, "screenshot_solutions_clean_tabs.png"), full_page=False)
        
        # Service Detail Gallery
        page.goto("http://localhost:5175/solutions/unifi", wait_until="networkidle")
        time.sleep(1)
        page.screenshot(path=os.path.join(out_dir, "screenshot_unifi_gallery_timed.png"), full_page=False)
        
        b.close()
        print("Captured footer, solutions, and unifi gallery screenshots successfully!")

if __name__ == "__main__":
    run()
