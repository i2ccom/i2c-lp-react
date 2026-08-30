import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EdgeAiSection.css";

interface AiEngineSpec {
  id: "minh" | "hyper" | "viai";
  name: string;
  badge: string;
  image: string;
  imageCaption: string;
  terminalTitle: string;
  banner: string;
  slug: string;
  telemetry: { label: string; value: string }[];
  trace: { type: string; text: string }[];
}

const AI_ENGINES: Record<"minh" | "hyper" | "viai", AiEngineSpec> = {
  minh: {
    id: "minh",
    name: "MinhAI (Mini Hyper AI)",
    badge: "Local-First Edge Agent",
    image: "/images/products-hd/minhai.jpg",
    imageCaption: "MinhAI Edge Runtime • Local SLM execution under 1.8GB VRAM with deterministic grammar locks.",
    terminalTitle: "minh-agent --repl --workspace=i2c-forge",
    banner: "MinhAI v0.9.4 | GGUF vibethinker:1.5b | VRAM: 1.42GB | Shai CPG Attached",
    slug: "minhai",
    telemetry: [
      { label: "Memory", value: "1,452 MB" },
      { label: "Context", value: "4,096 tokens" },
      { label: "Safety", value: "LongCell Sandboxed" }
    ],
    trace: [
      { type: "event", text: "minh-cell: detected clean commit blake3.manifest.9b3f" },
      { type: "think", text: "<think> Target function process_transaction missing error branch on line 42 </think>" },
      { type: "tool", text: "\\cmd: cargo test --lib -- --nocapture (Bypassed LLM inference: 0 tokens)" },
      { type: "action", text: "minh-codai: AST patch synthesized & verified via Wasm sandbox" },
      { type: "success", text: "Signed PR emitted to Quang workspace with Jigsaw proof receipt" }
    ]
  },
  hyper: {
    id: "hyper",
    name: "HyperAI",
    badge: "Cluster Tensor Core",
    image: "/images/products-hd/hyperai.jpg",
    imageCaption: "HyperAI Distributed Cluster • High-throughput neural graph inference across dedicated GPU swarms.",
    terminalTitle: "hyperai-cluster --nodes=16 --device=cuda:0..7",
    banner: "HyperAI v2.1.0 | WGPU Graph Tensor Core | 128 TFLOPS | Sharded Graph Schema",
    slug: "hyperai",
    telemetry: [
      { label: "Compute", value: "WGPU / CUDA Grid" },
      { label: "Graph Ops", value: "Zero-Copy Mem" },
      { label: "Latency", value: "< 4.2ms Sync" }
    ],
    trace: [
      { type: "event", text: "hyper-mesh: received multi-dimensional tensor partition request #4102" },
      { type: "think", text: "<think> Sharding N-ary hypergraph adjacency matrix across 8 GPU lanes </think>" },
      { type: "tool", text: "\\wgpu: dispatch_graph_kernel(dim: 1024, sparse_factor: 0.04)" },
      { type: "action", text: "hyper-core: 4.2M node embeddings converged in 3.8ms" },
      { type: "success", text: "Graph prediction synchronized with FractalDB spacetime tree" }
    ]
  },
  viai: {
    id: "viai",
    name: "ViAI Enterprise Copilot",
    badge: "Multimodal Perception & Speech",
    image: "/images/products-hd/viai.jpg",
    imageCaption: "ViAI Multimodal Hub • Real-time multilingual voice transcription & evidence-grounded document analysis.",
    terminalTitle: "viai-stream --audio=whisper-turbo --ocr=tesseract-v5",
    banner: "ViAI v1.8.2 | Multilingual Audio Stream | Zero-Latency VAD | Grounded Evidence",
    slug: "viai",
    telemetry: [
      { label: "Speech Latency", value: "< 25ms" },
      { label: "OCR Accuracy", value: "99.8% Grounded" },
      { label: "Policy", value: "ADR-001 Guardrails" }
    ],
    trace: [
      { type: "event", text: "viai-audio: incoming 16kHz PCM audio stream detected" },
      { type: "think", text: "<think> VAD segmented speech utterance (English / Vietnamese dual-channel) </think>" },
      { type: "tool", text: "\\speech: stream_transcribe(whisper_turbo_int8, beam_size=1)" },
      { type: "action", text: "viai-ocr: cross-referencing invoice table scan with ERP schema" },
      { type: "success", text: "Validated financial entity extraction pushed to UniFi ledger" }
    ]
  }
};

export default function EdgeAiSection() {
  const [activeTab, setActiveTab] = useState<"minh" | "hyper" | "viai">("minh");

  const currentEngine = AI_ENGINES[activeTab];

  return (
    <section className="section edge-ai-section" id="ai">
      <div className="container">
        <div className="section-heading">
          <div className="section-eyebrow">
            <i className="fa-solid fa-brain"></i>
            <span>Private &amp; Hybrid AI Intelligence</span>
          </div>
          <h2 className="title is-2 edge-ai-title">
            <span className="gradient-text">MinhAI</span> &amp; Private Edge Agent Orchestration
          </h2>
          <p className="subtitle is-5 edge-ai-subtitle">
            Deploy high-speed symbolic reasoning directly on enterprise hardware in &lt;2GB VRAM under strict grammar constraints, backed by cluster tensor cores.
          </p>
        </div>

        <div className="ai-showcase-grid">
          {/* Left Column: AI Frameworks Switcher */}
          <div className="ai-features-column">
            <div
              className={`ai-framework-card glass-panel ${activeTab === "minh" ? "is-active" : ""}`}
              onClick={() => setActiveTab("minh")}
            >
              <div className="ai-card-header">
                <div className="ai-icon-wrap">
                  <i className="fa-solid fa-robot"></i>
                </div>
                <div>
                  <h3 className="ai-name">MinhAI (Mini Hyper AI)</h3>
                  <span className="ai-badge">Local-First Edge Agent</span>
                </div>
              </div>
              <p className="ai-summary">
                Executes 0.5B–1.5B quantized GGUF models on edge RAM/GPU. Enforces grammar constraints for 100% deterministic JSON and code generation without hallucination.
              </p>
              <div className="ai-pills-row">
                <span>&lt; 1.8GB VRAM</span>
                <span>Sub-20ms Latency</span>
                <span>100% Offline Capable</span>
              </div>
            </div>

            <div
              className={`ai-framework-card glass-panel ${activeTab === "hyper" ? "is-active" : ""}`}
              onClick={() => setActiveTab("hyper")}
            >
              <div className="ai-card-header">
                <div className="ai-icon-wrap icon-hyper">
                  <i className="fa-solid fa-bolt-lightning"></i>
                </div>
                <div>
                  <h3 className="ai-name">HyperAI</h3>
                  <span className="ai-badge">Cluster Tensor Core</span>
                </div>
              </div>
              <p className="ai-summary">
                High-throughput graph neural network inference and multidimensional vector operations across dedicated enterprise GPU clusters.
              </p>
              <div className="ai-pills-row">
                <span>WGPU / CUDA</span>
                <span>N-ary Graph Kernels</span>
                <span>Zero-Copy Shared Mem</span>
              </div>
            </div>

            <div
              className={`ai-framework-card glass-panel ${activeTab === "viai" ? "is-active" : ""}`}
              onClick={() => setActiveTab("viai")}
            >
              <div className="ai-card-header">
                <div className="ai-icon-wrap icon-viai">
                  <i className="fa-solid fa-microphone-lines"></i>
                </div>
                <div>
                  <h3 className="ai-name">ViAI Enterprise Copilot</h3>
                  <span className="ai-badge">Multimodal Perception</span>
                </div>
              </div>
              <p className="ai-summary">
                Enterprise multimodal assistant, speech transcription, and intelligent document OCR with verified evidence grounding.
              </p>
              <div className="ai-pills-row">
                <span>OCR &amp; Speech</span>
                <span>FractalDB Grounding</span>
                <span>Policy Guardrails</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Visual & Execution Trace */}
          <div className="agent-terminal-card glass-panel">
            {/* Dynamic Architecture Visual Showcase */}
            <div className="ai-visual-viewport" key={`visual-${activeTab}`}>
              <img
                src={currentEngine.image}
                alt={currentEngine.name}
                className="ai-visual-img"
              />
              <div className="ai-visual-overlay">
                <span className="ai-visual-badge">
                  <i className="fa-solid fa-microchip"></i>
                  <span>{currentEngine.badge}</span>
                </span>
                <p className="ai-visual-caption">{currentEngine.imageCaption}</p>
              </div>
            </div>

            <div className="terminal-topbar">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="terminal-title">{currentEngine.terminalTitle}</span>
              <span className="terminal-status">● AGENT READY</span>
            </div>

            <div className="terminal-content" key={`term-${activeTab}`}>
              <div className="terminal-banner">
                <span>{currentEngine.banner}</span>
              </div>

              <div className="trace-list">
                {currentEngine.trace.map((step, idx) => (
                  <div className={`trace-item trace-${step.type}`} key={idx}>
                    <span className="trace-idx">0{idx + 1}</span>
                    <span className="trace-text">{step.text}</span>
                  </div>
                ))}
              </div>

              <div className="terminal-prompt-line">
                <span className="prompt-sym">{activeTab} &gt;</span>
                <span className="prompt-cursor">_</span>
              </div>
            </div>

            <div className="terminal-footer">
              <div className="terminal-telemetry">
                {currentEngine.telemetry.map((t, idx) => (
                  <span key={idx}>{t.label}: <strong>{t.value}</strong></span>
                ))}
              </div>
              <Link to={`/solutions/${currentEngine.slug}`} className="btn-terminal-link">
                <span>Deploy {currentEngine.name.split(" ")[0]}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
