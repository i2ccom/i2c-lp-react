import os
import time
from playwright.sync_api import sync_playwright

def download_slides():
    url = "https://docs.google.com/presentation/d/e/2PACX-1vQH9jUZSH1knWD0zFCcbfynkUqEuUgInVCEWAuTxKP7P6SWp-jpA6EYe0ZCkkzC6vC6gQvMZL4MnLpZ/pub?start=false&loop=false&delayms=3000"
    output_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images\slides"
    os.makedirs(output_dir, exist_ok=True)
    
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        
        print("Navigating to public presentation...")
        page.goto(url, wait_until="networkidle")
        time.sleep(3)
        
        # Take a screenshot of the main presentation slide
        slide_1_path = os.path.join(output_dir, "slide_01_architecture.png")
        page.screenshot(path=slide_1_path)
        print(f"Saved slide 1 to {slide_1_path}")
        
        # Press right arrow to navigate through slides
        for i in range(2, 8):
            page.keyboard.press("ArrowRight")
            time.sleep(1.5)
            slide_path = os.path.join(output_dir, f"slide_{i:02d}.png")
            page.screenshot(path=slide_path)
            print(f"Saved slide {i} to {slide_path}")
            
        browser.close()
        print("All slides downloaded successfully!")

if __name__ == "__main__":
    download_slides()
