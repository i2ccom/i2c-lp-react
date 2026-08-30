import os
import time
import urllib.request
import json
import requests

api_key = os.environ.get("WAVESPEED_API_KEY", "")
dest_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images\products-hd"
os.makedirs(dest_dir, exist_ok=True)

predictions = {
    "viai": "eac056c77f8e4e5da87e10cbb46c61ed",
    "webbuilder": "d7b0796d015b43f087ae226f77189d62",
    "defikit": "d14d26de63ec4a34a3060a57d9386803",
    "myestate": "a04bc43527694dff8b2891f9b33b3217",
    "hypergraph": "fb2748540c164f048dac7fd066c2876b",
    "fluid": "c10f1a4ec4b2422488936a808d6f7f71",
    "hyperai": "d3f69511ca0d4f1a83217e6091dbb706",
    "garden": "dfb7cd01f6b948a5bafab9f9fd7a3836",
    "transformerhub": "48ce4ec20ad640b4b22ddf5253117a43",
    "long": "891c80ba22954bf1aaec62f0153cc561",
    "rsts": "cf2dfdcc80af4c9bb116a510a33f1e1a",
    "fly": "14787dbf9ca54818abdb40206f129545",
    "uploop": "395b8468040d44a298c20d35d7910bcd",
    "lac": "afe2693e1f41422394e6969cbe117a5d",
    "jigsaw": "e8acbab4197f4e639cc72fe474e6ca83",
    "rings": "2b9ec819822e4187a3f92eeac44882fc",
    "i2c-forge": "30619ecf8fbd48cfba8ef4adb930c71b",
    "quang": "400a56aaded74eab81ffa1e0cc0e2e6d",
    "shai": "15d39a67fdb04db3a30d09a01056916e",
    "i2collab": "a0b41d888593460582ddcec8ab3b6fbe",
    "devplatform": "3280a3bf38d944848ed7dcc3832a4d4e",
    "ireport": "377ccf4cada443769f54bda237a1fbcd",
    "i2chomenet": "e525f4725a9a499c98b4d4fdee07411f",
    "miniplatform": "df17a85993fc4544a1f0971439dd726f"
}

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

pending = dict(predictions)
completed = {}

for attempt in range(20):
    if not pending:
        break
    print(f"Checking {len(pending)} pending predictions (Attempt {attempt+1})...")
    still_pending = {}
    for slug, pid in pending.items():
        try:
            url = f"https://api.wavespeed.ai/v1/predictions/{pid}"
            res = requests.get(url, headers=headers)
            if res.status_code == 200:
                data = res.json()
                status = data.get("status") or data.get("data", {}).get("status")
                outputs = data.get("outputs") or data.get("data", {}).get("outputs", [])
                if status == "completed" and outputs:
                    img_url = outputs[0]
                    target_file = os.path.join(dest_dir, f"{slug}.jpg")
                    urllib.request.urlretrieve(img_url, target_file)
                    print(f"✅ Downloaded {slug} -> {target_file}")
                    completed[slug] = target_file
                elif status in ["failed", "canceled"]:
                    print(f"❌ Failed: {slug} - {data.get('error')}")
                else:
                    still_pending[slug] = pid
            else:
                print(f"Error checking {slug}: status {res.status_code} {res.text[:100]}")
                still_pending[slug] = pid
        except Exception as e:
            print(f"Exception on {slug}: {e}")
            still_pending[slug] = pid
            
    pending = still_pending
    if pending:
        time.sleep(4)

print(f"Finished! Completed {len(completed)} of {len(predictions)} images.")
