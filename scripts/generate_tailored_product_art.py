import os

output_dir = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\static\images\product-art"
os.makedirs(output_dir, exist_ok=True)

# Define tailored architectural SVG definitions for each component
art_definitions = {
    "unibi": {
        "title": "UniBi / UniPlatform",
        "subtitle": "Enterprise ERP & Risk Cockpit",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#0284c7",
        "nodes": [
            ("Org Cost Centers", "#38bdf8"),
            ("FractalDB Spacetime", "#10b981"),
            ("Jigsaw Approvals", "#8b5cf6"),
            ("Real-Time Margin Cockpit", "#0284c7")
        ],
        "metric": "Sub-10ms Executive Query Latency"
    },
    "uniqi": {
        "title": "UniQi Education Platform",
        "subtitle": "Adaptive Learning & Certification",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#0ea5e9",
        "nodes": [
            ("Learner Skill Graph", "#38bdf8"),
            ("Adaptive Curriculum", "#f59e0b"),
            ("Assessment Engine", "#10b981"),
            ("Cryptographic Badge", "#8b5cf6")
        ],
        "metric": "+40% Completion Rate with ZK Proofs"
    },
    "unifi": {
        "title": "UniFi FinTech Platform",
        "subtitle": "Automated Reconciliation & Multi-Sig Ledger",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#10b981",
        "nodes": [
            ("ISO 20022 Banking Feed", "#38bdf8"),
            ("Kitchen Matching", "#f59e0b"),
            ("Jigsaw Multi-Sig", "#8b5cf6"),
            ("Immutable Spacetime Ledger", "#10b981")
        ],
        "metric": "-60% Manual Reconciliation Hours"
    },
    "webbuilder": {
        "title": "WebBuilder (iWeb)",
        "subtitle": "Brand-Governed Edge Publishing",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#0284c7",
        "nodes": [
            ("Design Tokens", "#8b5cf6"),
            ("ULSX Composer", "#38bdf8"),
            ("A11y Validator", "#10b981"),
            ("Global Edge CDN", "#0284c7")
        ],
        "metric": "95+ PageSpeed Core Web Vitals"
    },
    "tion": {
        "title": "Tion Revenue Operations",
        "subtitle": "Marketing Automation & CRM Intelligence",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#f59e0b",
        "nodes": [
            ("Lead Ingestion", "#38bdf8"),
            ("HyperAI Scoring", "#f59e0b"),
            ("Journey Triggers", "#8b5cf6"),
            ("Deal Pipeline", "#10b981")
        ],
        "metric": "+45% Sales Qualified Conversion"
    },
    "osee": {
        "title": "OSee Market Perception",
        "subtitle": "Social Listening & Crisis Radar",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#8b5cf6",
        "nodes": [
            ("Multilingual Stream", "#38bdf8"),
            ("ViAI NLP Semantic", "#8b5cf6"),
            ("Sentiment Heatmap", "#f59e0b"),
            ("60s Crisis Alert", "#ef4444")
        ],
        "metric": "30+ Languages Real-Time Sentiment"
    },
    "ierp": {
        "title": "iERP Supply Chain",
        "subtitle": "Inventory & Procurement Ledger",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#0284c7",
        "nodes": [
            ("Warehouse Inventory", "#38bdf8"),
            ("Vendor Contracts", "#8b5cf6"),
            ("Procurement Flow", "#f59e0b"),
            ("FractalDB Ledger", "#10b981")
        ],
        "metric": "Multi-Entity Composable Ledger"
    },
    "ireport": {
        "title": "iReport (aiDataExpert)",
        "subtitle": "Real-Time Event Stream Analytics",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#0ea5e9",
        "nodes": [
            ("Kitchen Event Bus", "#38bdf8"),
            ("Stream Aggregation", "#f59e0b"),
            ("KPI Metric Engine", "#8b5cf6"),
            ("Executive Dashboards", "#10b981")
        ],
        "metric": "Continuous Sub-Second Reporting"
    },
    "automotiveeco": {
        "title": "AutomotiveEco Connected OS",
        "subtitle": "Vehicle Telematics & Fleet Routing",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#10b981",
        "nodes": [
            ("CAN Bus Telemetry", "#38bdf8"),
            ("Battery Health Model", "#f59e0b"),
            ("Edge Diagnostics", "#8b5cf6"),
            ("Predictive Fleet Dispatch", "#10b981")
        ],
        "metric": "Real-Time Edge Vehicle Telemetry"
    },
    "logop": {
        "title": "LogOp Logistics Router",
        "subtitle": "Multi-Modal Route Optimization",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#0284c7",
        "nodes": [
            ("Freight Orders", "#38bdf8"),
            ("HyperGraph Spatial", "#8b5cf6"),
            ("Traffic Simulation", "#f59e0b"),
            ("Turn-by-Turn GPS", "#10b981")
        ],
        "metric": "-22% Fuel Cost via Dynamic Routing"
    },
    "cyop": {
        "title": "CyOp Threat Defense",
        "subtitle": "Continuous AST & DevSecOps Scanning",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#ef4444",
        "nodes": [
            ("Codebase AST", "#38bdf8"),
            ("Threat Graph Scanner", "#ef4444"),
            ("Policy Membrane", "#8b5cf6"),
            ("Zero-Trust Guard", "#10b981")
        ],
        "metric": "Real-Time CVE & Drift Detection"
    },
    "defikit": {
        "title": "DefiKit Settlements",
        "subtitle": "Liquidity Routing & Smart Contracts",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#8b5cf6",
        "nodes": [
            ("Settlement Intent", "#38bdf8"),
            ("Liquidity Mesh", "#f59e0b"),
            ("Smart Contract", "#8b5cf6"),
            ("Jigsaw Verified Receipt", "#10b981")
        ],
        "metric": "Cryptographic Zero-Knowledge Settlement"
    },
    "myestate": {
        "title": "MyEstate Smart Real Estate",
        "subtitle": "Building IoT & 3D Spatial Twin",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#10b981",
        "nodes": [
            ("IoT Sensors / HVAC", "#38bdf8"),
            ("Occupancy Telemetry", "#f59e0b"),
            ("Tenant Work Orders", "#8b5cf6"),
            ("3D Digital Twin", "#10b981")
        ],
        "metric": "-24% Commercial Building Energy"
    },
    "i2chomenet": {
        "title": "i2cHomenet Smart Home",
        "subtitle": "Private IoT & Edge Voice Cluster",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#0ea5e9",
        "nodes": [
            ("Home IoT Mesh", "#38bdf8"),
            ("Local Voice SLM", "#8b5cf6"),
            ("BACnet / MQTT Hub", "#f59e0b"),
            ("Zero-Cloud Privacy", "#10b981")
        ],
        "metric": "100% Local Private Edge Execution"
    },
    "miniplatform": {
        "title": "MiniPlatform Knowledge Network",
        "subtitle": "Semantic Search & HyperGraph Wiki",
        "tag": "Layer 7: Vertical Solutions",
        "accent": "#0284c7",
        "nodes": [
            ("Knowledge Entities", "#38bdf8"),
            ("Semantic Parser", "#8b5cf6"),
            ("HyperGraph Search", "#f59e0b"),
            ("Collaborative Wiki", "#10b981")
        ],
        "metric": "Distributed Community Knowledge Mesh"
    },

    # Core Substrates (Layer 6 & 5)
    "kitchen": {
        "title": "Kitchen Generative Middleware",
        "subtitle": "Brigade de Cuisine & Soup Views",
        "tag": "Layer 5: Trust & Routing",
        "accent": "#f59e0b",
        "nodes": [
            ("Maitre D' Gateway", "#38bdf8"),
            ("Recipe Planner", "#f59e0b"),
            ("Line Cook WASM", "#8b5cf6"),
            ("Dynamic Soup View", "#10b981")
        ],
        "metric": "< 8ms Compiled Query Delivery"
    },
    "fractaldb": {
        "title": "FractalDB Spacetime",
        "subtitle": "Lamport Clocks & Merkle State DAG",
        "tag": "Layer 6: Persistence Core",
        "accent": "#0284c7",
        "nodes": [
            ("FTime Coordinates", "#38bdf8"),
            ("Merkle Tree State", "#8b5cf6"),
            ("Multi-Reality Branch", "#f59e0b"),
            ("BLAKE3 Root Proof", "#10b981")
        ],
        "metric": "250k+ writes/sec Immutable DAG"
    },
    "hypergraph": {
        "title": "HyperGraph Schema Engine",
        "subtitle": "Multidimensional N-ary Graph",
        "tag": "Layer 6: Persistence Core",
        "accent": "#8b5cf6",
        "nodes": [
            ("N-ary Vertices", "#38bdf8"),
            ("HyperEdge Context", "#8b5cf6"),
            ("GPU Tensor Buffer", "#f59e0b"),
            ("O(1) Graph Traversal", "#10b981")
        ],
        "metric": "GPU-Accelerated Multidimensional Graphs"
    },
    "fluid": {
        "title": "Fluid CAS Block Freezer",
        "subtitle": "Content-Defined Chunking & Deduplication",
        "tag": "Layer 6: Persistence Core",
        "accent": "#0ea5e9",
        "nodes": [
            ("Byte Stream", "#38bdf8"),
            ("FastCDC Chunking", "#f59e0b"),
            ("BLAKE3 Hasher", "#8b5cf6"),
            ("Content Address (kid://)", "#10b981")
        ],
        "metric": "O(1) Global CAS Deduplication"
    },

    # AI Engines & Execution Runtimes (Layer 3, 2, 1)
    "minhai": {
        "title": "MinhAI Cognitive Agent",
        "subtitle": "Local Edge SLMs in <2GB VRAM",
        "tag": "Layer 3: AI & Inference",
        "accent": "#38bdf8",
        "nodes": [
            ("Developer Intent", "#38bdf8"),
            ("EBNF Grammar", "#8b5cf6"),
            ("GGUF 4-bit Tensor", "#f59e0b"),
            ("LongCell Sandbox Test", "#10b981")
        ],
        "metric": "Zero-Hallucination Local Reasoning"
    },
    "hyperai": {
        "title": "HyperAI Neural Core",
        "subtitle": "Tensor Acceleration & GNN Inference",
        "tag": "Layer 3: AI & Inference",
        "accent": "#8b5cf6",
        "nodes": [
            ("Multimodal Tensor", "#38bdf8"),
            ("N-ary Graph Kernels", "#8b5cf6"),
            ("Zero-Copy Shared Mem", "#f59e0b"),
            ("High-Throughput Node", "#10b981")
        ],
        "metric": "Cluster GPU & NPU Tensor Routing"
    },
    "viai": {
        "title": "ViAI Enterprise Copilot",
        "subtitle": "Multimodal Speech & Document OCR",
        "tag": "Layer 3: AI & Inference",
        "accent": "#0284c7",
        "nodes": [
            ("Voice / Audio Wave", "#38bdf8"),
            ("Document OCR Stream", "#f59e0b"),
            ("ViVoice Perception", "#8b5cf6"),
            ("Structured JSON Output", "#10b981")
        ],
        "metric": "Enterprise Multimodal Grounding"
    },
    "garden": {
        "title": "Garden Contract Registry",
        "subtitle": "Verified Capability Packages",
        "tag": "Layer 3: AI & Inference",
        "accent": "#10b981",
        "nodes": [
            ("Contract Manifest", "#38bdf8"),
            ("Capability Proof", "#8b5cf6"),
            ("Fluid CAS Storage", "#f59e0b"),
            ("80-90% Instant Reuse", "#10b981")
        ],
        "metric": "Pre-Tested Sovereign Package Hub"
    },
    "transformerhub": {
        "title": "TransformerHub Node Engine",
        "subtitle": "Dynamic ETL & Visual Pipeline",
        "tag": "Layer 3: AI & Inference",
        "accent": "#f59e0b",
        "nodes": [
            ("Data Source Webhook", "#38bdf8"),
            ("Dynamic Node Graph", "#f59e0b"),
            ("ETL Transformer", "#8b5cf6"),
            ("Kitchen Streaming Pass", "#10b981")
        ],
        "metric": "No-Code AI-First Workflow Mesh"
    },
    "long": {
        "title": "Long Runtime (Dragon VM)",
        "subtitle": "Polymorphic WASM Sandbox",
        "tag": "Layer 2: App Runtime",
        "accent": "#8b5cf6",
        "nodes": [
            ("Polyglot Bytecode", "#38bdf8"),
            ("LongCell Boundary", "#8b5cf6"),
            ("LongGuard Membrane", "#f59e0b"),
            ("Deterministic Exec", "#10b981")
        ],
        "metric": "Sub-Millisecond WASM Isolation"
    },
    "rsts": {
        "title": "RsTs Effect Language",
        "subtitle": "TypeScript Semantics to Long IR",
        "tag": "Layer 2: App Runtime",
        "accent": "#ef4444",
        "nodes": [
            ("TypeScript Code", "#38bdf8"),
            ("RsTs Type Checker", "#ef4444"),
            ("Long IR Lowering", "#8b5cf6"),
            ("Zero-GC Native Run", "#10b981")
        ],
        "metric": "Effect-Aware Statically Typed Compiler"
    },
    "fly": {
        "title": "Fly (Fluidy) Release Engine",
        "subtitle": "SpaceTime-Aware Dataflow & Pipelines",
        "tag": "Layer 2: App Runtime",
        "accent": "#0ea5e9",
        "nodes": [
            ("Fly Grammar DSL", "#38bdf8"),
            ("Dataflow Execution", "#0ea5e9"),
            ("Reality Sync Gate", "#8b5cf6"),
            ("O(1) Atomic Release", "#10b981")
        ],
        "metric": "Zero-Downtime Pipeline Orchestration"
    },
    "uploop": {
        "title": "Uploop Web UI Engine",
        "subtitle": "6KB ESM-Native Reactive State Buses",
        "tag": "Layer 1: Client Interfaces",
        "accent": "#0284c7",
        "nodes": [
            ("6KB ESM Import", "#38bdf8"),
            ("Hot/Cold State Bus", "#f59e0b"),
            ("Vibe WebComponents", "#8b5cf6"),
            ("Zero VDOM Overhead", "#10b981")
        ],
        "metric": "Surgical DOM Reactivity in 6KB"
    },
    "lac": {
        "title": "Lac Desktop GUI Renderer",
        "subtitle": "Skia Graphics Pipeline Engine",
        "tag": "Layer 1: Client Interfaces",
        "accent": "#10b981",
        "nodes": [
            ("Declarative UI Tree", "#38bdf8"),
            ("Skia 2D Pipeline", "#10b981"),
            ("GPU Shader Pass", "#8b5cf6"),
            ("120 FPS Native Window", "#0284c7")
        ],
        "metric": "Cross-Platform High-Performance GUI"
    },

    # Trust, Governance & Developer Toolchains (Layer 5 & 4)
    "jigsaw": {
        "title": "Jigsaw ADR-001 Verifier",
        "subtitle": "Cryptographic Policy & Proof Membrane",
        "tag": "Layer 5: Trust & Routing",
        "accent": "#8b5cf6",
        "nodes": [
            ("Signed Ticket Intent", "#38bdf8"),
            ("Spike Claim Matcher", "#8b5cf6"),
            ("Canonical CBOR Hash", "#f59e0b"),
            ("Verified Receipt", "#10b981")
        ],
        "metric": "O(1) Cryptographic Evidence Proofs"
    },
    "rings": {
        "title": "Rings P2P DHT Mesh",
        "subtitle": "Cryptographic Peer Transport Mesh",
        "tag": "Layer 5: Trust & Routing",
        "accent": "#0284c7",
        "nodes": [
            ("Trust-Ring Scopes", "#38bdf8"),
            ("P2P DHT Discovery", "#0284c7"),
            ("Jigsaw Handshake", "#8b5cf6"),
            ("Direct QUIC Tunnel", "#10b981")
        ],
        "metric": "Zero Single Point of Failure P2P Mesh"
    },
    "i2c-forge": {
        "title": "i2c-Forge Synthesis Compiler",
        "subtitle": "Intent-to-Code Autonomous Generator",
        "tag": "Layer 4: Dev & Collab",
        "accent": "#f59e0b",
        "nodes": [
            ("ULSX Intent Spec", "#38bdf8"),
            ("Garden Component Match", "#f59e0b"),
            ("AST Code Synthesizer", "#8b5cf6"),
            ("Locked Build Artifact", "#10b981")
        ],
        "metric": "80-90% Autonomous Component Assembly"
    },
    "quang": {
        "title": "Quang Enterprise Workspace",
        "subtitle": "Multi-Repo Git Delta Sync & Hub",
        "tag": "Layer 4: Dev & Collab",
        "accent": "#0284c7",
        "nodes": [
            ("Developer Workspace", "#38bdf8"),
            ("QuangHub Protocol", "#0284c7"),
            ("Multi-Repo Intent Sync", "#8b5cf6"),
            ("Immutable Commit", "#10b981")
        ],
        "metric": "Enterprise Collaboration & Git Sync"
    },
    "shai": {
        "title": "Shai IDE & MCP Gateway",
        "subtitle": "Codebase Property Graph (CPG) Indexer",
        "tag": "Layer 4: Dev & Collab",
        "accent": "#38bdf8",
        "nodes": [
            ("IDE / Editor Client", "#38bdf8"),
            ("Model Context Protocol", "#0ea5e9"),
            ("Tree-Sitter CPG Index", "#8b5cf6"),
            ("MinhAI Edge Pipe", "#10b981")
        ],
        "metric": "100k lines/s Precise AST CPG Indexing"
    },
    "i2collab": {
        "title": "i2Collab Multi-Agent Swarm",
        "subtitle": "Autonomous Task Triage & Pair Swarm",
        "tag": "Layer 4: Dev & Collab",
        "accent": "#10b981",
        "nodes": [
            ("Task Envelope", "#38bdf8"),
            ("Role-Lens Dispatch", "#f59e0b"),
            ("MinhAI Swarm Pairing", "#8b5cf6"),
            ("Signed Jigsaw Merge", "#10b981")
        ],
        "metric": "-70% PR Cycle Time via Agent Swarms"
    },
    "devplatform": {
        "title": "DevPlatform Rapid Studio",
        "subtitle": "Visual Schema-to-UI Synthesizer",
        "tag": "Layer 4: Dev & Collab",
        "accent": "#0ea5e9",
        "nodes": [
            ("Visual Schema Canvas", "#38bdf8"),
            ("JDL / ULSX Export", "#0ea5e9"),
            ("Uploop Component Map", "#8b5cf6"),
            ("Live LongCell Sandbox", "#10b981")
        ],
        "metric": "Zero-Lockin Schema-to-UI Prototyping"
    }
}

for slug, data in art_definitions.items():
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
  <defs>
    <linearGradient id="bg_{slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080f1e"/>
      <stop offset="50%" stop-color="#0f1d36"/>
      <stop offset="100%" stop-color="#070c18"/>
    </linearGradient>
    <linearGradient id="accent_grad_{slug}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="{data['accent']}"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="card_grad_{slug}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255, 255, 255, 0.08)"/>
      <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)"/>
    </linearGradient>
    <pattern id="grid_{slug}" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="800" height="450" fill="url(#bg_{slug})"/>
  <rect width="800" height="450" fill="url(#grid_{slug})"/>

  <!-- Decorative Circuit Wave Lines -->
  <path d="M 0 380 Q 200 320, 400 360 T 800 340" fill="none" stroke="{data['accent']}" stroke-width="1.5" opacity="0.3"/>
  <path d="M 0 400 Q 250 350, 500 390 T 800 370" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.2"/>

  <!-- Header Category Badge & Title -->
  <rect x="40" y="32" width="200" height="24" rx="12" fill="rgba(2, 132, 199, 0.15)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1"/>
  <text x="52" y="48" fill="#38bdf8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="700" letter-spacing="0.5">{data['tag'].upper()}</text>

  <text x="40" y="90" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="24" font-weight="800">{data['title']}</text>
  <text x="40" y="115" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="500">{data['subtitle']}</text>

  <!-- Central Architecture Flow Cards (4 Sequential Pipeline Nodes) -->
  <g transform="translate(40, 150)">
    <!-- Connecting Horizontal Bus Line -->
    <line x1="80" y1="60" x2="640" y2="60" stroke="rgba(255, 255, 255, 0.15)" stroke-width="2" stroke-dasharray="4 4"/>
    <line x1="80" y1="60" x2="640" y2="60" stroke="{data['accent']}" stroke-width="2" stroke-dasharray="20 180" opacity="0.8"/>

    <!-- Node 1 -->
    <rect x="0" y="15" width="160" height="90" rx="10" fill="url(#card_grad_{slug})" stroke="{data['nodes'][0][1]}" stroke-width="1.5"/>
    <circle cx="24" cy="40" r="10" fill="rgba(56, 189, 248, 0.2)" stroke="{data['nodes'][0][1]}" stroke-width="1.5"/>
    <text x="24" y="44" fill="#ffffff" font-family="monospace" font-size="10" font-weight="700" text-anchor="middle">01</text>
    <text x="24" y="75" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="11" font-weight="700">{data['nodes'][0][0]}</text>
    <text x="24" y="92" fill="#64748b" font-family="monospace" font-size="9">INGEST / SOURCE</text>

    <!-- Node 2 -->
    <rect x="186" y="15" width="160" height="90" rx="10" fill="url(#card_grad_{slug})" stroke="{data['nodes'][1][1]}" stroke-width="1.5"/>
    <circle cx="210" cy="40" r="10" fill="rgba(245, 158, 11, 0.2)" stroke="{data['nodes'][1][1]}" stroke-width="1.5"/>
    <text x="210" y="44" fill="#ffffff" font-family="monospace" font-size="10" font-weight="700" text-anchor="middle">02</text>
    <text x="210" y="75" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="11" font-weight="700">{data['nodes'][1][0]}</text>
    <text x="210" y="92" fill="#64748b" font-family="monospace" font-size="9">PROCESS / TRANSFORM</text>

    <!-- Node 3 -->
    <rect x="372" y="15" width="160" height="90" rx="10" fill="url(#card_grad_{slug})" stroke="{data['nodes'][2][1]}" stroke-width="1.5"/>
    <circle cx="396" cy="40" r="10" fill="rgba(139, 92, 246, 0.2)" stroke="{data['nodes'][2][1]}" stroke-width="1.5"/>
    <text x="396" y="44" fill="#ffffff" font-family="monospace" font-size="10" font-weight="700" text-anchor="middle">03</text>
    <text x="396" y="75" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="11" font-weight="700">{data['nodes'][2][0]}</text>
    <text x="396" y="92" fill="#64748b" font-family="monospace" font-size="9">VERIFY &amp; SECURE</text>

    <!-- Node 4 -->
    <rect x="558" y="15" width="160" height="90" rx="10" fill="url(#card_grad_{slug})" stroke="{data['nodes'][3][1]}" stroke-width="1.5"/>
    <circle cx="582" cy="40" r="10" fill="rgba(16, 185, 129, 0.2)" stroke="{data['nodes'][3][1]}" stroke-width="1.5"/>
    <text x="582" y="44" fill="#ffffff" font-family="monospace" font-size="10" font-weight="700" text-anchor="middle">04</text>
    <text x="582" y="75" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="11" font-weight="700">{data['nodes'][3][0]}</text>
    <text x="582" y="92" fill="#64748b" font-family="monospace" font-size="9">COMMIT / RUNTIME</text>
  </g>

  <!-- Footer Verification & SLA Metric Bar -->
  <rect x="40" y="380" width="720" height="42" rx="8" fill="rgba(0, 0, 0, 0.4)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>
  <circle cx="60" cy="401" r="5" fill="#10b981"/>
  <text x="74" y="405" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="12" font-weight="600">Enterprise Verified Architecture &bull; <tspan fill="#38bdf8">{data['metric']}</tspan></text>
  <text x="740" y="405" fill="#64748b" font-family="monospace" font-size="11" font-weight="600" text-anchor="end">ADR-001 &bull; i2c Standard</text>
</svg>
'''
    target_path = os.path.join(output_dir, f"{slug}.svg")
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"Generated tailored architecture card: {slug}.svg")

print(f"Successfully generated all {len(art_definitions)} tailored 16:9 visual architecture cards in static/images/product-art/")
