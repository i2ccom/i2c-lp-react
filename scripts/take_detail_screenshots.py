import os
import time
from playwright.sync_api import sync_playwright

def run():
    out_dir = r"C:\Users\atomi\.gemini\antigravity\brain\2c6ba8e5-352c-4649-a6e5-65b9d22512fd"
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page(viewport={"width": 1440, "height": 900})
        
        # Long Runtime
        page.goto("http://localhost:5175/solutions/long", wait_until="networkidle")
        time.sleep(1)
        page.screenshot(path=os.path.join(out_dir, "screenshot_long_runtime_deep_detail.png"), full_page=True)
        
        # RsTs
        page.goto("http://localhost:5175/solutions/rsts", wait_until="networkidle")
        time.sleep(1)
        page.screenshot(path=os.path.join(out_dir, "screenshot_rsts_deep_detail.png"), full_page=True)
        
        # Jigsaw
        page.goto("http://localhost:5175/solutions/jigsaw", wait_until="networkidle")
        time.sleep(1)
        page.screenshot(path=os.path.join(out_dir, "screenshot_jigsaw_deep_detail.png"), full_page=True)
        
        b.close()
        print("Captured Long, RsTs, and Jigsaw deep detail screenshots successfully!")

if __name__ == "__main__":
    run()
