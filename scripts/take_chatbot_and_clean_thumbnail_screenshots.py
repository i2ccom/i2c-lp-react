import os
import time
from playwright.sync_api import sync_playwright

def run():
    out_dir = r"C:\Users\atomi\.gemini\antigravity\brain\2c6ba8e5-352c-4649-a6e5-65b9d22512fd"
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page(viewport={"width": 1440, "height": 900})
        
        # 1. Homepage Resting state (verify no blue center line and verify chatbot launcher button)
        page.goto("http://localhost:5175/", wait_until="networkidle")
        time.sleep(1)
        page.evaluate("document.querySelector('#solutions').scrollIntoView()")
        time.sleep(1)
        page.screenshot(path=os.path.join(out_dir, "screenshot_no_blue_line_resting.png"), full_page=False)
        
        # 2. Click the floating chatbot launcher button in lower right
        chatbot_btn = page.locator(".chatbot-launcher-btn")
        chatbot_btn.click()
        time.sleep(0.6)
        page.screenshot(path=os.path.join(out_dir, "screenshot_chatbot_dialog_open.png"), full_page=False)
        
        # 3. Click one of the quick suggestion chips
        first_chip = page.locator(".msg-chip-btn").first
        first_chip.click()
        time.sleep(1.2)
        page.screenshot(path=os.path.join(out_dir, "screenshot_chatbot_interactive_reply.png"), full_page=False)
        
        b.close()
        print("Captured all chatbot and clean thumbnail screenshots successfully!")

if __name__ == "__main__":
    run()
