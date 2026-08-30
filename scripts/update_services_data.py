# -*- coding: utf-8 -*-
import os

services_path = r"F:\i2c\Projects\i2cPlatform\i2cLandingPages\i2c-lp-react\src\data\data.services.ts"

content = '''export interface EnterpriseService {
  title: string;
  slug: string;
  category: "apps" | "substrates" | "runtimes" | "tools";
  categoryLabel: string;
  layer: number;
  layerName: string;
  description: string;
  tech: string;
  status: "Active" | "Nextgen" | "Genesis";
  p: number; // 1 = Top Flagship (shown on Home), 2 = Core Platform, 3 = Runtime / Tooling, 4 = Specialized
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
      tech: "Next.js / NestJS / Uploop",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/unibi.svg",
      heroImageUrl: "/images/product-illustrations/unibi-concept.jpeg"
    },
    {
      title: "UniQi",
      slug: "uniqi",
      category: "apps",
      categoryLabel: "Education Platform",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Adaptive education intelligence, curriculum workflows & cryptographic outcome certification.",
      tech: "React / Node.js / Uploop",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/uniqi.svg",
      heroImageUrl: "/images/product-illustrations/uniqi-concept.jpeg"
    },
    {
      title: "UniFi",
      slug: "unifi",
      category: "apps",
      categoryLabel: "FinTech Platform",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Trust-centered finance platform, automated reconciliation & immutable Jigsaw-verified audit trails.",
      tech: "React / Node.js / Jigsaw",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/unifi.svg",
      heroImageUrl: "/images/topics/Blockchain-To-Fintech.png"
    },
    {
      title: "WebBuilder (iWeb)",
      slug: "webbuilder",
      category: "apps",
      categoryLabel: "Publishing & Growth",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Rapid conversion-focused publishing system with central design token brand governance.",
      tech: "React / TypeScript / Uploop",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/webbuilder.svg",
      heroImageUrl: "/images/product-illustrations/webbuilder-concept.jpeg"
    },
    {
      title: "Tion",
      slug: "tion",
      category: "apps",
      categoryLabel: "Marketing & CRM",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Smart revenue operations, marketing campaign automation & HyperAI predictive lead intelligence.",
      tech: "Strapi / React / HyperAI",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/tion.svg",
      heroImageUrl: "/images/topics/smart-content-marketing.png"
    },
    {
      title: "OSee",
      slug: "osee",
      category: "apps",
      categoryLabel: "Market Intelligence",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Social listening, multilingual brand perception & real-time market crisis warning command hub.",
      tech: "React / Python / ViAI",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/osee.svg",
      heroImageUrl: "/images/topics/social-listening-1.png"
    },
    {
      title: "iERP",
      slug: "ierp",
      category: "apps",
      categoryLabel: "Supply Chain & Logistics",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Composable AI-orchestrated supply chain, warehouse inventory & multi-entity procurement ledger.",
      tech: "TS / Uploop / FractalDB",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/ierp.svg",
      heroImageUrl: "/images/topics/iERP.jpg"
    },
    {
      title: "iReport (aiDataExpert)",
      slug: "ireport",
      category: "apps",
      categoryLabel: "Analytics & Reporting",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Real-time intelligent reporting and continuous operational analytics synthesizing Kitchen event streams.",
      tech: ".NET / TS / Kitchen",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/ireport.svg",
      heroImageUrl: "/images/ai-apps/aiReport/screenshot_01.jpg"
    },
    {
      title: "AutomotiveEco",
      slug: "automotiveeco",
      category: "apps",
      categoryLabel: "Connected Mobility",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Connected vehicle operating system, battery health telemetry & predictive fleet routing.",
      tech: "Python / React / FractalDB",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/automotiveeco.svg",
      heroImageUrl: "/images/slides/slide_10.png"
    },
    {
      title: "LogOp",
      slug: "logop",
      category: "apps",
      categoryLabel: "Logistics Router",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Multi-modal logistics route optimization, turn-by-turn driver navigation & fleet coordination.",
      tech: "TS / HyperGraph",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/logop.svg",
      heroImageUrl: "/images/topics/mapbox.png"
    },
    {
      title: "CyOp",
      slug: "cyop",
      category: "apps",
      categoryLabel: "DevSecOps & Threat Defense",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Continuous threat graph scanning, policy enforcement & zero-trust runtime protection membrane.",
      tech: "TS / Rust / Jigsaw",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/cyop.svg",
      heroImageUrl: "/images/slides/slide_11.png"
    },
    {
      title: "DefiKit",
      slug: "defikit",
      category: "apps",
      categoryLabel: "Decentralized Settlements",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Decentralized settlement rails, liquidity routing & Jigsaw-verified smart financial contracts.",
      tech: "TS / Solidity / Jigsaw",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/defikit.svg",
      heroImageUrl: "/images/topics/blockchain.jpg"
    },
    {
      title: "MyEstate",
      slug: "myestate",
      category: "apps",
      categoryLabel: "Smart Real Estate IoT",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Smart building facility management, IoT HVAC telemetry & 3D spatial occupancy digital twin.",
      tech: "TS / React / Fluid",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/myestate.svg",
      heroImageUrl: "/images/topics/iBuilding.jpg"
    },
    {
      title: "i2cHomenet",
      slug: "i2chomenet",
      category: "apps",
      categoryLabel: "Smart Home IoT",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Private smart home mesh, IoT telemetry & voice-controlled edge automation cluster.",
      tech: "TS / Rust / FractalDB",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/i2chomenet.svg",
      heroImageUrl: "/images/product-illustrations/myestate-concept.jpeg"
    },
    {
      title: "MiniPlatform",
      slug: "miniplatform",
      category: "apps",
      categoryLabel: "Knowledge Networks",
      layer: 7,
      layerName: "Vertical Solutions",
      description: "Knowledge network platform, semantic search & distributed community hypergraph workspace.",
      tech: "Web / Java / ViAI",
      status: "Genesis",
      p: 2,
      logoUrl: "/images/icons/miniplatform.svg",
      heroImageUrl: "/images/slides/slide_12.png"
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
      description: "Generative data middleware & virtualization engine (Brigade de Cuisine) compiling dynamic views in <8ms.",
      tech: "Rust / NATS JetStream",
      status: "Nextgen",
      p: 1,
      logoUrl: "/images/icons/kitchen.svg",
      heroImageUrl: "/images/product-illustrations/kitchen-concept.jpeg"
    },
    {
      title: "FractalDB",
      slug: "fractaldb",
      category: "substrates",
      categoryLabel: "Persistence Core",
      layer: 6,
      layerName: "Persistence Core",
      description: "SpaceTime HyperGraph DB with Merkle tree state & Lamport logical clock branchable realities.",
      tech: "Rust / BLAKE3",
      status: "Nextgen",
      p: 1,
      logoUrl: "/images/icons/fractaldb.svg",
      heroImageUrl: "/images/product-illustrations/fractaldb-concept.jpeg"
    },
    {
      title: "HyperGraph",
      slug: "hypergraph",
      category: "substrates",
      categoryLabel: "Persistence Core",
      layer: 6,
      layerName: "Persistence Core",
      description: "High-performance multidimensional graph format & GPU-accelerated engine dictionary.",
      tech: "Rust / WGPU",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/hypergraph.svg",
      heroImageUrl: "/images/slides/slide_03.png"
    },
    {
      title: "Fluid",
      slug: "fluid",
      category: "substrates",
      categoryLabel: "Persistence Core",
      layer: 6,
      layerName: "Persistence Core",
      description: "Content-Addressed CAS block freezer with Content-Defined Chunking and O(1) deduplication.",
      tech: "Rust / BLAKE3 CDC",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/fluid.svg",
      heroImageUrl: "/images/slides/slide_04.png"
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
      tech: "Rust / GGUF / Ollama",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/minhai.svg",
      heroImageUrl: "/images/slides/slide_01_architecture.png"
    },
    {
      title: "HyperAI",
      slug: "hyperai",
      category: "runtimes",
      categoryLabel: "AI & Inference",
      layer: 3,
      layerName: "AI & Inference",
      description: "High-throughput tensor core and graph neural inference management engine.",
      tech: "Rust / C++ / Python",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/hyperai.svg",
      heroImageUrl: "/images/slides/slide_13.png"
    },
    {
      title: "ViAI",
      slug: "viai",
      category: "runtimes",
      categoryLabel: "AI & Inference",
      layer: 3,
      layerName: "AI & Inference",
      description: "Enterprise multimodal AI copilot, speech transcription & intelligent document OCR.",
      tech: "Gradle / Java / Rust",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/viai.svg",
      heroImageUrl: "/images/topics/chatbot.png"
    },
    {
      title: "Garden",
      slug: "garden",
      category: "runtimes",
      categoryLabel: "AI & Inference",
      layer: 3,
      layerName: "AI & Inference",
      description: "Capability-declared model & contract registry with signed Jigsaw execution receipts.",
      tech: "Rust / Fluid CAS",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/garden.svg",
      heroImageUrl: "/images/slides/slide_14.png"
    },
    {
      title: "TransformerHub",
      slug: "transformerhub",
      category: "runtimes",
      categoryLabel: "AI & Inference",
      layer: 3,
      layerName: "AI & Inference",
      description: "No-code AI-first workflow, dynamic node ecosystem and ETL transformation platform.",
      tech: "Node.js / React / Kitchen",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/transformerhub.svg",
      heroImageUrl: "/images/product-illustrations/transformerhub-concept.jpeg"
    },
    {
      title: "Long Runtime",
      slug: "long",
      category: "runtimes",
      categoryLabel: "App Runtime",
      layer: 2,
      layerName: "App Runtime",
      description: "Dragon VM polyglot sandbox with LongCell isolation & LongGuard cryptographic security membrane.",
      tech: "Rust / WASM",
      status: "Nextgen",
      p: 1,
      logoUrl: "/images/icons/long.svg",
      heroImageUrl: "/images/slides/slide_02.png"
    },
    {
      title: "RsTs",
      slug: "rsts",
      category: "runtimes",
      categoryLabel: "App Runtime",
      layer: 2,
      layerName: "App Runtime",
      description: "Effect-aware typed language compiling TypeScript semantics to Long IR with zero GC pauses.",
      tech: "Rust / TS",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/rsts.svg",
      heroImageUrl: "/images/topics/cloud.jpg"
    },
    {
      title: "Fly (Fluidy)",
      slug: "fly",
      category: "runtimes",
      categoryLabel: "App Runtime",
      layer: 2,
      layerName: "App Runtime",
      description: "SpaceTime-aware dataflow, pipeline orchestration and zero-downtime atomic release management.",
      tech: "Rust / Dataflow",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/fly.svg",
      heroImageUrl: "/images/topics/cloud2.png"
    },
    {
      title: "Uploop",
      slug: "uploop",
      category: "runtimes",
      categoryLabel: "Client Interfaces",
      layer: 1,
      layerName: "Client Interfaces",
      description: "6KB ESM-native Web UI framework with Hot/Cold/Transient reactive state buses.",
      tech: "JS / TS / Rust",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/uploop.svg",
      heroImageUrl: "/images/topics/cloud4.jpg"
    },
    {
      title: "Lac",
      slug: "lac",
      category: "runtimes",
      categoryLabel: "Client Interfaces",
      layer: 1,
      layerName: "Client Interfaces",
      description: "High-performance native cross-platform desktop UI renderer via Skia graphics pipeline.",
      tech: "Rust / Skia",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/lac.svg",
      heroImageUrl: "/images/slides/slide_06.png"
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
      tech: "Rust / BLAKE3-256",
      status: "Nextgen",
      p: 1,
      logoUrl: "/images/icons/jigsaw.svg",
      heroImageUrl: "/images/slides/slide_05.png"
    },
    {
      title: "Rings",
      slug: "rings",
      category: "tools",
      categoryLabel: "Trust & Routing",
      layer: 5,
      layerName: "Trust & Routing",
      description: "Decentralized P2P DHT trust-ring mesh network and secure cryptographic transport.",
      tech: "Rust / JS",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/rings.svg",
      heroImageUrl: "/images/slides/slide_07.png"
    },
    {
      title: "i2c-Forge",
      slug: "i2c-forge",
      category: "tools",
      categoryLabel: "Dev & Collab",
      layer: 4,
      layerName: "Dev & Collab",
      description: "Intent-to-code synthesis compiler and autonomous project generator with locked receipts.",
      tech: "Rust / TS",
      status: "Nextgen",
      p: 1,
      logoUrl: "/images/icons/i2c-forge.svg",
      heroImageUrl: "/images/slides/slide_08.png"
    },
    {
      title: "Quang",
      slug: "quang",
      category: "tools",
      categoryLabel: "Dev & Collab",
      layer: 4,
      layerName: "Dev & Collab",
      description: "Enterprise collaboration workspace, repository sync & intent governance hub.",
      tech: "Rust / TS",
      status: "Active",
      p: 1,
      logoUrl: "/images/icons/quang.svg",
      heroImageUrl: "/images/topics/jira.jpg"
    },
    {
      title: "Shai",
      slug: "shai",
      category: "tools",
      categoryLabel: "Dev & Collab",
      layer: 4,
      layerName: "Dev & Collab",
      description: "Developer IDE bridge, codebase property graph (CPG) indexer & MCP gateway.",
      tech: "Rust / Python / CLI",
      status: "Nextgen",
      p: 1,
      logoUrl: "/images/icons/shai.svg",
      heroImageUrl: "/images/slides/slide_01.png"
    },
    {
      title: "i2Collab",
      slug: "i2collab",
      category: "tools",
      categoryLabel: "Dev & Collab",
      layer: 4,
      layerName: "Dev & Collab",
      description: "Multi-agent pairing, automated task triage & collaborative authoring swarm.",
      tech: "TS / Rust",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/i2collab.svg",
      heroImageUrl: "/images/product-illustrations/corporate-users-asia.jpeg"
    },
    {
      title: "DevPlatform",
      slug: "devplatform",
      category: "tools",
      categoryLabel: "Dev & Collab",
      layer: 4,
      layerName: "Dev & Collab",
      description: "Visual application builder and schema-to-UI rapid prototyping platform.",
      tech: "TS / JDL / Uploop",
      status: "Active",
      p: 2,
      logoUrl: "/images/icons/devplatform.svg",
      heroImageUrl: "/images/slides/slide_09.png"
    }
  ]
};

export default servicesData;
'''

with open(services_path, "w", encoding="utf-8") as f:
    f.write(content)

print("data.services.ts updated with non-duplicated, high-quality images and official SVG mappings!")
