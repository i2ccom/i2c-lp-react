import os
import time
from playwright.sync_api import sync_playwright

def download_all_slides():
    url = "https://docs.google.com/presentation/d/e/2PACX-1vQH9jUZSH1knWD0zFCcbfynkUqEuUgInVCEWAuTxKP7P6SWp-jpA6EYe0ZCkkzC6vC6gQvMZL4MnLpZ/pub?start=false&loop=false&delayms=3000"
    output_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images\slides"
    os.makedirs(output_dir, exist_ok=True)
    
    with sync_playwright() as p:
        browser = p.chromium.launch()
        # Use high resolution for crisp slide capture
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        
        page.goto(url, wait_until="networkidle")
        time.sleep(2)
        
        for idx in range(1, 15):
            slide_path = os.path.join(output_dir, f"slide_{idx:02d}.png")
            page.screenshot(path=slide_path)
            print(f"Captured slide {idx}")
            page.keyboard.press("Space")
            time.sleep(1.2)
            
        browser.close()
        print("Done capturing deck slides!")

if __name__ == "__main__":
    download_all_slides()
