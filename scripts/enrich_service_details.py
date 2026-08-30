import os

target_path = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\src\data\data.service-details.ts"

content = '''export interface GalleryItem {
  title: string;
  image: string;
  caption: string;
}

export interface ServiceDetail {
  slug: string;
  valueProp: string;
  layer: number;
  layerName: string;
  challenge: string;
  solution: string;
  gallery: GalleryItem[];
  painPoints: string[];
  features: Array<{ title: string; outcome: string; desc?: string }>;
  flow: string[];
  industries: string[];
  stack: string[];
  metrics: Array<{ label: string; value: string }>;
  architecture?: {
    substrateRole: string;
    dataModel: string;
    verificationModel: string;
    executionProtocol: string;
  };
  faq: Array<{ q: string; a: string }>;
}

const serviceDetails: Record<string, ServiceDetail> = {
  // ══════════════════════════════════════════════════════════════
  // VIAI: MULTIMODAL ENTERPRISE COPILOT
  // ══════════════════════════════════════════════════════════════
  viai: {
    slug: "viai",
    valueProp: "Enterprise Multimodal AI Copilot, Speech Transcription & Intelligent Document OCR.",
    layer: 3,
    layerName: "AI & Inference",
    challenge: "Enterprise workflows lose thousands of hours manually transcribing multilingual audio meetings, extracting tabular unstructured data from PDF invoices, and navigating fragmented knowledge repositories.",
    solution: "ViAI unifies speech recognition, document OCR, visual understanding, and semantic search into a single high-throughput enterprise copilot operating either on-premise or within private cloud VPCs.",
    gallery: [
      {
        title: "ViAI Multimodal Copilot Cockpit",
        image: "/images/products-hd/viai.jpg",
        caption: "Real-time speech spectrogram waveform, document OCR neural analysis, and conversational assistant UI."
      },
      {
        title: "Enterprise Document OCR & Extraction Engine",
        image: "/images/topics/chatbot.png",
        caption: "Automated tabular data extraction and entity recognition from complex enterprise PDF contracts."
      },
      {
        title: "Multilingual Speech Recognition Pipeline",
        image: "/images/topics/chatbot2.png",
        caption: "Sub-200ms latency speech-to-text pipeline supporting over 30 languages with domain-specific vocabularies."
      },
      {
        title: "Private Knowledge Graph Grounding",
        image: "/images/topics/smart-content-marketing.png",
        caption: "Zero-hallucination factual grounding against FractalDB and HyperGraph corporate knowledge graphs."
      }
    ],
    painPoints: [
      "Manual document data entry creates severe operational bottlenecks and human error.",
      "Generic cloud AI models leak proprietary business data and lack domain vocabulary.",
      "High transcription and LLM inference API costs scale linearly with employee headcount."
    ],
    features: [
      { title: "Real-Time Speech Transcription", outcome: "Sub-200ms audio latency", desc: "Enterprise-grade speech recognition with custom acoustic and language models." },
      { title: "Intelligent Neural OCR", outcome: "99.4% extraction accuracy", desc: "Extracts tables, forms, and handwritten signatures from scanned business records." },
      { title: "Zero-Data Retention Guarantee", outcome: "100% Private VPC execution", desc: "All inference runs inside your enterprise perimeter without third-party data telemetry." }
    ],
    flow: [
      "Ingest audio stream, image scan, or document payload via secure gRPC / WebSocket",
      "Process through quantized tensor pipeline with domain-adapted acoustic and vision SLMs",
      "Ground responses against internal HyperGraph knowledge graph using semantic vector search",
      "Emit verified structured JSON payload and cryptographic audit receipt"
    ],
    industries: ["Banking & Financial Services", "Legal & Compliance", "Healthcare & Life Sciences", "Customer Operations"],
    stack: ["⚡ Machine-Native Stack", "🌳 HyperGraph Knowledge Core", "🔐 Jigsaw Governance", "🚀 Edge Optimized"],
    metrics: [
      { label: "Transcription Latency", value: "< 200ms" },
      { label: "OCR Accuracy", value: "99.4%" },
      { label: "Data Sovereignty", value: "100% Private" }
    ],
    architecture: {
      substrateRole: "L3 Multimodal Inference & Cognitive Memory Core",
      dataModel: "Content-Addressed Audio/Vision Embeddings",
      verificationModel: "Cryptographic Output Attestation & Grounding Proofs",
      executionProtocol: "Sub-2GB VRAM Quantized Tensor Pipeline"
    },
    faq: [
      { q: "How does ViAI protect sensitive enterprise data?", a: "ViAI runs completely within your private cloud VPC or on-premise hardware. No customer data, voice streams, or documents are ever shared with third-party LLM providers." },
      { q: "What languages are natively supported by ViAI speech recognition?", a: "ViAI supports over 30 languages including English, Vietnamese, Japanese, Korean, Mandarin, Spanish, French, and German, with continuous domain vocabulary tuning." },
      { q: "Can ViAI extract structured tables from legacy scanned PDFs?", a: "Yes. ViAI combines spatial document layout analysis with vision transformers to extract complex nested tables, invoice line items, and signature blocks directly into JSON." },
      { q: "What are the hardware requirements to run ViAI locally?", a: "ViAI is heavily quantized and optimized for consumer and enterprise hardware, requiring as little as 4GB VRAM for basic inference or standard CPU AVX-512 nodes." }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // UNIFI: ENTERPRISE FINTECH PLATFORM
  // ══════════════════════════════════════════════════════════════
  unifi: {
    slug: "unifi",
    valueProp: "Trust-Centered Finance Platform, Automated Reconciliation & Immutable Audit Trails.",
    layer: 7,
    layerName: "Vertical Solutions",
    challenge: "Traditional enterprise finance teams struggle with fragmented banking portals, manual multi-day ledger reconciliations, spreadsheet-based invoice approvals, and high-friction regulatory audit compliance.",
    solution: "UniFi unifies treasury management, multi-currency ledger matching, automated invoice workflows, and zero-knowledge cryptographic provenance into a single real-time financial cockpit.",
    gallery: [
      {
        title: "UniFi Executive Treasury & Reconciliation Cockpit",
        image: "/images/products-hd/unifi.jpg",
        caption: "Real-time liquidity forecasting, treasury positions, and automated reconciliation stream."
      },
      {
        title: "Blockchain to FinTech Architecture",
        image: "/images/topics/Blockchain-To-Fintech.png",
        caption: "High-level architecture showing cryptographic validation pipelines from banking feeds to verified ledger."
      },
      {
        title: "Settlement & Transaction Flow Infographic",
        image: "/images/topics/blockchain-infographic.jpg",
        caption: "Visual transaction lifecycle demonstrating multi-tier consensus and instantaneous ledger updates."
      }
    ],
    painPoints: [
      "Manual end-of-month reconciliation delays financial reporting by 10-15 business days.",
      "Multi-entity currency conversion errors and untracked cross-border transaction fees.",
      "Fragile audit trails that fail rigorous SOC2, ISO27001, and regulatory financial audits."
    ],
    features: [
      { title: "Automated Multi-Currency Reconciliation", outcome: "-60% manual accounting hours", desc: "Continuous ledger synchronization across 50+ international banking APIs." },
      { title: "Jigsaw-Verified Cryptographic Audit Trails", outcome: "100% continuous compliance", desc: "Every transaction generates an immutable ADR-001 CBOR proof committed to FractalDB." },
      { title: "Real-Time Treasury Liquidity Forecasting", outcome: "Sub-second cash visibility", desc: "Predictive AI models forecast cash flow requirements across global corporate entities." }
    ],
    flow: [
      "Stream transaction statements from banking gateways and corporate ERPs",
      "Execute automated rule-based and fuzzy AI matching in Long Runtime sandbox",
      "Generate cryptographic zero-knowledge compliance proof via Jigsaw engine",
      "Commit verified financial state to immutable FractalDB spacetime ledger"
    ],
    industries: ["Banking & Capital Markets", "Corporate Treasury", "E-Commerce & Retail", "Import/Export Trade"],
    stack: ["⚡ Machine-Native Architecture", "🌳 FractalDB Spacetime", "🔐 Jigsaw Governance", "🚀 Edge Optimized"],
    metrics: [
      { label: "Reconciliation Speed", value: "< 10ms/tx" },
      { label: "Audit Readiness", value: "100% Continuous" },
      { label: "Manual Hours Saved", value: "60%" }
    ],
    architecture: {
      substrateRole: "L7 Vertical FinTech Solution & Financial Settlement Layer",
      dataModel: "Double-Entry Cryptographic Ledger Graphs",
      verificationModel: "ADR-001 Zero-Knowledge Policy Proofs",
      executionProtocol: "Deterministic Sub-Millisecond Settlement Rails"
    },
    faq: [
      { q: "How does UniFi achieve automated bank reconciliation?", a: "UniFi connects directly to core banking APIs and corporate ledgers, executing fuzzy AI matching and deterministic rule verification to reconcile 98%+ of transactions automatically." },
      { q: "What cryptographic standards does UniFi use for audit compliance?", a: "UniFi generates ADR-001 standard CBOR proofs hashed with BLAKE3-256, creating tamper-evident cryptographic receipts for every ledger state modification." },
      { q: "Can UniFi handle multi-entity and multi-currency operations?", a: "Yes. UniFi natively supports hierarchical multi-entity corporate structures with real-time FX rate settlement and automated inter-company balance elimination." },
      { q: "How does UniFi integrate with legacy ERPs like SAP or Oracle?", a: "UniFi provides native bi-directional connectors and Kitchen dynamic schema virtualization to ingest and export ledger updates without disturbing existing ERP installations." }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // UNIBI: ENTERPRISE ERP & FINANCIAL INTELLIGENCE
  // ══════════════════════════════════════════════════════════════
  unibi: {
    slug: "unibi",
    valueProp: "Next-gen Enterprise ERP, BI & Continuous Financial Governance with Real-Time Risk Radar.",
    layer: 7,
    layerName: "Vertical Solutions",
    challenge: "Enterprise leaders are blinded by stale monthly reports, disconnected operational silos, and rigid legacy ERP systems that require months of custom development for simple changes.",
    solution: "UniBi delivers a composable, real-time enterprise resource platform combining operational BI, financial ledger tracking, and predictive risk management into an ultra-fast glass cockpit.",
    gallery: [
      {
        title: "UniBi Enterprise Intelligence Dashboard",
        image: "/images/products-hd/unibi.jpg",
        caption: "Live financial overview, multi-currency ledger, and corporate risk monitor."
      },
      {
        title: "Multi-Entity Operational Analytics",
        image: "/images/product-illustrations/corporate-users-asia.jpeg",
        caption: "Cross-subsidiary operational BI and executive KPI consolidation."
      }
    ],
    painPoints: [
      "Fragmented business intelligence tools deliver contradictory metrics across departments.",
      "Legacy ERP deployments cost millions and require lengthy custom code maintenance.",
      "Inability to simulate future business scenarios or model supply chain disruptions in real time."
    ],
    features: [
      { title: "Real-Time Operational Risk Radar", outcome: "< 10ms query execution", desc: "Continuous monitoring of supply chain, credit risk, and liquidity exposure." },
      { title: "Composable Substrate Architecture", outcome: "Zero vendor lock-in", desc: "Modular micro-apps assembled on top of FractalDB and Kitchen middleware." },
      { title: "Predictive Scenario Modeling", outcome: "45% faster planning cycles", desc: "AI-driven simulations forecast revenue, expenses, and headcounts under dynamic market conditions." }
    ],
    flow: [
      "Federate enterprise data across CRM, SCM, and HR systems into Kitchen middleware",
      "Index operational entities into Spacetime HyperGraph representations",
      "Evaluate financial risk invariants continuously across all corporate entities",
      "Render reactive analytical views directly in the executive glass cockpit"
    ],
    industries: ["Manufacturing & Industrial", "Enterprise SaaS", "Energy & Utilities", "Retail & Distribution"],
    stack: ["⚡ Machine-Native Architecture", "🌳 FractalDB Spacetime", "🔐 Jigsaw Governance", "🚀 Edge Optimized"],
    metrics: [
      { label: "Query Response SLA", value: "< 10ms" },
      { label: "Data Freshness", value: "Real-Time" },
      { label: "Planning Velocity", value: "+45%" }
    ],
    faq: [
      { q: "How is UniBi different from traditional monolithic ERPs?", a: "UniBi is built on a composable machine-native substrate where data schemas are virtualized on demand by Kitchen middleware, eliminating brittle database migrations." },
      { q: "What data sources can UniBi connect to?", a: "UniBi connects to PostgreSQL, MySQL, Oracle, SAP, Salesforce, Snowflake, and streaming event buses via native high-throughput adapters." },
      { q: "Does UniBi support real-time executive dashboarding?", a: "Yes. Dashboards update reactively with sub-second data streaming via NATS JetStream without requiring periodic database polling." }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // UNIQI: ADAPTIVE EDUCATION INTELLIGENCE
  // ══════════════════════════════════════════════════════════════
  uniqi: {
    slug: "uniqi",
    valueProp: "Adaptive Education Intelligence, Curriculum Workflows & Cryptographic Certification.",
    layer: 7,
    layerName: "Vertical Solutions",
    challenge: "Standardized educational platforms treat every learner identically, leading to low student engagement, high dropout rates, and unverified credentials vulnerable to diploma fraud.",
    solution: "UniQi provides an AI-orchestrated adaptive learning environment that dynamically personalizes curricula based on real-time mastery graphs and issues tamper-proof cryptographic certificates.",
    gallery: [
      {
        title: "UniQi Adaptive Learning Workspace",
        image: "/images/products-hd/uniqi.jpg",
        caption: "Interactive student skill graph, neural curriculum progress timeline, and verifiable credentials."
      },
      {
        title: "Verifiable Credential Verification",
        image: "/images/topics/smart-content-marketing.png",
        caption: "Tamper-proof cryptographic outcome badges with instant employer verification."
      }
    ],
    painPoints: [
      "Rigid one-size-fits-all curricula fail diverse student learning velocities.",
      "High administrative overhead in manual exam grading and student progress tracking.",
      "Widespread credential fraud and unverified corporate training completion records."
    ],
    features: [
      { title: "Dynamic Mastery Skill Graphs", outcome: "+40% course completion", desc: "Continuously adjusts difficulty and remediation modules based on active comprehension." },
      { title: "Tamper-Proof Jigsaw Credentials", outcome: "100% verifiable credentials", desc: "Issues immutable ADR-001 digital certificates verifiable by global employers in O(1) time." },
      { title: "Automated Assessment & Socratic Feedback", outcome: "-80% instructor grading time", desc: "Provides students with immediate contextual explanations and guided hints." }
    ],
    flow: [
      "Track granular learner interactions and comprehension metrics in real time",
      "Update student mastery vector across the curriculum knowledge graph",
      "Dynamically synthesize personalized remediation modules and challenge tracks",
      "Issue cryptographically signed mastery certificates upon verified objective completion"
    ],
    industries: ["Higher Education & Universities", "Corporate Upskilling", "Professional Certification", "EdTech Providers"],
    stack: ["⚡ Machine-Native Architecture", "🌳 HyperGraph Knowledge Core", "🔐 Jigsaw Governance", "🚀 Edge Optimized"],
    metrics: [
      { label: "Completion Rate", value: "+40%" },
      { label: "Verification Latency", value: "O(1) Instant" },
      { label: "Grading Efficiency", value: "+80%" }
    ],
    faq: [
      { q: "How does UniQi personalize student learning paths?", a: "UniQi maps course competencies into a HyperGraph skill DAG. As a student solves problems, the system identifies specific knowledge gaps and branches lessons accordingly." },
      { q: "How are UniQi certificates verified by employers?", a: "Each certificate is signed with an ADR-001 cryptographic receipt anchored in FractalDB, allowing instant online verification without contacting the issuing institution." },
      { q: "Can UniQi integrate with existing LMS platforms like Canvas or Moodle?", a: "Yes. UniQi supports LTI 1.3 standards and SCORM protocols for seamless bidirectional integration with existing school LMS platforms." }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // KITCHEN: GENERATIVE DATA MIDDLEWARE
  // ══════════════════════════════════════════════════════════════
  kitchen: {
    slug: "kitchen",
    valueProp: "Generative Data Middleware & Virtualization Engine Compiling Dynamic Views in <8ms.",
    layer: 5,
    layerName: "Trust & Routing",
    challenge: "Modern applications require data joined across multiple disparate databases, resulting in sluggish GraphQL/REST aggregation layers, massive N+1 query penalties, and constant database migration bottlenecks.",
    solution: "Kitchen serves as a high-performance virtualization core that compiles heterogeneous data models into on-demand materialized views delivered over high-speed event streams in <8ms.",
    gallery: [
      {
        title: "Kitchen Virtualization Core Architecture",
        image: "/images/products-hd/kitchen.jpg",
        caption: "High-throughput NATS event pipes, dynamic schema compilation node, and LongCell WASM workers."
      },
      {
        title: "Dynamic Schema Virtualization Pipeline",
        image: "/images/product-illustrations/kitchen-concept.jpeg",
        caption: "On-the-fly hypergraph schema compilation eliminating static database locks."
      }
    ],
    painPoints: [
      "Backend join queries across relational and document databases suffer 500ms+ latency.",
      "Database schema migrations require risky maintenance windows and application downtime.",
      "High server resource costs spent running inefficient data serialization and mapping layers."
    ],
    features: [
      { title: "Dynamic Schema Virtualization", outcome: "< 8ms compiled views", desc: "Synthesizes typed schema projections on the fly without database locks." },
      { title: "LongCell WASM Execution Grid", outcome: "Native near-metal speed", desc: "Executes data transforms in sandboxed WebAssembly containers with zero memory bleed." },
      { title: "Reactive Event Federation", outcome: "Zero-copy NATS JetStream", desc: "Pushes real-time state changes directly to client state buses and edge nodes." }
    ],
    flow: [
      "Ingest multi-protocol requests through Universal Ingress Gateway",
      "Validate cryptographic request tokens against Jigsaw zero-knowledge policy membranes",
      "Compile on-the-fly hypergraph schema transformation graph",
      "Execute parallel micro-transforms inside LongCell WASM sandbox and emit materialized view"
    ],
    industries: ["High-Throughput SaaS", "Financial Trading Rails", "IoT Telemetry Aggregation", "Enterprise Systems"],
    stack: ["⚡ Machine-Native Architecture", "🌳 FractalDB Spacetime", "🔐 Jigsaw Governance", "🚀 Edge Optimized"],
    metrics: [
      { label: "View Compilation", value: "< 8ms" },
      { label: "Throughput SLA", value: "250k req/s" },
      { label: "Schema Downtime", value: "0 ms" }
    ],
    faq: [
      { q: "What is Generative Data Middleware?", a: "Instead of static pre-defined database views, Kitchen compiles query projection schemas dynamically at request time based on the exact fields needed by client UI components." },
      { q: "How does Kitchen achieve sub-8ms response times?", a: "By compiling query plans into optimized LongCell WebAssembly kernels and caching intermediate materialized nodes in memory, Kitchen avoids relational disk joins." },
      { q: "Can Kitchen replace traditional ORMs?", a: "Yes. Kitchen renders traditional ORMs obsolete by allowing applications to declare intent directly in typed schemas, handling caching, federation, and sanitization automatically." }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // FRACTALDB: SPACETIME PERSISTENCE CORE
  // ══════════════════════════════════════════════════════════════
  fractaldb: {
    slug: "fractaldb",
    valueProp: "SpaceTime HyperGraph DB with Merkle Tree State & Lamport Logical Clock Branchable Realities.",
    layer: 6,
    layerName: "Persistence Core",
    challenge: "Traditional databases mutate state in place, making point-in-time rollbacks impossible, creating complex audit log reconstruction, and failing to support branchable multi-tenant realities.",
    solution: "FractalDB provides an append-only Spacetime HyperGraph database where every state change is an immutable Merkle tree node indexed by Lamport logical clocks, enabling O(1) time-travel queries.",
    gallery: [
      {
        title: "FractalDB Spacetime Lattice & DAG Core",
        image: "/images/products-hd/fractaldb.jpg",
        caption: "Multidimensional branchable realities, Merkle tree DAG nodes, and Lamport time travel coordinates."
      },
      {
        title: "Immutable Spacetime Event Ledger",
        image: "/images/product-illustrations/fractaldb-concept.jpeg",
        caption: "Append-only cryptographic state tree enabling deterministic point-in-time historical reconstruction."
      }
    ],
    painPoints: [
      "In-place database overwrites permanently destroy historical audit provenance.",
      "Disaster recovery and point-in-time rollbacks take hours of database log replay.",
      "Branching database environments for AI simulation or staging requires full database duplication."
    ],
    features: [
      { title: "O(1) Point-in-Time Time Travel", outcome: "Zero-delay historical queries", desc: "Query the exact state of any record at any millisecond in historical spacetime." },
      { title: "Branchable Multi-Reality Spaces", outcome: "Zero-copy branch isolation", desc: "Create instantaneous virtual database branches for AI simulations without storage overhead." },
      { title: "Content-Addressed Merkle Integrity", outcome: "100% cryptographic proof", desc: "Every committed block is cryptographically sealed with BLAKE3 hashes." }
    ],
    flow: [
      "Receive state mutation intent envelope signed with cryptographic client keys",
      "Assign monotonically increasing Lamport logical clock spacetime coordinate",
      "Compute Content-Defined Chunking BLAKE3 Merkle DAG node",
      "Commit immutable state block to Fluid CAS freezer and broadcast change stream"
    ],
    industries: ["FinTech Ledgers", "Regulatory Compliance", "Autonomous AI Simulation", "Mission-Critical Telemetry"],
    stack: ["⚡ Machine-Native Architecture", "🌳 FractalDB Spacetime", "🔐 Jigsaw Governance", "🚀 Edge Optimized"],
    metrics: [
      { label: "Write Throughput", value: "250k+ w/s" },
      { label: "Time-Travel Query", value: "O(1) Instant" },
      { label: "Storage Deduplication", value: "85% Savings" }
    ],
    faq: [
      { q: "What is a Spacetime HyperGraph database?", a: "Unlike relational tables or simple document trees, FractalDB stores nodes and edges with an explicit time coordinate, allowing multi-dimensional relationships to evolve without losing history." },
      { q: "How do branchable realities work?", a: "FractalDB uses Copy-on-Write Merkle trees. Creating a new branch for testing or AI simulation only creates a new root pointer, requiring 0 bytes of duplicate storage until new writes occur." },
      { q: "Can FractalDB be used as a primary transactional database?", a: "Yes. FractalDB provides strict ACID guarantees with serializable snapshot isolation and sub-millisecond commit latency." }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // MINHAI: PRIVATE EDGE AI INFERENCE
  // ══════════════════════════════════════════════════════════════
  minhai: {
    slug: "minhai",
    valueProp: "Local-First Edge Reasoning Agent Running Quantized Models in <2GB VRAM Under Strict Grammars.",
    layer: 3,
    layerName: "AI & Inference",
    challenge: "Cloud-hosted LLMs introduce unacceptable network latency, massive subscription costs, privacy liabilities, and hallucinations that break structured downstream software systems.",
    solution: "MinhAI executes quantized 0.5B-1.5B cognitive SLMs directly on edge CPU/RAM under strict EBNF grammar constraints, guaranteeing 100% deterministic, valid JSON outputs with zero cloud dependency.",
    gallery: [
      {
        title: "MinhAI Cognitive Edge Neural Chip Architecture",
        image: "/images/products-hd/minhai.jpg",
        caption: "Local-first edge AI reasoning neural chip processor running in compact VRAM under strict grammar constraints."
      },
      {
        title: "Terminal Execution & Grammar Lock Verification",
        image: "/images/topics/chatbot2.png",
        caption: "Real-time edge terminal executing deterministic function calls with zero-token hallucination."
      }
    ],
    painPoints: [
      "Cloud AI calls fail during internet outages and violate strict corporate privacy boundaries.",
      "LLM hallucinations output invalid JSON syntax that crashes production software pipelines.",
      "Massive cloud token bills scale unsustainably as AI agents execute continuous background tasks."
    ],
    features: [
      { title: "100% Offline Edge Execution", outcome: "Sub-20ms local latency", desc: "Runs directly on client hardware without sending a single byte to external servers." },
      { title: "Strict EBNF Grammar Constraint", outcome: "0% JSON syntax failures", desc: "Enforces formal grammar masks at the token sampling level, guaranteeing valid structured code." },
      { title: "Sub-2GB Compact Footprint", outcome: "Runs on any laptop or phone", desc: "Heavily quantized GGUF models optimized for CPU AVX-512 and unified memory GPUs." }
    ],
    flow: [
      "Receive natural language prompt or code synthesis request",
      "Apply domain EBNF grammar mask to constrain token probability distribution",
      "Execute quantized neural inference locally inside LongCell memory sandbox",
      "Emit mathematically valid structured JSON payload with execution receipt"
    ],
    industries: ["Autonomous Vehicles & Robotics", "Defense & Aerospace", "Local-First Developer Tools", "Healthcare Devices"],
    stack: ["⚡ Machine-Native Architecture", "🌳 FractalDB Spacetime", "🔐 Jigsaw Governance", "🚀 Edge Optimized"],
    metrics: [
      { label: "Memory Footprint", value: "< 2GB VRAM" },
      { label: "Offline Capability", value: "100% Local" },
      { label: "Syntax Correctness", value: "100% Guaranteed" }
    ],
    faq: [
      { q: "How does MinhAI prevent AI hallucination?", a: "MinhAI applies strict EBNF grammar masks directly during token generation, preventing the model from outputting characters that violate the defined schema." },
      { q: "Can MinhAI run on devices without dedicated GPUs?", a: "Yes. MinhAI is compiled with SIMD CPU optimizations (AVX-512, ARM Neon), delivering 40+ tokens/sec on standard laptop CPUs." },
      { q: "How is MinhAI kept up to date with business knowledge?", a: "MinhAI connects locally to on-device FractalDB and HyperGraph vector indexes, retrieving relevant enterprise context on the fly." }
    ]
  }
};

export default serviceDetails;
'''

with open(target_path, "w", encoding="utf-8") as f:
    f.write(content)

print("data.service-details.ts successfully enriched with multi-image galleries and 3-6 deep FAQs!")
