import { getProductImage } from "./data.product-images";

export interface EnterpriseService {
  title: string;
  slug: string;
  category: "apps" | "substrates" | "runtimes" | "tools";
  categoryLabel: string;
  layer: number;
  layerName: string;
  description: string;
  tech: string;
  status: "Active" | "Nextgen" | "Genesis";
  p: number;
  logoUrl: string;
  heroImageUrl: string;
}

export const servicesData: { services: EnterpriseService[] } = {
  services: [
    // ══════════════════════════════════════════════════════════════
    // LAYER 7: ENTERPRISE PLATFORMS & VERTICAL SOLUTIONS (15 Apps)
    // ══════════════════════════════════════════════════════════════
    {
      title: "UniBi / UniPlatform",
      slug: "unibi",
      category: "apps",
      categoryLabel: "Enterprise Solutions",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Next-gen Enterprise ERP, BI & continuous financial governance with real-time operational risk radar.",
      tech: "Enterprise Ready",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/unibi.svg",
      heroImageUrl: getProductImage("unibi")
    },
    {
      title: "UniQi",
      slug: "uniqi",
      category: "apps",
      categoryLabel: "Education Platform",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Adaptive education intelligence, curriculum workflows & cryptographic outcome certification.",
      tech: "Adaptive Learning Core",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/uniqi.svg",
      heroImageUrl: getProductImage("uniqi")
    },
    {
      title: "UniFi",
      slug: "unifi",
      category: "apps",
      categoryLabel: "FinTech Platform",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Trust-centered finance platform, automated reconciliation & immutable Jigsaw-verified audit trails.",
      tech: "Immutable Ledger SLA",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/unifi.svg",
      heroImageUrl: getProductImage("unifi")
    },
    {
      title: "WebBuilder (iWeb)",
      slug: "webbuilder",
      category: "apps",
      categoryLabel: "Publishing & Growth",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Rapid conversion-focused publishing system with central design token brand governance.",
      tech: "Global Edge CDN",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/webbuilder.svg",
      heroImageUrl: getProductImage("webbuilder")
    },
    {
      title: "Tion",
      slug: "tion",
      category: "apps",
      categoryLabel: "Marketing & CRM",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Smart revenue operations, marketing campaign automation & HyperAI predictive lead intelligence.",
      tech: "Predictive AI Scoring",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/tion.svg",
      heroImageUrl: getProductImage("tion")
    },
    {
      title: "OSee",
      slug: "osee",
      category: "apps",
      categoryLabel: "Market Intelligence",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Social listening, multilingual brand perception & real-time market crisis warning command hub.",
      tech: "3D Sentiment Radar",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/osee.svg",
      heroImageUrl: getProductImage("osee")
    },
    {
      title: "iERP",
      slug: "ierp",
      category: "apps",
      categoryLabel: "Supply Chain & Logistics",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Composable AI-orchestrated supply chain, warehouse inventory & multi-entity procurement ledger.",
      tech: "Autonomous AGV Routing",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/ierp.svg",
      heroImageUrl: getProductImage("ierp")
    },
    {
      title: "iReport (aiDataExpert)",
      slug: "ireport",
      category: "apps",
      categoryLabel: "Analytics & Reporting",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Real-time intelligent reporting and continuous operational analytics synthesizing Kitchen event streams.",
      tech: "Streaming Analytics Core",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/ireport.svg",
      heroImageUrl: getProductImage("ireport")
    },
    {
      title: "AutomotiveEco",
      slug: "automotiveeco",
      category: "apps",
      categoryLabel: "Connected Mobility",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Connected vehicle operating system, battery health telemetry & predictive fleet routing.",
      tech: "CAN Bus Edge Telemetry",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/automotiveeco.svg",
      heroImageUrl: getProductImage("automotiveeco")
    },
    {
      title: "LogOp",
      slug: "logop",
      category: "apps",
      categoryLabel: "Logistics Router",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Multi-modal logistics route optimization, turn-by-turn driver navigation & fleet coordination.",
      tech: "GIS Topography Engine",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/logop.svg",
      heroImageUrl: getProductImage("logop")
    },
    {
      title: "CyOp",
      slug: "cyop",
      category: "apps",
      categoryLabel: "DevSecOps & Threat Defense",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Continuous threat graph scanning, policy enforcement & zero-trust runtime protection membrane.",
      tech: "Continuous AST Scan",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/cyop.svg",
      heroImageUrl: getProductImage("cyop")
    },
    {
      title: "DefiKit",
      slug: "defikit",
      category: "apps",
      categoryLabel: "Decentralized Settlements",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Decentralized settlement rails, liquidity routing & Jigsaw-verified smart financial contracts.",
      tech: "ZK Proof Settlements",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/defikit.svg",
      heroImageUrl: getProductImage("defikit")
    },
    {
      title: "MyEstate",
      slug: "myestate",
      category: "apps",
      categoryLabel: "Smart Real Estate IoT",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Smart building facility management, IoT HVAC telemetry & 3D spatial occupancy digital twin.",
      tech: "3D Facility Twin",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/myestate.svg",
      heroImageUrl: getProductImage("myestate")
    },
    {
      title: "i2cHomenet",
      slug: "i2chomenet",
      category: "apps",
      categoryLabel: "Smart Home IoT",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Private smart home mesh, IoT telemetry & voice-controlled edge automation cluster.",
      tech: "Zero-Cloud Privacy Mesh",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/i2chomenet.svg",
      heroImageUrl: getProductImage("i2chomenet")
    },
    {
      title: "MiniPlatform",
      slug: "miniplatform",
      category: "apps",
      categoryLabel: "Knowledge Networks",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Knowledge network platform, semantic search & distributed community hypergraph workspace.",
      tech: "Semantic HyperGraph",
      status: "Genesis",
      p: 2,
      logoUrl: "/images/icons/miniplatform.svg",
      heroImageUrl: getProductImage("miniplatform")
    },

    // ══════════════════════════════════════════════════════════════
    // LAYER 6 & 5: CORE DATA SUBSTRATES & MIDDLEWARE (4 Systems)
    // ══════════════════════════════════════════════════════════════
    {
      title: "Kitchen",
      slug: "kitchen",
      category: "substrates",
      categoryLabel: "Generative Middleware",
      layer: 5,
      layerName: "Trust & Routing",
      description: "Generative data middleware & virtualization engine compiling dynamic views in <8ms.",
      tech: "<8ms Dynamic Views",
      status: "Nextgen",
      p: 1,
      logoUrl: "/images/icons/kitchen.svg",
      heroImageUrl: getProductImage("kitchen")
    },
    {
      title: "FractalDB",
      slug: "fractaldb",
      category: "substrates",
      categoryLabel: "Persistence Core",
      layer: 6,
      layerName: "Persistence Core",
      description: "SpaceTime HyperGraph DB with Merkle tree state & Lamport logical clock branchable realities.",
      tech: "Branchable Spacetime",
      status: "Nextgen",
      p: 1,
      logoUrl: "/images/icons/fractaldb.svg",
      heroImageUrl: getProductImage("fractaldb")
    },
    {
      title: "HyperGraph",
      slug: "hypergraph",
      category: "substrates",
      categoryLabel: "Persistence Core",
      layer: 6,
      layerName: "Persistence Core",
      description: "High-performance multidimensional graph format & GPU-accelerated engine dictionary.",
      tech: "WGPU Tensor Matrices",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/hypergraph.svg",
      heroImageUrl: getProductImage("hypergraph")
    },
    {
      title: "Fluid",
      slug: "fluid",
      category: "substrates",
      categoryLabel: "Persistence Core",
      layer: 6,
      layerName: "Persistence Core",
      description: "Fluid is a next-generation repository and resource substrate for AI-first software work. It keeps a Git-compatible mode for ordinary repositories while growing toward Fluid-native particles, graph-shaped history, structured binary deltas, S3-compatible object storage, and server-backed collaboration.",
      tech: "O(1) CAS Storage",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/fluid.svg",
      heroImageUrl: getProductImage("fluid")
    },

    // ══════════════════════════════════════════════════════════════
    // LAYER 3, 2, 1: AI ENGINES & EXECUTION RUNTIMES (10 Systems)
    // ══════════════════════════════════════════════════════════════
    {
      title: "MinhAI",
      slug: "minhai",
      category: "runtimes",
      categoryLabel: "AI & Inference",
      layer: 3,
      layerName: "AI & Inference",
      description: "Local-first edge reasoning agent running quantized models in <2GB VRAM under strict grammar constraints.",
      tech: "100% Offline Edge",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/minhai.svg",
      heroImageUrl: getProductImage("minhai")
    },
    {
      title: "HyperAI",
      slug: "hyperai",
      category: "runtimes",
      categoryLabel: "AI & Inference",
      layer: 3,
      layerName: "AI & Inference",
      description: "High-throughput tensor core and graph neural inference management engine.",
      tech: "High-Throughput Tensor Core",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/hyperai.svg",
      heroImageUrl: getProductImage("hyperai")
    },
    {
      title: "ViAI",
      slug: "viai",
      category: "runtimes",
      categoryLabel: "AI & Inference",
      layer: 3,
      layerName: "AI & Inference",
      description: "Enterprise multimodal AI copilot, speech transcription & intelligent document OCR.",
      tech: "Multimodal Voice & OCR",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/viai.svg",
      heroImageUrl: getProductImage("viai")
    },
    {
      title: "Garden",
      slug: "garden",
      category: "runtimes",
      categoryLabel: "AI & Inference",
      layer: 3,
      layerName: "AI & Inference",
      description: "Capability-declared model & contract registry with signed Jigsaw execution receipts.",
      tech: "Signed Jigsaw Registry",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/garden.svg",
      heroImageUrl: getProductImage("garden")
    },
    {
      title: "TransformerHub",
      slug: "transformerhub",
      category: "runtimes",
      categoryLabel: "AI & Inference",
      layer: 3,
      layerName: "AI & Inference",
      description: "No-code AI-first workflow, dynamic node ecosystem and ETL transformation platform.",
      tech: "Dynamic Node ETL",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/transformerhub.svg",
      heroImageUrl: getProductImage("transformerhub")
    },
    {
      title: "Long Runtime",
      slug: "long",
      category: "runtimes",
      categoryLabel: "App Runtime",
      layer: 2,
      layerName: "App Runtime",
      description: "Dragon VM polyglot sandbox with LongCell isolation & LongGuard cryptographic security membrane.",
      tech: "Dragon VM Sandbox",
      status: "Nextgen",
      p: 1,
      logoUrl: "/images/icons/long.svg",
      heroImageUrl: getProductImage("long")
    },
    {
      title: "RsTs",
      slug: "rsts",
      category: "runtimes",
      categoryLabel: "App Runtime",
      layer: 2,
      layerName: "App Runtime",
      description: "Effect-aware typed language compiling TypeScript semantics to Long IR with zero GC pauses.",
      tech: "Zero-GC Effect Typing",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/rsts.svg",
      heroImageUrl: getProductImage("rsts")
    },
    {
      title: "Fly (Fluidy)",
      slug: "fly",
      category: "runtimes",
      categoryLabel: "App Runtime",
      layer: 2,
      layerName: "App Runtime",
      description: "SpaceTime-aware dataflow, pipeline orchestration and zero-downtime atomic release management.",
      tech: "Zero-Downtime Dataflow",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/fly.svg",
      heroImageUrl: getProductImage("fly")
    },
    {
      title: "Uploop",
      slug: "uploop",
      category: "runtimes",
      categoryLabel: "Client Interfaces",
      layer: 1,
      layerName: "Client Interfaces",
      description: "6KB ESM-native Web UI framework with Hot/Cold/Transient reactive state buses.",
      tech: "6KB ESM Reactive Bus",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/uploop.svg",
      heroImageUrl: getProductImage("uploop")
    },
    {
      title: "Lac",
      slug: "lac",
      category: "runtimes",
      categoryLabel: "Client Interfaces",
      layer: 1,
      layerName: "Client Interfaces",
      description: "High-performance native cross-platform desktop UI renderer via Skia graphics pipeline.",
      tech: "Skia 120FPS Native",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/lac.svg",
      heroImageUrl: getProductImage("lac")
    },

    // ══════════════════════════════════════════════════════════════
    // LAYER 5 & 4: TRUST, GOVERNANCE & DEVELOPER TOOLCHAINS (7 Systems)
    // ══════════════════════════════════════════════════════════════
    {
      title: "Jigsaw",
      slug: "jigsaw",
      category: "tools",
      categoryLabel: "Trust & Verification",
      layer: 5,
      layerName: "Trust & Routing",
      description: "Cryptographic evidence & ADR-001 CBOR zero-knowledge policy verifier.",
      tech: "ADR-001 CBOR Verifier",
      status: "Nextgen",
      p: 1,
      logoUrl: "/images/icons/jigsaw.svg",
      heroImageUrl: getProductImage("jigsaw")
    },
    {
      title: "Rings",
      slug: "rings",
      category: "tools",
      categoryLabel: "Trust & Routing",
      layer: 5,
      layerName: "Trust & Routing",
      description: "Decentralized P2P DHT trust-ring mesh network and secure cryptographic transport.",
      tech: "P2P DHT Trust Ring",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/rings.svg",
      heroImageUrl: getProductImage("rings")
    },
    {
      title: "i2c-Forge",
      slug: "i2c-forge",
      category: "tools",
      categoryLabel: "Dev & Collab",
      layer: 4,
      layerName: "Dev & Collab",
      description: "Intent-to-code synthesis compiler and autonomous project generator with locked receipts.",
      tech: "Intent Synthesis Core",
      status: "Nextgen",
      p: 1,
      logoUrl: "/images/icons/i2c-forge.svg",
      heroImageUrl: getProductImage("i2c-forge")
    },
    {
      title: "Quang",
      slug: "quang",
      category: "tools",
      categoryLabel: "Dev & Collab",
      layer: 4,
      layerName: "Dev & Collab",
      description: "Enterprise collaboration workspace, repository sync & intent governance hub.",
      tech: "Enterprise Intent Sync",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/quang.svg",
      heroImageUrl: getProductImage("quang")
    },
    {
      title: "Shai",
      slug: "shai",
      category: "tools",
      categoryLabel: "Dev & Collab",
      layer: 4,
      layerName: "Dev & Collab",
      description: "Developer IDE bridge, codebase property graph (CPG) indexer & MCP gateway.",
      tech: "CPG Indexer & MCP Gateway",
      status: "Nextgen",
      p: 1,
      logoUrl: "/images/icons/shai.svg",
      heroImageUrl: getProductImage("shai")
    },
    {
      title: "i2Collab",
      slug: "i2collab",
      category: "tools",
      categoryLabel: "Dev & Collab",
      layer: 4,
      layerName: "Dev & Collab",
      description: "Multi-agent pairing, automated task triage & collaborative authoring swarm.",
      tech: "Multi-Agent Swarm",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/i2collab.svg",
      heroImageUrl: getProductImage("i2collab")
    },
    {
      title: "DevPlatform",
      slug: "devplatform",
      category: "tools",
      categoryLabel: "Dev & Collab",
      layer: 4,
      layerName: "Dev & Collab",
      description: "Visual application builder and schema-to-UI rapid prototyping platform.",
      tech: "Schema-to-UI Engine",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/devplatform.svg",
      heroImageUrl: getProductImage("devplatform")
    }
  ]
};

export default servicesData;
