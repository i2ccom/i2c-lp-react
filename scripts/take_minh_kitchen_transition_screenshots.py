import os
import time
from playwright.sync_api import sync_playwright

def run():
    out_dir = r"C:\Users\atomi\.gemini\antigravity\brain\2c6ba8e5-352c-4649-a6e5-65b9d22512fd"
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page(viewport={"width": 1440, "height": 900})
        
        # 1. Minh Section - Default (MinhAI)
        page.goto("http://localhost:5175/", wait_until="networkidle")
        time.sleep(1)
        page.evaluate("document.querySelector('#ai').scrollIntoView()")
        time.sleep(1)
        page.screenshot(path=os.path.join(out_dir, "screenshot_minh_section_default.png"), full_page=False)
        
        # Click HyperAI tab
        hyper_tab = page.locator(".ai-framework-card").nth(1)
        hyper_tab.click()
        time.sleep(0.7)
        page.screenshot(path=os.path.join(out_dir, "screenshot_minh_section_hyperai.png"), full_page=False)
        
        # Click ViAI tab
        viai_tab = page.locator(".ai-framework-card").nth(2)
        viai_tab.click()
        time.sleep(0.7)
        page.screenshot(path=os.path.join(out_dir, "screenshot_minh_section_viai.png"), full_page=False)
        
        # 2. Kitchen Section - Stage 1 (Default)
        page.evaluate("document.querySelector('#kitchen').scrollIntoView()")
        time.sleep(1)
        page.screenshot(path=os.path.join(out_dir, "screenshot_kitchen_stage_1.png"), full_page=False)
        
        # Click Stage 3 (Dynamic Schema Virtualization - HyperGraph)
        stage_3 = page.locator(".brigade-item").nth(2)
        stage_3.click()
        time.sleep(0.7)
        page.screenshot(path=os.path.join(out_dir, "screenshot_kitchen_stage_3_hypergraph.png"), full_page=False)
        
        # Click Stage 5 (Materialized Real-Time State Stream - Fluid)
        stage_5 = page.locator(".brigade-item").nth(4)
        stage_5.click()
        time.sleep(0.7)
        page.screenshot(path=os.path.join(out_dir, "screenshot_kitchen_stage_5_fluid.png"), full_page=False)
        
        b.close()
        print("Captured all Minh & Kitchen dynamic image transition screenshots successfully!")

if __name__ == "__main__":
    run()
