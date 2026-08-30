# i2c — Intelligent Cloud Computing World (`i2cw.com`)

[![Production Deployment](https://github.com/i2ccom/i2c-lp-react/actions/workflows/deploy-cloudflare.yml/badge.svg)](https://github.com/i2ccom/i2c-lp-react/actions/workflows/deploy-cloudflare.yml)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-f38020?logo=cloudflare&logoColor=white)](https://i2cw-com.pages.dev)
[![Architecture](https://img.shields.io/badge/Architecture-7--Layer%20Machine--Native-0284c7)](https://i2cw.com/solutions)

**i2c Inc.** is an enterprise cloud applications and AI-first software company established in 2014. The **i2cw Global Portal** orchestrates 36 verified enterprise platforms, generative data middleware, spacetime persistence, and offline edge AI reasoning cores across global operating nodes.

---

## 🏛️ System Architecture: The 7-Layer Machine-Native Stack

The i2c platform replaces traditional handwritten code drift and fragile prose specifications with a mathematically verifiable substrate:

| Layer | Substrate Name | Core Responsibilities & Technologies | Verified Products |
| :--- | :--- | :--- | :--- |
| **Layer 7** | **Application Layer** | Enterprise vertical solutions for ERP, BI, FinTech, LearnTech, Logistics, and CRM. | `UniBi`, `UniQi`, `UniFi`, `Tion`, `OSee`, `iERP`, `MyEstate`, `LogOp`, `CyOp`, `DefiKit`, `i2cHomeNet`, `MiniPlatform` |
| **Layer 6** | **Persistence & Flow** | Content-Addressed Block Freezers (FastCDC + BLAKE3) and Lamport Spacetime database trees. | `FractalDB`, `Fluid`, `HyperGraph`, `Kitchen` |
| **Layer 5** | **Mesh & Governance** | Zero-knowledge cryptographic verification (ADR-001) and decentralized P2P transport meshes. | `Jigsaw`, `Rings`, `Quang` |
| **Layer 4** | **Orchestration** | WebAssembly sandboxing, unified execution graph scheduling, and AI agent coordination. | `Garden`, `DevPlatform`, `i2Collab`, `i2c-Forge` |
| **Layer 3** | **Cognitive Engine** | Sub-2GB VRAM edge SLMs, grammar-constrained deterministic inference, and multimodal perception. | `MinhAI`, `HyperAI`, `ViAI`, `TransformerHub`, `Shai` |
| **Layer 2** | **Runtime Fabric** | Low-latency WebAssembly execution fabrics and cross-platform native compilation toolchains. | `Long Runtime`, `RsTs`, `Fly`, `UpLoop`, `LAC` |
| **Layer 1** | **Spacetime Foundation** | Content-addressed immutable physical storage partitions and cryptographic block primitives. | Bare-Metal Rust / Linux Interconnects |

---

## ✨ Key Platform Features

1. **3D Door-Open Split Hover Transitions**:
   - Product thumbnails showcase bright, real-world **Human Usage Scenarios** at rest with zero visual artifacts.
   - Mouse hover triggers a smooth 3D double-door swing (`perspective: 1200px` with `rotateY(±88deg)`), revealing the high-definition **Architecture Blueprint** underneath.

2. **Floating AI Architecture Specialist (`ChatBot`)**:
   - Integrated floating AI assistant powered by simulated MinhAI cognitive intelligence.
   - Interactive prompt chips, real-time streaming answers for all 36 systems, and instant enterprise consultation routing.

3. **Dynamic Substrate & Pipeline Showcases**:
   - **MinhAI Edge Section**: Interactive tab switching between MinhAI, HyperAI, and ViAI with animated image cross-fading, terminal traces, and hardware telemetry.
   - **Kitchen Data Engine**: Step-by-step pipeline visualization displaying multi-protocol ingress, cryptographic intent envelopes, HyperGraph AST projection, LongCell WASM execution, and reactive state streaming.

4. **Intent Manifesto & Computable Vibe Paradigm**:
   - Interactive exploration of the 5 Invariant Laws of Computable Software Engineering.

---

## 🛠️ Tech Stack & Tooling

- **Frontend Core**: [React 18](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/), [Vite 5](https://vite.dev/)
- **Styling & UI**: [Bulma 1.0](https://bulma.io/), FontAwesome 6.5, CSS 3D Perspective & Glassmorphism
- **Routing**: [React Router v6](https://reactrouter.com/) (Single-Page Application with deep linking to `/solutions/:slug`)
- **Package Management**: [pnpm](https://pnpm.io/) (`v10.11.0` via Corepack)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) + [GitHub Actions](https://github.com/features/actions)

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 20.0.0`
- pnpm `>= 10.0.0`

### Installation
```bash
# Clone the repository
git clone https://github.com/i2ccom/i2c-lp-react.git
cd i2c-lp-react

# Install dependencies with pnpm
pnpm install
```

### Local Development
```bash
# Start the Vite development server
pnpm dev
```
The application will launch on `http://localhost:5173` (or next available port).

### Production Build & Preview
```bash
# Compile and bundle for production
pnpm build

# Preview production build locally
pnpm preview
```

---

## 🌐 Routes & Pages

| Route | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `HomePage.tsx` | Executive hero, Top 10 Solutions with 3D door hover, MinhAI edge terminal, Kitchen engine, and ecosystem overview. |
| `/solutions` | `SolutionsPage.tsx` | Full 36-product catalog directory, High-Level Architecture map, 7-Layer Substrates, and the Intent Manifesto. |
| `/solutions/:slug` | `ServiceDetailPage.tsx` | Deep architectural specifications, live metrics, 8s auto-cycling image gallery, data flows, and domain FAQs for any product. |
| `/company` | `CompanyPage.tsx` | Corporate vision, executive leadership, 12-year innovation timeline (2014–2026+), global offices, and partner network. |

---

## 🚢 CI/CD & Deployment

### Cloudflare Pages
The production site is hosted on **Cloudflare Pages**:
- **Production Domain**: [https://i2cw.com](https://i2cw.com)
- **Pages Preview URL**: [https://i2cw-com.pages.dev](https://i2cw-com.pages.dev)
- **Automated Workflow**: Every push to `master` triggers `.github/workflows/deploy-cloudflare.yml` to build and publish the bundle to Cloudflare Pages.

---

## 📍 Global Offices

* **Vietnam Office**: 22/8 Nguyen Trai, Hanoi, Vietnam
* **US Office**: Atlanta, GA, USA
* **Contact**: [contact@i2cw.com](mailto:contact@i2cw.com) | [i2cw.com](https://i2cw.com)

---

## 📄 License
© 2014 – 2026 **i2cw Global Portal** (i2cw.com). All rights reserved.
