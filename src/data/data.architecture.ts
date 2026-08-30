export interface ArchitectureLayer {
  id: string;
  level: number;
  name: string;
  badge: string;
  tagline: string;
  color: string;
  description: string;
  components: {
    name: string;
    role: string;
    tech: string;
    status: string;
    description: string;
    slug?: string;
  }[];
}

export const CLIENT_LOGOS = [
  { name: "AWS Cloud", logo: "/images/clients/aws.svg" },
  { name: "Google Cloud", logo: "/images/clients/google.svg" },
  { name: "Atlassian", logo: "/images/clients/atlassian.svg" },
  { name: "EVN Group", logo: "/images/clients/evn.svg" },
  { name: "Viettel", logo: "/images/clients/viettel.svg" },
  { name: "VNPT", logo: "/images/clients/vnpt.svg" },
  { name: "UrBox", logo: "/images/clients/urbox.svg" }
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: "l1",
    level: 1,
    name: "Client Interfaces",
    badge: "Layer 1",
    tagline: "Ultra-lightweight Vibe & native surfaces",
    color: "#ff5e7e",
    description: "Next-generation declarative UI frameworks and native desktop renderers designed for sub-millisecond reactivity and buildless component distribution.",
    components: [
      {
        name: "Uploop",
        role: "6KB ESM-Native Web UI Framework",
        tech: "JS / TS / Rust",
        status: "Active",
        description: "Zero-bundle overhead, Hot/Cold/Transient reactive state buses with inspectable declarative workflows.",
        slug: "uploop"
      },
      {
        name: "Lac",
        role: "High-Performance Desktop Renderer",
        tech: "Rust / Skia",
        status: "Active",
        description: "Native cross-platform desktop UI engine powered by Skia with direct Shai MCP gateway hooks.",
        slug: "lac"
      }
    ]
  },
  {
    id: "l2",
    level: 2,
    name: "Application Runtime",
    badge: "Layer 2",
    tagline: "Sandboxed Polyglot Virtual Machine",
    color: "#60a5fa",
    description: "Deterministic, secure sandboxing replacing traditional containers with lightweight Wasm-powered execution, effect-aware typing, and SpaceTime dataflow.",
    components: [
      {
        name: "Long Runtime",
        role: "Dragon VM Polyglot Sandbox",
        tech: "Rust / WASM",
        status: "Active",
        description: "Secure AI-first application runtime with LongCell isolation and LongGuard supply-chain firewall.",
        slug: "long"
      },
      {
        name: "RsTs",
        role: "Effect-Aware Typed Language",
        tech: "Rust / TS",
        status: "Active",
        description: "Compiles TypeScript semantics to Long IR with compile-time side-effect containment.",
        slug: "rsts"
      },
      {
        name: "Fly (Fluidy)",
        role: "SpaceTime Dataflow & Release Engine",
        tech: "Rust / Dataflow",
        status: "Active",
        description: "Declarative workflow scheduler and atomic release pipelines across distributed realities.",
        slug: "fly"
      }
    ]
  },
  {
    id: "l3",
    level: 3,
    name: "AI & Inference Runtimes",
    badge: "Layer 3",
    tagline: "Local Edge SLMs & Heavy Multimodal Cores",
    color: "#c084fc",
    description: "Hybrid AI infrastructure running local 0.5B-1.5B quantized models directly on edge developer hardware combined with heavy tensor compute.",
    components: [
      {
        name: "MinhAI",
        role: "Edge Reasoning Agent (Mini Hyper AI)",
        tech: "Rust / GGUF",
        status: "Active",
        description: "Local-first ReAct agent running in <2GB VRAM with grammar-constrained symbolic reasoning.",
        slug: "minhai"
      },
      {
        name: "HyperAI",
        role: "Core Tensor & Multimodal Engine",
        tech: "Rust / C++ / Python",
        status: "Active",
        description: "High-throughput graph neural inference and embeddings computation across GPU clusters.",
        slug: "hyperai"
      },
      {
        name: "Garden",
        role: "Capability-Declared Model Registry",
        tech: "Rust / Fluid CAS",
        status: "Active",
        description: "HuggingFace-style verifiable model hub distributing signed weights and ULSX contracts.",
        slug: "garden"
      },
      {
        name: "VIAI",
        role: "Speech, Vision & OCR Foundation",
        tech: "Gradle / Java / Rust",
        status: "Active",
        description: "Enterprise multimodal perception for automated document understanding and voice intelligence.",
        slug: "viai"
      }
    ]
  },
  {
    id: "l4",
    level: 4,
    name: "Development & Collaboration",
    badge: "Layer 4",
    tagline: "Agentic toolchain, synthesis, & workspace",
    color: "#e879f9",
    description: "Tools connecting human architects and autonomous AI agents through content-addressed workspaces and shared repository state.",
    components: [
      {
        name: "i2c-Forge",
        role: "Intent-to-Code Synthesis Engine",
        tech: "Rust / TS",
        status: "Active",
        description: "Compiles ULSX intent graphs into production-ready, locked application codebases.",
        slug: "i2c-forge"
      },
      {
        name: "Quang",
        role: "Enterprise Collaboration & Repositories",
        tech: "Rust / TS",
        status: "Active",
        description: "Workplace identity, diffable intent governance, and real-time multiplayer workspace.",
        slug: "quang"
      },
      {
        name: "Shai",
        role: "IDE Bridge & MCP Protocol Gateway",
        tech: "Rust / Python / CLI",
        status: "Active",
        description: "Codebase property graph (CPG) indexer and Model Context Protocol bridge for developer IDEs.",
        slug: "shai"
      },
      {
        name: "i2Collab",
        role: "Multi-Agent Team Orchestration",
        tech: "TS / Rust",
        status: "Active",
        description: "Autonomous agentic pairing and task synchronization across engineering teams.",
        slug: "i2collab"
      }
    ]
  },
  {
    id: "l5",
    level: 5,
    name: "Trust & Networking",
    badge: "Layer 5",
    tagline: "Zero-Knowledge verification & P2P mesh",
    color: "#f43f5e",
    description: "Cryptographic trust validation, ticket policy verification, and decentralized peer-to-peer transport without central bottlenecks.",
    components: [
      {
        name: "Jigsaw",
        role: "Cryptographic Evidence & Spike Verifier",
        tech: "Rust / BLAKE3",
        status: "Active",
        description: "ADR-001 Canonical CBOR evaluator enforcing zero-knowledge policy membranes and signed receipts.",
        slug: "jigsaw"
      },
      {
        name: "Kitchen",
        role: "Generative Data Middleware",
        tech: "Rust / NATS JetStream",
        status: "Active",
        description: "Brigade de Cuisine architecture: Maitre D' gateway, dynamic Recipes, Line Cook WASM transforms, and on-demand Soup views.",
        slug: "kitchen"
      },
      {
        name: "Rings",
        role: "P2P Trust-Ring Mesh Network",
        tech: "Rust / JS",
        status: "Active",
        description: "Decentralized DHT mesh with cryptographic trust boundaries and low-latency agent routing.",
        slug: "rings"
      }
    ]
  },
  {
    id: "l6",
    level: 6,
    name: "Persistence Core",
    badge: "Layer 6",
    tagline: "Content-Addressed Spacetime Storage",
    color: "#00f2fe",
    description: "Immutable, content-addressed data foundations leveraging BLAKE3 Merkle trees, Lamport logical clocks, and Content-Defined Chunking.",
    components: [
      {
        name: "FractalDB",
        role: "SpaceTime HyperGraph Database",
        tech: "Rust",
        status: "Active",
        description: "Hierarchical Merkle tree DB with Lamport logical clocks, reality branching, and warp_at() time travel.",
        slug: "fractaldb"
      },
      {
        name: "HyperGraph",
        role: "Multidimensional Graph Substrate",
        tech: "Rust / WGPU",
        status: "Active",
        description: "N-ary hyperedge modeling and GPU-accelerated sparse matrix graph traversals.",
        slug: "hypergraph"
      },
      {
        name: "Fluid",
        role: "Content-Addressed Block Freezer (CAS)",
        tech: "Rust / BLAKE3",
        status: "Active",
        description: "Content-Defined Chunking (CDC) binary asset store replacing S3, Git blobs, and package registries.",
        slug: "fluid"
      }
    ]
  },
  {
    id: "l7",
    level: 7,
    name: "Enterprise Vertical Solutions",
    badge: "Layer 7",
    tagline: "Production Domain Platforms & ERP",
    color: "#00f5a0",
    description: "Comprehensive industry platforms built atop the i2c substrate, providing turnkey intelligence for global enterprises.",
    components: [
      {
        name: "UniPlatform / UniBi",
        role: "Next-Gen Enterprise BI & ERP",
        tech: "Next.js / NestJS / Uploop",
        status: "Active",
        description: "Unified command layer linking budget control, project execution, and strategic visibility.",
        slug: "unibi"
      },
      {
        name: "iERP",
        role: "Agentic Enterprise Resource Planning",
        tech: "TS / Uploop / FractalDB",
        status: "Active",
        description: "Composable supply chain, inventory, and ledger operations orchestrated by MinhAI agents.",
        slug: "ierp"
      },
      {
        name: "iReport (aiDataExpert)",
        role: "Intelligent Data Analytics & BI",
        tech: ".NET / TS / Kitchen",
        status: "Active",
        description: "Real-time executive reporting and dynamic metric synthesizers powered by Kitchen event streams.",
        slug: "ireport"
      },
      {
        name: "AutomotiveEco",
        role: "Connected Vehicle & Mobility OS",
        tech: "Python / React / FractalDB",
        status: "Active",
        description: "Fleet telematics, battery health forecasting, and intelligent vehicle service lifecycle.",
        slug: "automotiveeco"
      },
      {
        name: "LogOp",
        role: "Logistics Optimization & Fleet Control",
        tech: "TS / HyperGraph",
        status: "Active",
        description: "Multi-modal route optimization and dispatch coordination powered by HyperGraph traversals.",
        slug: "logop"
      },
      {
        name: "CyOp",
        role: "Continuous Security & Policy Defense",
        tech: "TS / Rust / Jigsaw",
        status: "Active",
        description: "Real-time threat graph auditing and automated policy enforcement across infrastructure.",
        slug: "cyop"
      },
      {
        name: "DefiKit",
        role: "Decentralized Finance & Smart Settlements",
        tech: "TS / Solidity / Jigsaw",
        status: "Active",
        description: "Cryptographically verified settlement pipelines and automated liquidity management.",
        slug: "defikit"
      },
      {
        name: "MyEstate",
        role: "Smart Building & Real Estate IoT",
        tech: "TS / React / Fluid",
        status: "Active",
        description: "IoT facility telemetry, automated lease management, and spatial digital twins.",
        slug: "myestate"
      }
    ]
  }
];

export const VIBE_PRINCIPLES = [
  {
    num: "01",
    title: "Intent is Source of Truth",
    desc: "Code, UI, and infrastructure are derived, locked build artifacts. No manual code drift."
  },
  {
    num: "02",
    title: "Unstated is Freedom",
    desc: "Drafts are constraints; the resolver fills structural silences with reasoned defaults."
  },
  {
    num: "03",
    title: "Every Decision Carries Why",
    desc: "Every machine-filled property annotates its rationale and rejected alternatives."
  },
  {
    num: "04",
    title: "Structural Uncertainty",
    desc: "Confidence is measured via graph traversal holes (IAE triad), never LLM self-report."
  },
  {
    num: "05",
    title: "Intent → Action → Effect (IAE)",
    desc: "Every state mutation traces to an event; every effect flows into a subscription."
  },
  {
    num: "06",
    title: "Compose Before Create",
    desc: "Library-first composition aims for 80–90% coverage through existing verified components."
  },
  {
    num: "07",
    title: "Cost is a First-Class Dial",
    desc: "LOD (Level of Detail) and LOE (Level of Effort) are dialed independently and transparently."
  },
  {
    num: "08",
    title: "Canonical Graph, Plural Syntaxes",
    desc: "YAML for product leads, JSX for engineers, prose for drafts — all parse to one BLAKE3 hash."
  },
  {
    num: "09",
    title: "Lock is a Signed Ceremony",
    desc: "Provenance chains hash inputs → plan → code with signed Jigsaw execution receipts."
  },
  {
    num: "10",
    title: "Human Overrides are Training Signal",
    desc: "Every pin, survey answer, and override compounds into team-specific resolution priors."
  }
];

export const ULSX_CODE_SAMPLE = `// i2c ULSX: Intent-to-Execution Definition
intent CustomerIntelligence @quang(workspace: enterprise/ops):
  over: [Customer, Order, Telemetry]
  goal: "Autonomous customer anomaly detection & risk mitigation"

  library: @garden(i2c/core-ui@^3, enterprise/agents@^1.2)
  place:   @vuinf(profile: edge-first, pin: hybrid-mesh)
  lod: high
  loe: medium @envelope(quang: budget-q3)

  view AnomalyRadar: ~soup(Customer.riskScore > 0.85, freshness: 1s)
    graph:
      nodes: [customer_id, risk_factor, transaction_spike]
      edges: hyperedge(causality_matrix)
      paginate!: cursor(25)   # why: unbounded event stream @rule(garden:i2c/elab#04)
      fixed: [risk_factor]    # human constraint pin

  action MitigateRisk:
    in: RiskMitigationForm
    guard: form.verifiedIdentity == true
    do => ticket Customer.lockWallet(form)   # Kitchen Ticket -> Jigsaw-signed by construction
    ok  => toast "Protective lock active" & refresh AnomalyRadar
    err => alert "Intervention failed" & escalateTo MinhAI

verify CustomerIntelligence:
  contest: 3
  sim: @long(cell: isolated) replay(traffic: fluid://samples/stress-burst)
  gate: p95 < 15ms & memory < 1.2GB`;
