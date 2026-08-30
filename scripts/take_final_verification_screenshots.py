import os
import time
from playwright.sync_api import sync_playwright

def run():
    out_dir = r"C:\Users\atomi\.gemini\antigravity\brain\2c6ba8e5-352c-4649-a6e5-65b9d22512fd"
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page(viewport={"width": 1440, "height": 900})
        
        # Homepage
        page.goto("http://localhost:5175/", wait_until="networkidle")
        time.sleep(1)
        doc_title = page.title()
        console_href = page.get_attribute("a.btn-console-cta", "href")
        console_target = page.get_attribute("a.btn-console-cta", "target")
        print(f"Title: {doc_title}, Console href: {console_href}, target: {console_target}")
        page.screenshot(path=os.path.join(out_dir, "screenshot_homepage_title_console.png"), full_page=False)
        
        # Footer
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(1)
        page.screenshot(path=os.path.join(out_dir, "screenshot_footer_offices_updated.png"), full_page=False)
        
        # Fluid Detail
        page.goto("http://localhost:5175/solutions/fluid", wait_until="networkidle")
        time.sleep(1)
        page.screenshot(path=os.path.join(out_dir, "screenshot_fluid_detail_updated.png"), full_page=True)
        
        b.close()
        print("Captured all verification screenshots successfully!")

if __name__ == "__main__":
    run()
