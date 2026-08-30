import React, { useState } from "react";
import { VIBE_PRINCIPLES } from "../../data/data.architecture";
import "./IntentVibeSection.css";

interface IntentDemoMode {
  id: string;
  name: string;
  badge: string;
  inputUlsx: string;
  synthesizedGraph: {
    nodesCount: number;
    gardenReuse: string;
    lockHash: string;
    verification: string;
    runtime: string;
  };
  narrative: string;
}

const INTENT_MODES: IntentDemoMode[] = [
  {
    id: "fintech",
    name: "UniFi: Multi-Currency Settlement Intent",
    badge: "FinTech & Banking",
    inputUlsx: `intent UniFi_Settlement {
  domain: "Banking Operations"
  invariant: "Zero Unbalanced Journals"
  
  feed Ingest(ISO_20022_Stream) {
    match: FuzzyAccountMatcher
    reconcile: Kitchen.Recipe("ledger_sync")
  }
  
  policy Authorization {
    threshold: $100,000 USD
    require: [MultiSig(CFO_Key, Treasury_Key), Jigsaw.Proof(ADR_001)]
    settle_head: FractalDB.Commit(Spacetime.FTime)
  }
}`,
    synthesizedGraph: {
      nodesCount: 14,
      gardenReuse: "92% (Garden: @i2c/ledger-core, @i2c/jigsaw-zk)",
      lockHash: "blake3://8f4019a...7c9b2e",
      verification: "ADR-001 ZK Proof (Deterministic)",
      runtime: "LongCell Sandbox <8ms"
    },
    narrative: "Declaring business constraints in ULSX enables the compiler to automatically synthesize banking connectors, fuzzy matching algorithms, and cryptographic multi-sig approval gates with zero human boilerplate drift."
  },
  {
    id: "database",
    name: "FractalDB: Multi-Reality Spacetime Intent",
    badge: "Persistence Core",
    inputUlsx: `intent Spacetime_Branch {
  target: "FractalDB://production/head"
  reality: "simulation_market_shock_2026"
  
  branch_policy {
    isolation: CopyOnWrite(LamportClock)
    mutation_cap: 1,000,000 writes/sec
    verify: MerkleDAG.RootHash(BLAKE3)
  }
  
  agent_swarm {
    runner: MinhAI(LocalSLM)
    memory_limit: 1.8 GB VRAM
    on_complete: ReconcileOrDiscard(Policy.ZeroDrift)
  }
}`,
    synthesizedGraph: {
      nodesCount: 8,
      gardenReuse: "88% (Garden: @i2c/merkle-dag, @i2c/long-vm)",
      lockHash: "blake3://4a10e7...d931ac",
      verification: "Lamport-Ordered Total Sequence Proof",
      runtime: "Long Runtime (Polymorphic WASM)"
    },
    narrative: "Creates an instantaneous, zero-copy parallel reality branch for AI agent exploration. The system tests millions of market scenarios without risking production data integrity."
  },
  {
    id: "developer",
    name: "Shai & MinhAI: Autonomous Code Synthesis",
    badge: "Developer Toolchain",
    inputUlsx: `intent Synthesize_Feature {
  context: Shai.CPG("ast://repo/auth_service")
  specification: "Add biometric WebAuthn verification endpoint"
  
  constraints {
    memory_safety: Enforced(RustSafe)
    benchmark: Latency < 5ms
    tests: AutoGenerate(InvariantCoverage >= 98%)
  }
  
  lock {
    provenance: Jigsaw.Sign(Author_Fingerprint)
    emit: LockedBuildArtifact("dist/auth.wasm")
  }
}`,
    synthesizedGraph: {
      nodesCount: 22,
      gardenReuse: "95% (Garden: @i2c/webauthn-rs, @i2c/tree-sitter-cpg)",
      lockHash: "blake3://11cc78...90eb34",
      verification: "LongGuard Sandboxed Test Pass (100%)",
      runtime: "Native Rust & WASM"
    },
    narrative: "Translates high-level feature requirements into precise Codebase Property Graph AST mutations, verified by sandboxed unit tests and sealed with cryptographic provenance."
  }
];

export default function IntentVibeSection() {
  const [selectedMode, setSelectedMode] = useState<number>(0);
  const [selectedPrinciple, setSelectedPrinciple] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentMode = INTENT_MODES[selectedMode];

  return (
    <section className="section vibe-intent-section" id="vibe">
      <div className="container">
        {/* Section Header */}
        <div className="section-heading">
          <div className="section-eyebrow">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <span>The Intent Manifesto &bull; Computable Software Paradigm</span>
          </div>
          <h2 className="title is-2 vibe-section-title">
            Eliminating Software Drift: <span className="gradient-text">Intent is the Truth</span>, Code is a Locked Build Artifact
          </h2>
          <p className="subtitle is-5 vibe-section-subtitle">
            Traditional enterprise software delivery treats intent as ambiguous prose specifications, re-interpreted at every human handoff. 
            <strong> i2c compiles intent directly into verifiable mathematical graphs.</strong>
          </p>
        </div>

        {/* ═══ 1. INTERACTIVE LIVE INTENT PLAYGROUND (1/3 SCREEN UX) ═══ */}
        <div className="vibe-interactive-playground glass-panel">
          <div className="playground-top-bar">
            <div className="playground-title-row">
              <span className="terminal-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </span>
              <span className="playground-mode-title">Interactive Intent-to-Graph Synthesis Compiler</span>
            </div>

            {/* Mode Switcher */}
            <div className="intent-mode-pills">
              {INTENT_MODES.map((mode, idx) => (
                <button
                  key={mode.id}
                  className={`intent-mode-pill ${selectedMode === idx ? "is-active" : ""}`}
                  onClick={() => setSelectedMode(idx)}
                >
                  <span>{mode.badge}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="playground-main-split">
            {/* Left: Intent Specification Editor */}
            <div className="playground-left-editor">
              <div className="editor-pane-header">
                <div className="editor-file-tab">
                  <i className="fa-solid fa-file-code text-blue"></i>
                  <span>intent_specification.ulsx</span>
                </div>
                <span className="editor-lang-tag">ULSX / HyperGraphDSL</span>
              </div>
              <pre className="intent-code-block">
                <code>{currentMode.inputUlsx}</code>
              </pre>
              <div className="editor-narrative-box">
                <i className="fa-solid fa-circle-info text-blue"></i>
                <p>{currentMode.narrative}</p>
              </div>
            </div>

            {/* Center: Compiler Pipeline Indicator */}
            <div className="playground-center-pipeline">
              <div className="pipeline-line"></div>
              <div className="pipeline-node node-active" onClick={() => setActiveStep(1)}>
                <i className="fa-solid fa-pen-nib"></i>
                <span>1. Draft</span>
              </div>
              <div className="pipeline-node node-active" onClick={() => setActiveStep(2)}>
                <i className="fa-solid fa-brain"></i>
                <span>2. Plan</span>
              </div>
              <div className="pipeline-node node-active" onClick={() => setActiveStep(3)}>
                <i className="fa-solid fa-lock"></i>
                <span>3. Lock</span>
              </div>
            </div>

            {/* Right: Synthesized Verified Output Graph */}
            <div className="playground-right-output">
              <div className="editor-pane-header">
                <div className="editor-file-tab">
                  <i className="fa-solid fa-cube text-emerald"></i>
                  <span>Synthesized Build Receipt</span>
                </div>
                <span className="status-badge-verified">
                  <i className="fa-solid fa-shield-check"></i>
                  <span>100% Verified</span>
                </span>
              </div>

              <div className="synthesized-specs-list">
                <div className="spec-item-box">
                  <span className="spec-label">Target Component</span>
                  <strong className="spec-value text-blue">{currentMode.name}</strong>
                </div>

                <div className="spec-item-box">
                  <span className="spec-label">Garden Subgraph Reuse</span>
                  <strong className="spec-value text-emerald">{currentMode.synthesizedGraph.gardenReuse}</strong>
                </div>

                <div className="spec-item-box">
                  <span className="spec-label">Tamper-Proof Content Hash</span>
                  <code className="spec-hash-code">{currentMode.synthesizedGraph.lockHash}</code>
                </div>

                <div className="spec-item-box">
                  <span className="spec-label">Verification Membrane</span>
                  <strong className="spec-value">{currentMode.synthesizedGraph.verification}</strong>
                </div>

                <div className="spec-item-box">
                  <span className="spec-label">Execution Latency</span>
                  <strong className="spec-value text-purple">{currentMode.synthesizedGraph.runtime}</strong>
                </div>
              </div>

              <div className="playground-output-footer">
                <i className="fa-solid fa-fingerprint text-blue"></i>
                <span>Cryptographic Proof ADR-001 Signed by Jigsaw Runtime</span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 2. THE 3 CANONICAL LIFECYCLE PILLARS ═══ */}
        <div className="lifecycle-cards-grid">
          <div className="lifecycle-card glass-panel">
            <div className="lifecycle-step-badge">01. DRAFT SPECIFICATION</div>
            <div className="lifecycle-icon-wrap">
              <i className="fa-solid fa-diagram-project"></i>
            </div>
            <h3 className="lifecycle-title">Intent as a Formal Graph</h3>
            <p className="lifecycle-desc">
              Domain architects declare concise business rules in ULSX. Underspecified degrees of freedom are resolved via reasoned domain defaults, not silent implementation gaps.
            </p>
            <div className="lifecycle-meta">
              <span>Format:</span> <code>ULSX / HyperGraphSchema</code>
            </div>
          </div>

          <div className="lifecycle-card glass-panel">
            <div className="lifecycle-step-badge step-plan">02. VERIFIED PLANNING</div>
            <div className="lifecycle-icon-wrap icon-plan">
              <i className="fa-solid fa-microchip"></i>
            </div>
            <h3 className="lifecycle-title">Autonomous Subgraph Assembly</h3>
            <p className="lifecycle-desc">
              Reasoning engines (MinhAI &amp; HyperAI) match intent hyperedges against verified, pre-tested Garden components, achieving 80–90% immediate architectural reuse.
            </p>
            <div className="lifecycle-meta">
              <span>Efficiency:</span> <code>80-90% Component Reuse</code>
            </div>
          </div>

          <div className="lifecycle-card glass-panel">
            <div className="lifecycle-step-badge step-lock">03. IMMUTABLE LOCK</div>
            <div className="lifecycle-icon-wrap icon-lock">
              <i className="fa-solid fa-lock-keyhole"></i>
            </div>
            <h3 className="lifecycle-title">Cryptographic Build Artifact</h3>
            <p className="lifecycle-desc">
              The compiled plan is sealed with content-addressed BLAKE3 hashes and Jigsaw-signed execution receipts, preventing undocumented code drift across enterprise environments.
            </p>
            <div className="lifecycle-meta">
              <span>Auditability:</span> <code>100% CAS Provenance</code>
            </div>
          </div>
        </div>

        {/* ═══ 3. TEN ARCHITECTURAL LAWS INTERACTIVE SELECTOR ═══ */}
        <div className="vibe-principles-container glass-panel">
          <div className="principles-header">
            <div>
              <span className="principles-eyebrow">Enterprise Governance Principles</span>
              <h3 className="title is-4 principles-title">Ten Architectural Laws for Mission-Critical Systems</h3>
            </div>
            <span className="principles-counter">{VIBE_PRINCIPLES.length} Foundational Principles</span>
          </div>

          <div className="principles-matrix-grid">
            <div className="principles-list">
              {VIBE_PRINCIPLES.map((item, idx) => (
                <div
                  key={item.num}
                  className={`principle-row ${selectedPrinciple === idx ? "is-active" : ""}`}
                  onClick={() => setSelectedPrinciple(idx)}
                >
                  <span className="principle-num">{item.num}</span>
                  <span className="principle-name">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="principle-active-card">
              <div className="active-card-top">
                <span className="active-card-num">Principle {VIBE_PRINCIPLES[selectedPrinciple].num}</span>
                <span className="active-card-badge">Enterprise Standard</span>
              </div>
              <h4 className="active-card-title">{VIBE_PRINCIPLES[selectedPrinciple].title}</h4>
              <p className="active-card-desc">{VIBE_PRINCIPLES[selectedPrinciple].desc}</p>
              
              <div className="active-card-contrast-grid">
                <div className="contrast-box traditional-box">
                  <span className="contrast-label text-danger">Traditional Legacy Flaw</span>
                  <p className="contrast-text">Unchecked prose specifications lead to assumptions, code drift, and fragile manual testing.</p>
                </div>
                <div className="contrast-box i2c-box">
                  <span className="contrast-label text-blue">The i2c Guarantee</span>
                  <p className="contrast-text">Enforced deterministically by HyperGraph AST traversal and Jigsaw policy membranes.</p>
                </div>
              </div>

              <div className="active-card-impact">
                <i className="fa-solid fa-shield-check text-blue"></i>
                <span>Mathematically verifiable against declared invariant constraints in O(1) time.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
