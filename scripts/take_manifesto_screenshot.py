import os
import time
from playwright.sync_api import sync_playwright

def run():
    out_dir = r"C:\Users\atomi\.gemini\antigravity\brain\2c6ba8e5-352c-4649-a6e5-65b9d22512fd"
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page(viewport={"width": 1440, "height": 900})
        page.goto("http://localhost:5175/solutions", wait_until="networkidle")
        time.sleep(1)
        
        # Click on Manifesto Tab
        page.click("button:has-text('Intent Manifesto')")
        time.sleep(0.5)
        page.screenshot(path=os.path.join(out_dir, "screenshot_manifesto_short_title_contrast.png"), full_page=True)
        
        b.close()
        print("Captured screenshot_manifesto_short_title_contrast.png")

if __name__ == "__main__":
    run()
