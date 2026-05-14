import argparse
import asyncio
import base64
import json
import os
import shutil
import urllib.request
from pathlib import Path
from typing import Any

from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

MODEL = os.getenv("WAVESPEED_MODEL", "wavespeed-ai/qwen-image-2.0/text-to-image")
CONFIG_DIR = Path(__file__).resolve().parent / "configs"


def extract_payload_json(obj: Any):
    if isinstance(obj, dict):
        content = obj.get("content")
        if isinstance(content, list):
            for item in content:
                if isinstance(item, dict) and item.get("type") == "text":
                    text = item.get("text")
                    if isinstance(text, str):
                        try:
                            return json.loads(text)
                        except Exception:
                            continue
    return None


def extract_base64(obj: Any):
    stack = [obj]
    while stack:
        node = stack.pop()
        if node is None:
            continue
        if isinstance(node, str):
            if len(node) > 200 and "http" not in node:
                try:
                    base64.b64decode(node, validate=False)
                    return node
                except Exception:
                    pass
            continue
        if isinstance(node, dict):
            for key, value in node.items():
                if isinstance(value, str) and any(x in key.lower() for x in ["base64", "image", "png", "jpg", "jpeg", "b64"]):
                    return value
                stack.append(value)
            continue
        if isinstance(node, list):
            stack.extend(node)
    return None


def load_manifest(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def discover_manifest_paths(selected: list[str] | None):
    if selected:
        paths = []
        for entry in selected:
            candidate = Path(entry)
            if not candidate.is_absolute():
                candidate = (CONFIG_DIR / entry).resolve()
            paths.append(candidate)
        return paths
    return sorted(CONFIG_DIR.glob("*.json"))


async def save_result(payload: Any, output_dir: Path, output_base: str):
    raw = extract_payload_json(payload)
    if raw and raw.get("model"):
        print("Model response:", raw.get("model"))

    if raw and raw.get("status") == "success":
        local_files = raw.get("local_files") or []
        if local_files and isinstance(local_files[0], dict):
            src = local_files[0].get("path")
            if src and Path(src).exists():
                src_path = Path(src)
                target = output_dir / f"{output_base}{src_path.suffix.lower()}"
                shutil.copyfile(src_path, target)
                print("Saved", target.name)
                return

        urls = raw.get("urls") or []
        if urls and isinstance(urls[0], str):
            url = urls[0]
            ext = Path(url.split("?")[0]).suffix.lower() or ".jpg"
            target = output_dir / f"{output_base}{ext}"
            urllib.request.urlretrieve(url, target)
            print("Saved", target.name)
            return

    b64 = extract_base64(payload)
    if b64:
        target = output_dir / f"{output_base}.png"
        target.write_bytes(base64.b64decode(b64))
        print("Saved", target.name)
        return

    (output_dir / f"{output_base}.json").write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print("Saved raw payload", f"{output_base}.json")


async def run_generation(manifest_paths: list[Path], dry_run: bool):
    api_key = os.getenv("WAVESPEED_API_KEY")
    if not api_key and not dry_run:
        raise RuntimeError("Missing WAVESPEED_API_KEY")

    if dry_run:
        for manifest_path in manifest_paths:
            manifest = load_manifest(manifest_path)
            print(f"[dry-run] {manifest['name']} -> {manifest['outputDir']} ({len(manifest['items'])} items)")
            for item in manifest["items"]:
                print(f"  - {item['filename']}")
        return

    py = os.getenv("WAVESPEED_PYTHON", r"C:\Python312\python.exe")
    server_params = StdioServerParameters(
        command=py,
        args=["-m", "wavespeed_mcp.server"],
        env={
            **os.environ,
            "WAVESPEED_API_KEY": api_key,
            "WAVESPEED_API_RESOURCE_MODE": os.getenv("WAVESPEED_API_RESOURCE_MODE", "local"),
        },
    )

    async with stdio_client(server_params) as (read_stream, write_stream):
        async with ClientSession(read_stream, write_stream) as session:
            await session.initialize()
            tools_result = await session.list_tools()
            tools = tools_result.tools if hasattr(tools_result, "tools") else []
            image_tool = next(
                (tool for tool in tools if any(token in tool.name.lower() for token in ["image", "generate", "txt2img", "text_to_image"])),
                None,
            )
            if not image_tool:
                raise RuntimeError("No image generation tool exposed by WaveSpeed MCP")

            print("Using tool:", image_tool.name)
            print("Using model:", MODEL)

            for manifest_path in manifest_paths:
                manifest = load_manifest(manifest_path)
                defaults = manifest.get("defaults", {})
                output_dir = Path(manifest["outputDir"])
                output_dir.mkdir(parents=True, exist_ok=True)
                print(f"Group: {manifest['name']}")

                for item in manifest["items"]:
                    args = {
                        "model": MODEL,
                        "prompt": item["prompt"],
                        "width": item.get("width", defaults.get("width", 1024)),
                        "height": item.get("height", defaults.get("height", 1024)),
                        "negative_prompt": item.get("negativePrompt", defaults.get("negativePrompt", "blurry, text, watermark")),
                    }
                    print("Generating", item["filename"])
                    result = await session.call_tool(image_tool.name, args)
                    payload = result.model_dump() if hasattr(result, "model_dump") else result
                    await save_result(payload, output_dir, item["filename"])


def main():
    parser = argparse.ArgumentParser(description="Generate WaveSpeed assets from JSON manifests")
    parser.add_argument("--config", action="append", help="Manifest file name or absolute path. Repeatable.")
    parser.add_argument("--list", action="store_true", help="List discovered manifests and exit.")
    parser.add_argument("--dry-run", action="store_true", help="Load manifests and print items without generating.")
    args = parser.parse_args()

    manifest_paths = discover_manifest_paths(args.config)
    if args.list:
        for path in manifest_paths:
            manifest = load_manifest(path)
            print(f"{path.name}: {manifest['name']} ({len(manifest['items'])} items)")
        return

    asyncio.run(run_generation(manifest_paths, args.dry_run))


if __name__ == "__main__":
    main()
