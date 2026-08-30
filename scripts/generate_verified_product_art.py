import os
import xml.etree.ElementTree as ET

output_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images\product-art"
os.makedirs(output_dir, exist_ok=True)

products = {
    "unibi": {
        "title": "UniBi / UniPlatform",
        "category": "ENTERPRISE ERP &amp; FINANCIAL BI",
        "bg_start": "#031738",
        "bg_end": "#082f63",
        "accent": "#0284c7",
        "code": "ERP-BI",
        "highlight": "Continuous Financial Ledger",
        "pill1": "Sub-10ms Queries",
        "pill2": "Multi-Entity ERP"
    },
    "uniqi": {
        "title": "UniQi Education",
        "category": "ADAPTIVE LEARNING PLATFORM",
        "bg_start": "#0a1f3d",
        "bg_end": "#04336c",
        "accent": "#38bdf8",
        "code": "EDU-AI",
        "highlight": "AI Skill Graph &amp; ZK Badges",
        "pill1": "+40% Completion",
        "pill2": "Verifiable Outcomes"
    },
    "unifi": {
        "title": "UniFi FinTech",
        "category": "TRUST-CENTERED RECONCILIATION",
        "bg_start": "#062b24",
        "bg_end": "#094a3d",
        "accent": "#10b981",
        "code": "FIN-ZK",
        "highlight": "ISO 20022 Multi-Sig Settlement",
        "pill1": "-60% Manual Hours",
        "pill2": "Jigsaw ZK Proofs"
    },
    "webbuilder": {
        "title": "WebBuilder (iWeb)",
        "category": "ENTERPRISE PUBLISHING ENGINE",
        "bg_start": "#131b38",
        "bg_end": "#1e2e60",
        "accent": "#0284c7",
        "code": "WEB-L7",
        "highlight": "Design-Token Brand Governance",
        "pill1": "Core Web Vitals 95+",
        "pill2": "Global Edge CDN"
    },
    "tion": {
        "title": "Tion Revenue Ops",
        "category": "MARKETING &amp; CRM INTELLIGENCE",
        "bg_start": "#331f08",
        "bg_end": "#5c360b",
        "accent": "#f59e0b",
        "code": "REV-AI",
        "highlight": "Predictive Lead Scoring &amp; Automation",
        "pill1": "+45% Pipeline Velocity",
        "pill2": "HyperAI Scoring"
    },
    "osee": {
        "title": "OSee Market Radar",
        "category": "SOCIAL LISTENING &amp; SENTIMENT",
        "bg_start": "#27123d",
        "bg_end": "#441a70",
        "accent": "#8b5cf6",
        "code": "RADAR-NLP",
        "highlight": "Multilingual Crisis Warning Hub",
        "pill1": "30+ Languages NLP",
        "pill2": "&lt;60s Alert Radar"
    },
    "ierp": {
        "title": "iERP Supply Chain",
        "category": "LOGISTICS &amp; PROCUREMENT LEDGER",
        "bg_start": "#09243b",
        "bg_end": "#0f426e",
        "accent": "#0284c7",
        "code": "SCM-DAG",
        "highlight": "Multi-Entity Warehouse Orchestration",
        "pill1": "FractalDB Ledger",
        "pill2": "Zero Stockouts"
    },
    "ireport": {
        "title": "iReport (aiDataExpert)",
        "category": "REAL-TIME STREAM ANALYTICS",
        "bg_start": "#0a2638",
        "bg_end": "#0d4366",
        "accent": "#0ea5e9",
        "code": "BI-STREAM",
        "highlight": "Kitchen Event-Stream Synthesis",
        "pill1": "Sub-Second Refresh",
        "pill2": "Executive KPIs"
    },
    "automotiveeco": {
        "title": "AutomotiveEco OS",
        "category": "CONNECTED MOBILITY &amp; FLEET",
        "bg_start": "#062b20",
        "bg_end": "#0a4a35",
        "accent": "#10b981",
        "code": "AUTO-OS",
        "highlight": "Battery Telemetry &amp; Fleet Routing",
        "pill1": "Edge Diagnostics",
        "pill2": "CAN Bus Sync"
    },
    "logop": {
        "title": "LogOp Route Optimizer",
        "category": "MULTI-MODAL GIS DISPATCH",
        "bg_start": "#09243d",
        "bg_end": "#0b4175",
        "accent": "#0284c7",
        "code": "GIS-ROUTER",
        "highlight": "HyperGraph Dynamic GIS Routing",
        "pill1": "-22% Fuel Cost",
        "pill2": "Turn-by-Turn GPS"
    },
    "cyop": {
        "title": "CyOp Threat Defense",
        "category": "CONTINUOUS AST &amp; CVE SCANNER",
        "bg_start": "#3b0c16",
        "bg_end": "#691224",
        "accent": "#ef4444",
        "code": "SEC-MEMBRANE",
        "highlight": "Zero-Trust Runtime Protection",
        "pill1": "Continuous AST Scan",
        "pill2": "Policy Membrane"
    },
    "defikit": {
        "title": "DefiKit Settlements",
        "category": "DECENTRALIZED FINANCIAL RAILS",
        "bg_start": "#27123d",
        "bg_end": "#491c78",
        "accent": "#8b5cf6",
        "code": "DEFI-ZK",
        "highlight": "Jigsaw ZK Smart Contracts",
        "pill1": "Liquidity Routing",
        "pill2": "Verified Receipts"
    },
    "myestate": {
        "title": "MyEstate Smart Real Estate",
        "category": "COMMERCIAL IOT &amp; DIGITAL TWIN",
        "bg_start": "#052e26",
        "bg_end": "#095444",
        "accent": "#10b981",
        "code": "IOT-TWIN",
        "highlight": "HVAC Telemetry &amp; 3D Spatial Twin",
        "pill1": "-24% Energy Spend",
        "pill2": "BACnet / MQTT Mesh"
    },
    "i2chomenet": {
        "title": "i2cHomenet Smart Home",
        "category": "PRIVATE IOT &amp; EDGE AUTOMATION",
        "bg_start": "#09253d",
        "bg_end": "#0b4273",
        "accent": "#0ea5e9",
        "code": "HOME-MESH",
        "highlight": "100% Local Private Edge Mesh",
        "pill1": "Zero-Cloud Privacy",
        "pill2": "Voice SLM Cluster"
    },
    "miniplatform": {
        "title": "MiniPlatform",
        "category": "DISTRIBUTED KNOWLEDGE NETWORK",
        "bg_start": "#09243d",
        "bg_end": "#0b3f6e",
        "accent": "#0284c7",
        "code": "KNOWLEDGE",
        "highlight": "Semantic Search &amp; HyperGraph Wiki",
        "pill1": "Community Mesh",
        "pill2": "Decentralized Sync"
    },

    # Core Substrates (Layer 6 & 5)
    "kitchen": {
        "title": "Kitchen Middleware",
        "category": "GENERATIVE DATA MIDDLEWARE",
        "bg_start": "#331c06",
        "bg_end": "#5e3208",
        "accent": "#f59e0b",
        "code": "BRIGADE-L5",
        "highlight": "Brigade de Cuisine &amp; Dynamic Soups",
        "pill1": "&lt;8ms Compiled Views",
        "pill2": "NATS JetStream"
    },
    "fractaldb": {
        "title": "FractalDB Spacetime",
        "category": "PERSISTENCE CORE DATABASE",
        "bg_start": "#031f3b",
        "bg_end": "#063c75",
        "accent": "#0284c7",
        "code": "SPACETIME-L6",
        "highlight": "Lamport Clocks &amp; Multi-Reality DAG",
        "pill1": "250k+ writes/sec",
        "pill2": "O(1) Time Travel"
    },
    "hypergraph": {
        "title": "HyperGraph Core",
        "category": "MULTIDIMENSIONAL GRAPH FORMAT",
        "bg_start": "#200f38",
        "bg_end": "#3d1970",
        "accent": "#8b5cf6",
        "code": "N-ARY GRAPH",
        "highlight": "GPU-Accelerated N-ary Graph Index",
        "pill1": "WGPU Tensor Kernels",
        "pill2": "O(1) Traversal"
    },
    "fluid": {
        "title": "Fluid CAS Freezer",
        "category": "CONTENT-ADDRESSED STORAGE",
        "bg_start": "#052238",
        "bg_end": "#084170",
        "accent": "#0ea5e9",
        "code": "CAS-BLAKE3",
        "highlight": "FastCDC Chunking &amp; Global Deduplication",
        "pill1": "BLAKE3 kid:// hashes",
        "pill2": "O(1) CAS Storage"
    },

    # AI Engines & Execution Runtimes (Layer 3, 2, 1)
    "minhai": {
        "title": "MinhAI Edge Agent",
        "category": "LOCAL-FIRST REASONING SLM",
        "bg_start": "#05273b",
        "bg_end": "#094b75",
        "accent": "#38bdf8",
        "code": "MINH-SLM",
        "highlight": "Quantized GGUF Reasoning in &lt;2GB VRAM",
        "pill1": "100% Offline Edge",
        "pill2": "EBNF Grammar Lock"
    },
    "hyperai": {
        "title": "HyperAI Neural Core",
        "category": "CLUSTER TENSOR ENGINE",
        "bg_start": "#210f38",
        "bg_end": "#441a78",
        "accent": "#8b5cf6",
        "code": "GNN-TENSOR",
        "highlight": "High-Throughput Graph Neural Engine",
        "pill1": "Zero-Copy Shared Mem",
        "pill2": "N-ary Tensor Kernels"
    },
    "viai": {
        "title": "ViAI Enterprise Copilot",
        "category": "MULTIMODAL SPEECH &amp; OCR",
        "bg_start": "#05233d",
        "bg_end": "#094178",
        "accent": "#0284c7",
        "code": "MULTIMODAL",
        "highlight": "ViVoice Transcription &amp; Document OCR",
        "pill1": "Enterprise Grounding",
        "pill2": "FractalDB Audit"
    },
    "garden": {
        "title": "Garden Registry",
        "category": "VERIFIED CONTRACT REGISTRY",
        "bg_start": "#042b1f",
        "bg_end": "#074d36",
        "accent": "#10b981",
        "code": "REGISTRY-PKG",
        "highlight": "Pre-Tested Sovereign Package Hub",
        "pill1": "80-90% Instant Reuse",
        "pill2": "Signed Receipts"
    },
    "transformerhub": {
        "title": "TransformerHub",
        "category": "NO-CODE AI ETL WORKFLOW",
        "bg_start": "#331b05",
        "bg_end": "#613106",
        "accent": "#f59e0b",
        "code": "ETL-PIPELINE",
        "highlight": "Dynamic Node Graph &amp; Data Pipeline",
        "pill1": "Kitchen Streaming",
        "pill2": "Visual ETL Canvas"
    },
    "long": {
        "title": "Long Runtime",
        "category": "DRAGON VM WASM SANDBOX",
        "bg_start": "#240f3b",
        "bg_end": "#4a197d",
        "accent": "#8b5cf6",
        "code": "DRAGON-VM",
        "highlight": "LongCell Isolation &amp; LongGuard Membrane",
        "pill1": "Polymorphic WASM",
        "pill2": "Deterministic Run"
    },
    "rsts": {
        "title": "RsTs Language",
        "category": "EFFECT-AWARE TYPED COMPILER",
        "bg_start": "#3b0c16",
        "bg_end": "#691224",
        "accent": "#ef4444",
        "code": "RSTS-LANG",
        "highlight": "Compiles TypeScript Semantics to Long IR",
        "pill1": "Zero-GC Execution",
        "pill2": "Effect Typings"
    },
    "fly": {
        "title": "Fly (Fluidy)",
        "category": "SPACETIME DATAFLOW ENGINE",
        "bg_start": "#052238",
        "bg_end": "#074478",
        "accent": "#0ea5e9",
        "code": "FLUIDY-FLOW",
        "highlight": "SpaceTime-Aware Pipeline Orchestration",
        "pill1": "Zero-Downtime Deploy",
        "pill2": "Atomic Release"
    },
    "uploop": {
        "title": "Uploop UI Engine",
        "category": "6KB ESM REACTIVE STATE BUS",
        "bg_start": "#03203b",
        "bg_end": "#073e75",
        "accent": "#0284c7",
        "code": "UPLOOP-ESM",
        "highlight": "Hot/Cold/Transient Reactive State Buses",
        "pill1": "6KB Ultra-Lightweight",
        "pill2": "Zero-VDOM Speed"
    },
    "lac": {
        "title": "Lac Desktop GUI",
        "category": "SKIA NATIVE DESKTOP RENDERER",
        "bg_start": "#042b20",
        "bg_end": "#084d39",
        "accent": "#10b981",
        "code": "SKIA-NATIVE",
        "highlight": "Declarative 120 FPS Native GUI Pipeline",
        "pill1": "Skia 2D Graphics",
        "pill2": "Cross-Platform"
    },

    # Trust, Governance & Developer Toolchains (Layer 5 & 4)
    "jigsaw": {
        "title": "Jigsaw ADR-001",
        "category": "CRYPTOGRAPHIC PROOF MEMBRANE",
        "bg_start": "#200f38",
        "bg_end": "#411878",
        "accent": "#8b5cf6",
        "code": "ADR-001 ZK",
        "highlight": "Canonical CBOR &amp; ZK Policy Verifier",
        "pill1": "ADR-001 Standard",
        "pill2": "O(1) Evidence Proofs"
    },
    "rings": {
        "title": "Rings P2P DHT Mesh",
        "category": "CRYPTOGRAPHIC PEER TRANSPORT",
        "bg_start": "#042038",
        "bg_end": "#073e73",
        "accent": "#0284c7",
        "code": "P2P-RINGS",
        "highlight": "Trust-Ring Scopes &amp; Direct QUIC Tunnels",
        "pill1": "Zero Single Point Failure",
        "pill2": "P2P Discovery"
    },
    "i2c-forge": {
        "title": "i2c-Forge Compiler",
        "category": "INTENT-TO-CODE SYNTHESIZER",
        "bg_start": "#331c05",
        "bg_end": "#633306",
        "accent": "#f59e0b",
        "code": "FORGE-SYNTH",
        "highlight": "Autonomous Project Generator &amp; Build Locks",
        "pill1": "80-90% Auto Assembly",
        "pill2": "Jigsaw Receipts"
    },
    "quang": {
        "title": "Quang Enterprise",
        "category": "COLLABORATION &amp; GIT DELTA SYNC",
        "bg_start": "#04233b",
        "bg_end": "#084478",
        "accent": "#0284c7",
        "code": "QUANG-HUB",
        "highlight": "Multi-Repo Intent Workspace &amp; Sync",
        "pill1": "QuangHub Protocol",
        "pill2": "Git Delta Mesh"
    },
    "shai": {
        "title": "Shai IDE Bridge",
        "category": "CODEBASE PROPERTY GRAPH &amp; MCP",
        "bg_start": "#05263d",
        "bg_end": "#08497a",
        "accent": "#38bdf8",
        "code": "SHAI-MCP",
        "highlight": "Model Context Protocol &amp; AST CPG Indexer",
        "pill1": "100k lines/s Indexing",
        "pill2": "MinhAI IDE Pipe"
    },
    "i2collab": {
        "title": "i2Collab Multi-Agent",
        "category": "AUTONOMOUS PAIRING SWARM",
        "bg_start": "#042b20",
        "bg_end": "#074f3b",
        "accent": "#10b981",
        "code": "SWARM-PAIR",
        "highlight": "Agentic Role-Lens Dispatch &amp; Merge Swarms",
        "pill1": "-70% PR Review Time",
        "pill2": "Multi-Agent Pair"
    },
    "devplatform": {
        "title": "DevPlatform Studio",
        "category": "VISUAL SCHEMA-TO-UI RAPID STUDIO",
        "bg_start": "#052238",
        "bg_end": "#094375",
        "accent": "#0ea5e9",
        "code": "DEV-CANVAS",
        "highlight": "Visual Canvas to ULSX &amp; Uploop Prototyping",
        "pill1": "Zero-Lockin JDL",
        "pill2": "Live Sandboxes"
    }
}

for slug, data in products.items():
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
  <defs>
    <linearGradient id="grad_{slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{data['bg_start']}"/>
      <stop offset="60%" stop-color="{data['bg_end']}"/>
      <stop offset="100%" stop-color="#020817"/>
    </linearGradient>
    <pattern id="pat_{slug}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1"/>
    </pattern>
    <linearGradient id="card_glass_{slug}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255, 255, 255, 0.14)"/>
      <stop offset="100%" stop-color="rgba(255, 255, 255, 0.04)"/>
    </linearGradient>
  </defs>

  <!-- Background Base -->
  <rect width="800" height="450" fill="url(#grad_{slug})"/>
  <rect width="800" height="450" fill="url(#pat_{slug})"/>

  <!-- Top Category Eyebrow Pill -->
  <rect x="48" y="36" width="340" height="32" rx="16" fill="rgba(255, 255, 255, 0.08)" stroke="{data['accent']}" stroke-width="1.5"/>
  <text x="64" y="57" fill="{data['accent']}" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="800" letter-spacing="1">{data['category']}</text>

  <!-- Top Right Code Chip -->
  <rect x="620" y="36" width="132" height="32" rx="8" fill="rgba(0, 0, 0, 0.5)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
  <text x="686" y="57" fill="#e2e8f0" font-family="monospace" font-size="12" font-weight="700" text-anchor="middle">{data['code']}</text>

  <!-- Product Title -->
  <text x="48" y="125" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="34" font-weight="900">{data['title']}</text>

  <!-- Core Capability Hero Banner Card -->
  <rect x="48" y="155" width="704" height="155" rx="16" fill="url(#card_glass_{slug})" stroke="rgba(255, 255, 255, 0.18)" stroke-width="1.5"/>

  <!-- Accent Left Vertical Indicator -->
  <rect x="48" y="155" width="8" height="155" rx="4" fill="{data['accent']}"/>

  <!-- Highlight Statement -->
  <text x="76" y="205" fill="#f8fafc" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="21" font-weight="700">{data['highlight']}</text>

  <!-- Two Specification Badges Inside Card -->
  <g transform="translate(76, 235)">
    <!-- Pill 1 -->
    <rect x="0" y="0" width="240" height="48" rx="8" fill="rgba(0, 0, 0, 0.55)" stroke="{data['accent']}" stroke-width="1.5"/>
    <circle cx="20" cy="24" r="5" fill="{data['accent']}"/>
    <text x="36" y="30" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" font-weight="700">{data['pill1']}</text>

    <!-- Pill 2 -->
    <rect x="260" y="0" width="240" height="48" rx="8" fill="rgba(0, 0, 0, 0.55)" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.5"/>
    <circle cx="280" cy="24" r="5" fill="#10b981"/>
    <text x="296" y="30" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" font-weight="700">{data['pill2']}</text>
  </g>

  <!-- Footer Verification & Standard Bar -->
  <g transform="translate(48, 350)">
    <rect width="704" height="54" rx="10" fill="rgba(0, 0, 0, 0.65)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1"/>
    <circle cx="28" cy="27" r="6" fill="#10b981"/>
    <text x="46" y="32" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" font-weight="600">Deterministic Architecture &#8226; <tspan fill="{data['accent']}">i2c Machine-Native Standard</tspan></text>
    <text x="680" y="32" fill="#94a3b8" font-family="monospace" font-size="13" font-weight="700" text-anchor="end">ADR-001 &#8226; 100% PROVENANCE</text>
  </g>
</svg>
'''
    target_path = os.path.join(output_dir, f"{slug}.svg")
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    
    # Verify XML parses without error
    ET.fromstring(svg_content)
    print(f"Verified valid XML SVG: {slug}.svg")

print("All 36 SVG files generated and verified as 100% valid XML!")
