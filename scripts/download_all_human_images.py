import os
import urllib.request

dest_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images\products-human"
os.makedirs(dest_dir, exist_ok=True)

human_urls = {
    "unibi": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/0f1ae47dd96a4843b4447d8a4c7db2f5/1.png",
    "uniqi": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/5609f4a920514be5af083befb5ffc96f/1.png",
    "unifi": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/5923acf82da14006bc14b467cb40c3f8/1.png",
    "webbuilder": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/af9d9e9f58ec4d94a7e434bab9cb633d/1.png",
    "tion": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/3563c19ff18a40689ff552eac9db2739/1.png",
    "osee": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/0b90dade27ee449db3b9fde893983be7/1.png",
    "ierp": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/60edd193c35e4368a0e5abbe90722dff/1.png",
    "ireport": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/05a92c9e63214064bfb4061660823188/1.png",
    "automotiveeco": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/96917f3db63a493fab9c921c8f2fc99d/1.png",
    "logop": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/ab9f7204cc3e460496b673ba5f8d4f01/1.png",
    "cyop": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/80c1548ff5f84e85a002759e3eeb2985/1.png",
    "defikit": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/720da82b533e4b1690eb4c135244d27a/1.png",
    "myestate": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/b937ae57189c4a0ba43b2240d3931bc4/1.png",
    "i2chomenet": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/f4366f7f2dd14921b9a20d0a22f51e67/1.png",
    "miniplatform": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/dcf0853348274df1a50adb62f09ef544/1.png",
    "kitchen": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/61162ea60de24d7183736812371aba90/1.png",
    "fractaldb": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/2b17046699eb41cb9f353d8b5b1a7bc3/1.png",
    "hypergraph": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/745435513cb545b88e00760471c7cdf1/1.png",
    "fluid": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/8b937119f8f44765a0062867445a3efc/1.png",
    "minhai": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/528497bad6ec4e4a87fcbdc776ebe7b9/1.png",
    "hyperai": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/033aea40c5004025a4bf39da4c0e9f1d/1.png",
    "viai": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/771e66a737c74246a8bce32b298db694/1.png",
    "garden": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/a6d0fdd160ab46eab52adb1f627dd28f/1.png",
    "transformerhub": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/2ff5ac3628bf49d7805d2f68fc13034e/1.png",
    "long": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/4eb2ee1e87c84f69b986208b708a875e/1.png",
    "rsts": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/23b7105983204ef7a394a32fe7b3fee4/1.png",
    "fly": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/20143e88654e4ebaa5c028815962897b/1.png",
    "uploop": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/39b5b7be6136485ca871812e45b68170/1.png",
    "lac": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/0ad3c585ce2b4b0994152dfbda7298e1/1.png",
    "jigsaw": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/ee022f67103a4653b28ff30796c23fb4/1.png",
    "rings": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/34d2a664db5045b9b8c7e474f8d41e49/1.png",
    "i2c-forge": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/e0c9ee8465b445489ddc4fe8893c2d6a/1.png",
    "quang": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/843ced6c6af64e0096e29470a71c920b/1.png",
    "shai": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/f8ccf074ca254004b80a7918e5b3def3/1.png",
    "i2collab": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/ab9dfb38a2a244cd9d56145ab53c30ce/1.png",
    "devplatform": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/50af2f0ebdbf4e21a602656f511bb658/1.png"
}

for slug, url in human_urls.items():
    dest_path = os.path.join(dest_dir, f"{slug}.jpg")
    try:
        urllib.request.urlretrieve(url, dest_path)
        print(f"Downloaded human scenario for {slug}: {os.path.getsize(dest_path)} bytes")
    except Exception as e:
        print(f"Error downloading {slug}: {e}")

print(f"Successfully downloaded all {len(human_urls)} human scenario images!")
