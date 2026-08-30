import os

output_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images\product-art"
os.makedirs(output_dir, exist_ok=True)

# Comprehensive bold visual definitions for all 36 products
products = {
    "unibi": {
        "title": "UniBi / UniPlatform",
        "category": "ENTERPRISE ERP & FINANCIAL BI",
        "icon": "fa-building-columns",
        "bg_start": "#031738",
        "bg_end": "#082f63",
        "accent": "#0284c7",
        "symbol": "📊",
        "highlight": "Continuous Financial Ledger",
        "pill1": "Sub-10ms Queries",
        "pill2": "Multi-Entity ERP"
    },
    "uniqi": {
        "title": "UniQi Education",
        "category": "ADAPTIVE LEARNING PLATFORM",
        "icon": "fa-graduation-cap",
        "bg_start": "#0a1f3d",
        "bg_end": "#04336c",
        "accent": "#38bdf8",
        "symbol": "🎓",
        "highlight": "AI Skill Graph & ZK Badges",
        "pill1": "+40% Completion",
        "pill2": "Verifiable Outcomes"
    },
    "unifi": {
        "title": "UniFi FinTech",
        "category": "TRUST-CENTERED RECONCILIATION",
        "icon": "fa-vault",
        "bg_start": "#062b24",
        "bg_end": "#094a3d",
        "accent": "#10b981",
        "symbol": "💳",
        "highlight": "ISO 20022 Multi-Sig Settlement",
        "pill1": "-60% Manual Hours",
        "pill2": "Jigsaw ZK Proofs"
    },
    "webbuilder": {
        "title": "WebBuilder (iWeb)",
        "category": "ENTERPRISE PUBLISHING ENGINE",
        "icon": "fa-browser",
        "bg_start": "#131b38",
        "bg_end": "#1e2e60",
        "accent": "#0284c7",
        "symbol": "🌐",
        "highlight": "Design-Token Brand Governance",
        "pill1": "Core Web Vitals 95+",
        "pill2": "Global Edge CDN"
    },
    "tion": {
        "title": "Tion Revenue Ops",
        "category": "MARKETING & CRM INTELLIGENCE",
        "icon": "fa-bullhorn",
        "bg_start": "#331f08",
        "bg_end": "#5c360b",
        "accent": "#f59e0b",
        "symbol": "📈",
        "highlight": "Predictive Lead Scoring & Automation",
        "pill1": "+45% Pipeline Velocity",
        "pill2": "HyperAI Scoring"
    },
    "osee": {
        "title": "OSee Market Radar",
        "category": "SOCIAL LISTENING & SENTIMENT",
        "icon": "fa-radar",
        "bg_start": "#27123d",
        "bg_end": "#441a70",
        "accent": "#8b5cf6",
        "symbol": "📡",
        "highlight": "Multilingual Crisis Warning Hub",
        "pill1": "30+ Languages NLP",
        "pill2": "<60s Alert Radar"
    },
    "ierp": {
        "title": "iERP Supply Chain",
        "category": "LOGISTICS & PROCUREMENT LEDGER",
        "icon": "fa-boxes-stacked",
        "bg_start": "#09243b",
        "bg_end": "#0f426e",
        "accent": "#0284c7",
        "symbol": "📦",
        "highlight": "Multi-Entity Warehouse Orchestration",
        "pill1": "FractalDB Ledger",
        "pill2": "Zero Stockouts"
    },
    "ireport": {
        "title": "iReport (aiDataExpert)",
        "category": "REAL-TIME STREAM ANALYTICS",
        "icon": "fa-chart-pie",
        "bg_start": "#0a2638",
        "bg_end": "#0d4366",
        "accent": "#0ea5e9",
        "symbol": "📑",
        "highlight": "Kitchen Event-Stream Synthesis",
        "pill1": "Sub-Second Refresh",
        "pill2": "Executive KPIs"
    },
    "automotiveeco": {
        "title": "AutomotiveEco OS",
        "category": "CONNECTED MOBILITY & FLEET",
        "icon": "fa-car",
        "bg_start": "#062b20",
        "bg_end": "#0a4a35",
        "accent": "#10b981",
        "symbol": "🚗",
        "highlight": "Battery Telemetry & Fleet Routing",
        "pill1": "Edge Diagnostics",
        "pill2": "CAN Bus Sync"
    },
    "logop": {
        "title": "LogOp Route Optimizer",
        "category": "MULTI-MODAL GIS DISPATCH",
        "icon": "fa-route",
        "bg_start": "#09243d",
        "bg_end": "#0b4175",
        "accent": "#0284c7",
        "symbol": "🗺️",
        "highlight": "HyperGraph Dynamic GIS Routing",
        "pill1": "-22% Fuel Cost",
        "pill2": "Turn-by-Turn GPS"
    },
    "cyop": {
        "title": "CyOp Threat Defense",
        "category": "CONTINUOUS AST & CVE SCANNER",
        "icon": "fa-shield-virus",
        "bg_start": "#3b0c16",
        "bg_end": "#691224",
        "accent": "#ef4444",
        "symbol": "🛡️",
        "highlight": "Zero-Trust Runtime Protection",
        "pill1": "Continuous AST Scan",
        "pill2": "Policy Membrane"
    },
    "defikit": {
        "title": "DefiKit Settlements",
        "category": "DECENTRALIZED FINANCIAL RAILS",
        "icon": "fa-coins",
        "bg_start": "#27123d",
        "bg_end": "#491c78",
        "accent": "#8b5cf6",
        "symbol": "⛓️",
        "highlight": "Jigsaw ZK Smart Contracts",
        "pill1": "Liquidity Routing",
        "pill2": "Verified Receipts"
    },
    "myestate": {
        "title": "MyEstate Smart Real Estate",
        "category": "COMMERCIAL IOT & DIGITAL TWIN",
        "icon": "fa-building",
        "bg_start": "#052e26",
        "bg_end": "#095444",
        "accent": "#10b981",
        "symbol": "🏢",
        "highlight": "HVAC Telemetry & 3D Spatial Twin",
        "pill1": "-24% Energy Spend",
        "pill2": "BACnet / MQTT Mesh"
    },
    "i2chomenet": {
        "title": "i2cHomenet Smart Home",
        "category": "PRIVATE IOT & EDGE AUTOMATION",
        "icon": "fa-house-signal",
        "bg_start": "#09253d",
        "bg_end": "#0b4273",
        "accent": "#0ea5e9",
        "symbol": "🏠",
        "highlight": "100% Local Private Edge Mesh",
        "pill1": "Zero-Cloud Privacy",
        "pill2": "Voice SLM Cluster"
    },
    "miniplatform": {
        "title": "MiniPlatform",
        "category": "DISTRIBUTED KNOWLEDGE NETWORK",
        "icon": "fa-circle-nodes",
        "bg_start": "#09243d",
        "bg_end": "#0b3f6e",
        "accent": "#0284c7",
        "symbol": "🌐",
        "highlight": "Semantic Search & HyperGraph Wiki",
        "pill1": "Community Mesh",
        "pill2": "Decentralized Sync"
    },

    # Core Substrates (Layer 6 & 5)
    "kitchen": {
        "title": "Kitchen Middleware",
        "category": "GENERATIVE DATA MIDDLEWARE",
        "icon": "fa-utensils",
        "bg_start": "#331c06",
        "bg_end": "#5e3208",
        "accent": "#f59e0b",
        "symbol": "🍳",
        "highlight": "Brigade de Cuisine & Dynamic Soups",
        "pill1": "<8ms Compiled Views",
        "pill2": "NATS JetStream"
    },
    "fractaldb": {
        "title": "FractalDB Spacetime",
        "category": "PERSISTENCE CORE DATABASE",
        "icon": "fa-database",
        "bg_start": "#031f3b",
        "bg_end": "#063c75",
        "accent": "#0284c7",
        "symbol": "⏳",
        "highlight": "Lamport Clocks & Multi-Reality DAG",
        "pill1": "250k+ writes/sec",
        "pill2": "O(1) Time Travel"
    },
    "hypergraph": {
        "title": "HyperGraph Core",
        "category": "MULTIDIMENSIONAL GRAPH FORMAT",
        "icon": "fa-diagram-project",
        "bg_start": "#200f38",
        "bg_end": "#3d1970",
        "accent": "#8b5cf6",
        "symbol": "🕸️",
        "highlight": "GPU-Accelerated N-ary Graph Index",
        "pill1": "WGPU Tensor Kernels",
        "pill2": "O(1) Traversal"
    },
    "fluid": {
        "title": "Fluid CAS Freezer",
        "category": "CONTENT-ADDRESSED STORAGE",
        "icon": "fa-box-archive",
        "bg_start": "#052238",
        "bg_end": "#084170",
        "accent": "#0ea5e9",
        "symbol": "🧊",
        "highlight": "FastCDC Chunking & Global Deduplication",
        "pill1": "BLAKE3 kid:// hashes",
        "pill2": "O(1) CAS Storage"
    },

    # AI Engines & Execution Runtimes (Layer 3, 2, 1)
    "minhai": {
        "title": "MinhAI Edge Agent",
        "category": "LOCAL-FIRST REASONING SLM",
        "icon": "fa-brain",
        "bg_start": "#05273b",
        "bg_end": "#094b75",
        "accent": "#38bdf8",
        "symbol": "🧠",
        "highlight": "Quantized GGUF Reasoning in <2GB VRAM",
        "pill1": "100% Offline Edge",
        "pill2": "EBNF Grammar Lock"
    },
    "hyperai": {
        "title": "HyperAI Neural Core",
        "category": "CLUSTER TENSOR ENGINE",
        "icon": "fa-microchip",
        "bg_start": "#210f38",
        "bg_end": "#441a78",
        "accent": "#8b5cf6",
        "symbol": "⚡",
        "highlight": "High-Throughput Graph Neural Engine",
        "pill1": "Zero-Copy Shared Mem",
        "pill2": "N-ary Tensor Kernels"
    },
    "viai": {
        "title": "ViAI Enterprise Copilot",
        "category": "MULTIMODAL SPEECH & OCR",
        "icon": "fa-comments",
        "bg_start": "#05233d",
        "bg_end": "#094178",
        "accent": "#0284c7",
        "symbol": "🎙️",
        "highlight": "ViVoice Transcription & Document OCR",
        "pill1": "Enterprise Grounding",
        "pill2": "FractalDB Audit"
    },
    "garden": {
        "title": "Garden Registry",
        "category": "VERIFIED CONTRACT REGISTRY",
        "icon": "fa-seedling",
        "bg_start": "#042b1f",
        "bg_end": "#074d36",
        "accent": "#10b981",
        "symbol": "🌱",
        "highlight": "Pre-Tested Sovereign Package Hub",
        "pill1": "80-90% Instant Reuse",
        "pill2": "Signed Receipts"
    },
    "transformerhub": {
        "title": "TransformerHub",
        "category": "NO-CODE AI ETL WORKFLOW",
        "icon": "fa-arrows-split-up-and-left",
        "bg_start": "#331b05",
        "bg_end": "#613106",
        "accent": "#f59e0b",
        "symbol": "🔄",
        "highlight": "Dynamic Node Graph & Data Pipeline",
        "pill1": "Kitchen Streaming",
        "pill2": "Visual ETL Canvas"
    },
    "long": {
        "title": "Long Runtime",
        "category": "DRAGON VM WASM SANDBOX",
        "icon": "fa-dragon",
        "bg_start": "#240f3b",
        "bg_end": "#4a197d",
        "accent": "#8b5cf6",
        "symbol": "🐉",
        "highlight": "LongCell Isolation & LongGuard Membrane",
        "pill1": "Polymorphic WASM",
        "pill2": "Deterministic Run"
    },
    "rsts": {
        "title": "RsTs Language",
        "category": "EFFECT-AWARE TYPED COMPILER",
        "icon": "fa-code",
        "bg_start": "#3b0c16",
        "bg_end": "#691224",
        "accent": "#ef4444",
        "symbol": "🦀",
        "highlight": "Compiles TypeScript Semantics to Long IR",
        "pill1": "Zero-GC Execution",
        "pill2": "Effect Typings"
    },
    "fly": {
        "title": "Fly (Fluidy)",
        "category": "SPACETIME DATAFLOW ENGINE",
        "icon": "fa-paper-plane",
        "bg_start": "#052238",
        "bg_end": "#074478",
        "accent": "#0ea5e9",
        "symbol": "✈️",
        "highlight": "SpaceTime-Aware Pipeline Orchestration",
        "pill1": "Zero-Downtime Deploy",
        "pill2": "Atomic Release"
    },
    "uploop": {
        "title": "Uploop UI Engine",
        "category": "6KB ESM REACTIVE STATE BUS",
        "icon": "fa-cubes",
        "bg_start": "#03203b",
        "bg_end": "#073e75",
        "accent": "#0284c7",
        "symbol": "⚡",
        "highlight": "Hot/Cold/Transient Reactive State Buses",
        "pill1": "6KB Ultra-Lightweight",
        "pill2": "Zero-VDOM Speed"
    },
    "lac": {
        "title": "Lac Desktop GUI",
        "category": "SKIA NATIVE DESKTOP RENDERER",
        "icon": "fa-desktop",
        "bg_start": "#042b20",
        "bg_end": "#084d39",
        "accent": "#10b981",
        "symbol": "🖥️",
        "highlight": "Declarative 120 FPS Native GUI Pipeline",
        "pill1": "Skia 2D Graphics",
        "pill2": "Cross-Platform"
    },

    # Trust, Governance & Developer Toolchains (Layer 5 & 4)
    "jigsaw": {
        "title": "Jigsaw ADR-001",
        "category": "CRYPTOGRAPHIC PROOF MEMBRANE",
        "icon": "fa-puzzle-piece",
        "bg_start": "#200f38",
        "bg_end": "#411878",
        "accent": "#8b5cf6",
        "symbol": "🧩",
        "highlight": "Canonical CBOR & ZK Policy Verifier",
        "pill1": "ADR-001 Standard",
        "pill2": "O(1) Evidence Verification"
    },
    "rings": {
        "title": "Rings P2P DHT Mesh",
        "category": "CRYPTOGRAPHIC PEER TRANSPORT",
        "icon": "fa-circle-nodes",
        "bg_start": "#042038",
        "bg_end": "#073e73",
        "accent": "#0284c7",
        "symbol": "⭕",
        "highlight": "Trust-Ring Scopes & Direct QUIC Tunnels",
        "pill1": "Zero Single Point Failure",
        "pill2": "P2P Discovery"
    },
    "i2c-forge": {
        "title": "i2c-Forge Compiler",
        "category": "INTENT-TO-CODE SYNTHESIZER",
        "icon": "fa-hammer",
        "bg_start": "#331c05",
        "bg_end": "#633306",
        "accent": "#f59e0b",
        "symbol": "🔨",
        "highlight": "Autonomous Project Generator & Build Locks",
        "pill1": "80-90% Auto Assembly",
        "pill2": "Jigsaw Receipts"
    },
    "quang": {
        "title": "Quang Enterprise",
        "category": "COLLABORATION & GIT DELTA SYNC",
        "icon": "fa-users-gear",
        "bg_start": "#04233b",
        "bg_end": "#084478",
        "accent": "#0284c7",
        "symbol": "💼",
        "highlight": "Multi-Repo Intent Workspace & Sync",
        "pill1": "QuangHub Protocol",
        "pill2": "Git Delta Mesh"
    },
    "shai": {
        "title": "Shai IDE Bridge",
        "category": "CODEBASE PROPERTY GRAPH & MCP",
        "icon": "fa-terminal",
        "bg_start": "#05263d",
        "bg_end": "#08497a",
        "accent": "#38bdf8",
        "symbol": "💻",
        "highlight": "Model Context Protocol & AST CPG Indexer",
        "pill1": "100k lines/s Indexing",
        "pill2": "MinhAI IDE Pipe"
    },
    "i2collab": {
        "title": "i2Collab Multi-Agent",
        "category": "AUTONOMOUS PAIRING SWARM",
        "icon": "fa-people-group",
        "bg_start": "#042b20",
        "bg_end": "#074f3b",
        "accent": "#10b981",
        "symbol": "🤝",
        "highlight": "Agentic Role-Lens Dispatch & Merge Swarms",
        "pill1": "-70% PR Review Time",
        "pill2": "Multi-Agent Pair"
    },
    "devplatform": {
        "title": "DevPlatform Studio",
        "category": "VISUAL SCHEMA-TO-UI RAPID STUDIO",
        "icon": "fa-layer-group",
        "bg_start": "#052238",
        "bg_end": "#094375",
        "accent": "#0ea5e9",
        "symbol": "🎨",
        "highlight": "Visual Canvas to ULSX & Uploop Prototyping",
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
      <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)"/>
      <stop offset="100%" stop-color="rgba(255, 255, 255, 0.03)"/>
    </linearGradient>
  </defs>

  <!-- Background Base -->
  <rect width="800" height="450" fill="url(#grad_{slug})"/>
  <rect width="800" height="450" fill="url(#pat_{slug})"/>

  <!-- Decorative Glowing Orb -->
  <circle cx="700" cy="120" r="180" fill="{data['accent']}" opacity="0.15" filter="blur(50px)"/>
  <circle cx="100" cy="380" r="140" fill="{data['accent']}" opacity="0.1" filter="blur(40px)"/>

  <!-- Top Category Eyebrow Pill -->
  <rect x="48" y="40" width="300" height="30" rx="15" fill="rgba(255, 255, 255, 0.08)" stroke="{data['accent']}" stroke-width="1.5"/>
  <text x="64" y="60" fill="{data['accent']}" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="12" font-weight="800" letter-spacing="1">{data['category']}</text>

  <!-- Product Title & Visual Symbol -->
  <text x="48" y="125" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="34" font-weight="900">{data['title']}</text>
  <text x="730" y="90" font-size="54" text-anchor="end">{data['symbol']}</text>

  <!-- Core Capability Hero Banner Card -->
  <rect x="48" y="160" width="704" height="150" rx="16" fill="url(#card_glass_{slug})" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.5"/>

  <!-- Accent Left Vertical Indicator -->
  <rect x="48" y="160" width="8" height="150" rx="4" fill="{data['accent']}"/>

  <!-- Highlight Statement -->
  <text x="80" y="210" fill="#f8fafc" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="20" font-weight="700">{data['highlight']}</text>

  <!-- Two Specification Badges Inside Card -->
  <g transform="translate(80, 240)">
    <!-- Pill 1 -->
    <rect x="0" y="0" width="220" height="42" rx="8" fill="rgba(0, 0, 0, 0.4)" stroke="{data['accent']}" stroke-width="1.5"/>
    <circle cx="20" cy="21" r="5" fill="{data['accent']}"/>
    <text x="36" y="26" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="13" font-weight="700">{data['pill1']}</text>

    <!-- Pill 2 -->
    <rect x="240" y="0" width="220" height="42" rx="8" fill="rgba(0, 0, 0, 0.4)" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1.5"/>
    <circle cx="260" cy="21" r="5" fill="#10b981"/>
    <text x="276" y="26" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="13" font-weight="700">{data['pill2']}</text>
  </g>

  <!-- Footer Verification & Standard Bar -->
  <g transform="translate(48, 350)">
    <rect width="704" height="54" rx="10" fill="rgba(0, 0, 0, 0.55)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>
    <circle cx="28" cy="27" r="6" fill="#10b981"/>
    <text x="46" y="32" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="14" font-weight="600">Deterministic Architecture &bull; <tspan fill="{data['accent']}">i2c Machine-Native Standard</tspan></text>
    <text x="680" y="32" fill="#94a3b8" font-family="monospace" font-size="13" font-weight="700" text-anchor="end">ADR-001 &bull; 100% PROVENANCE</text>
  </g>
</svg>
'''
    target_path = os.path.join(output_dir, f"{slug}.svg")
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"Generated bold high-contrast SVG card: {slug}.svg")

print(f"Generated all {len(products)} bold high-contrast visual architecture cards!")
