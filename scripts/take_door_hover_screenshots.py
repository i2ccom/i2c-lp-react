import os
import time
from playwright.sync_api import sync_playwright

def run():
    out_dir = r"C:\Users\atomi\.gemini\antigravity\brain\2c6ba8e5-352c-4649-a6e5-65b9d22512fd"
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page(viewport={"width": 1440, "height": 900})
        
        # 1. Homepage Solutions Section (Resting state)
        page.goto("http://localhost:5175/", wait_until="networkidle")
        time.sleep(1)
        # Scroll to #solutions section
        page.evaluate("document.querySelector('#solutions').scrollIntoView()")
        time.sleep(1)
        page.screenshot(path=os.path.join(out_dir, "screenshot_door_resting_state.png"), full_page=False)
        
        # 2. Hover over the first card (UniBi)
        first_card = page.locator(".solution-card").first
        first_card.hover()
        time.sleep(0.8)
        page.screenshot(path=os.path.join(out_dir, "screenshot_door_hovered_open_state.png"), full_page=False)
        
        b.close()
        print("Captured resting and hover-door open screenshots successfully!")

if __name__ == "__main__":
    run()
