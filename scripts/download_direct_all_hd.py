import os
import urllib.request

dest_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images\products-hd"
os.makedirs(dest_dir, exist_ok=True)

urls = {
    "viai": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/fcf2c31133714b6e93155af2d33b7842/1.png",
    "webbuilder": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/202c757239c241d993d4d533f4dd528d/1.png",
    "defikit": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/8d7f0f3cd3e048fbb494576b311026e5/1.png",
    "myestate": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/f95c3260e0854acaaf34813054652f12/1.png",
    "hypergraph": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/416db28adb5442859f5362dbb271d0be/1.png",
    "fluid": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/659f1848d8324b3e85e1272276ee8841/1.png",
    "hyperai": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/a4ae50c236d5444a91af530b2af40fcb/1.png",
    "garden": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/2c59bd866eab4d22a12d90d9a039a367/1.png",
    "transformerhub": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/b25f3232926b496780b7e82f2efdc65a/1.png",
    "long": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/dbb86c82f61e46ffa3022e36021acdf2/1.png",
    "rsts": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/debe6bfcc5934a73af79e9ce7aac4a6d/1.png",
    "fly": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/cc884e36449343598393a4e2d0142eaf/1.png",
    "uploop": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/2284bb7f892a4b8bbd2a2c3c83c1b5bf/1.png",
    "lac": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/e4b5bcb0d3fb4578a3c44e339ebacc5b/1.png",
    "jigsaw": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/f2a7472fd7714df09adeb83e9c2c0936/1.png",
    "rings": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/e6c6841efe704a80b561945758f4e5d5/1.png",
    "i2c-forge": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/781adecd4b9f4287b2d361c9ed76bd55/1.png",
    "quang": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/df16066375264d55ae37c44a13f5de98/1.png",
    "shai": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/6500e522acd944729b69e0d27521d961/1.png",
    "i2collab": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/c25a965690f34814b07e0aac6b6f3b3d/1.png",
    "devplatform": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/abfbb441730a47c28aedebd55f75be25/1.png",
    "ireport": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/a647a918ee2142b2bf07226a1e3855e3/1.png",
    "i2chomenet": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/c28a4e8dbefd4a1b99088eeaed26c4c9/1.png",
    "miniplatform": "https://d2h7xmz5gqybh9.cloudfront.net/predictions/c52170bbd7d2461c86a313a8e4775d97/1.png"
}

for slug, url in urls.items():
    dest_path = os.path.join(dest_dir, f"{slug}.jpg")
    try:
        urllib.request.urlretrieve(url, dest_path)
        print(f"✅ Downloaded {slug} ({os.path.getsize(dest_path)} bytes)")
    except Exception as e:
        print(f"❌ Error downloading {slug}: {e}")

print("All 24 images downloaded successfully!")
