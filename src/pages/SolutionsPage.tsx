import React, { useState } from "react";
import { Link } from "react-router-dom";
import myServices from "../data/data.services";
import { ARCHITECTURE_LAYERS } from "../data/data.architecture";
import RotatingProductImage from "../components/common/RotatingProductImage";
import "./SolutionsPage.css";

interface ManifestoLaw {
  num: string;
  title: string;
  tagline: string;
  thesis: string;
  invariant: string;
  legacyFlaw: string;
  i2cGuarantee: string;
  substrates: string[];
}

const MANIFESTO_LAWS: ManifestoLaw[] = [
  {
    num: "01",
    title: "Intent is the Single Source of Truth",
    tagline: "Code, UI, and Infrastructure are Derived, Locked Build Artifacts",
    thesis: "Traditional software engineering mistakenly treats hand-written code as the ultimate source of truth, forcing engineers to reverse-engineer business intent from fragmented repositories and pull requests. In the i2c paradigm, declared intent graphs in ULSX precede all code generation, establishing a formal mathematical specification that is never allowed to drift.",
    invariant: "∀ State ∈ System, State ≡ Compile(ULSX_Intent, Garden_Registry)",
    legacyFlaw: "Ambiguous Jira tickets and Google Docs specs lose fidelity at every engineering handoff.",
    i2cGuarantee: "Intent is authored as a computable AST graph, verified by compiler checks before any code is generated.",
    substrates: ["HyperGraph", "i2c-Forge", "Quang"]
  },
  {
    num: "02",
    title: "Unstated is Freedom, Not Ambiguity",
    tagline: "Undefined Degrees of Freedom are Resolved by Domain Defaults",
    thesis: "When a traditional specification omits a detail, developers make random guesses or stop work. In the computable intent paradigm, underspecified degrees of freedom are explicitly classified as mathematical degrees of freedom—allowing the synthesis engine to inject optimal, battle-tested domain defaults from the Garden registry.",
    invariant: "Unspecified(Param) ⇒ Apply(Garden.DefaultInvariant(Param))",
    legacyFlaw: "Silent developer assumptions introduce security holes, edge-case bugs, and brittle behavior.",
    i2cGuarantee: "Autonomous reasoning engines (MinhAI) bind provably correct defaults with verifiable receipts.",
    substrates: ["MinhAI", "Garden", "Shai"]
  },
  {
    num: "03",
    title: "Every Decision Carries a Reason (Why)",
    tagline: "Provenance and Architectural Rationale are First-Class Metadata",
    thesis: "Codebases accumulate thousands of lines of legacy code whose original purpose is forgotten. Every architectural mutation in i2c requires a cryptographically signed rationale ticket linking back to the business intent node, preventing 'chesterton's fence' regressions.",
    invariant: "Commit.Sign(Rationale_Hash) ∧ Jigsaw.Verify(ADR_001)",
    legacyFlaw: "Git blame only shows who touched a line, never the holistic business reasoning why.",
    i2cGuarantee: "Every bytecode artifact carries a cryptographic Jigsaw receipt documenting exact decision provenance.",
    substrates: ["Jigsaw", "Quang", "FractalDB"]
  },
  {
    num: "04",
    title: "Structural Uncertainty Demands Multi-Reality Simulation",
    tagline: "Explore Infinite Parallel Realities with Zero Production Risk",
    thesis: "AI agents cannot be trusted on single-timeline production databases. FractalDB enables copy-on-write Spacetime reality branching, allowing swarms of autonomous agents to test millions of speculative actions across isolated realities before committing.",
    invariant: "Branch(Reality_A) ∥ Branch(Reality_B), State(Prod) = Unmutated",
    legacyFlaw: "Testing AI decisions in staging creates state contamination and slow feedback loops.",
    i2cGuarantee: "O(1) instant Spacetime branching in FractalDB enables safe parallel multi-reality exploration.",
    substrates: ["FractalDB", "Long Runtime", "Fly"]
  },
  {
    num: "05",
    title: "Intent &rarr; Action &rarr; Effect (IAE Closed Loop)",
    tagline: "Deterministic Execution with Mathematical Feedback Verification",
    thesis: "Software must operate as a closed-loop control system. Every declared intent produces an action, which emits measurable state effects that are continually compared against the original invariant constraints.",
    invariant: "Effect(Action(Intent)) ≡ TargetState ± ε",
    legacyFlaw: "Deployments succeed technically while silently corrupting business metrics.",
    i2cGuarantee: "Kitchen event streaming continuously validates runtime effects against declared intent models.",
    substrates: ["Kitchen", "Uploop", "Jigsaw"]
  },
  {
    num: "06",
    title: "Compose Before Create (80–90% Reuse Law)",
    tagline: "Re-Inventing the Wheel is an Architectural Anti-Pattern",
    thesis: "Over 80% of enterprise boilerplate (auth, CRUD, billing, routing, serialization) has already been solved. The synthesis engine prioritizes subgraph matching against pre-tested Garden components, restricting new code synthesis strictly to novel business logic.",
    invariant: "ReuseRatio = (Garden_Nodes / Total_Nodes) ≥ 0.80",
    legacyFlaw: "Teams waste months re-writing authentication, database adapters, and UI scaffolding.",
    i2cGuarantee: "Instant assembly of verified Garden components reduces time-to-production from months to hours.",
    substrates: ["Garden", "i2c-Forge", "DevPlatform"]
  },
  {
    num: "07",
    title: "Cost is a First-Class Architectural Dial",
    tagline: "Compute, Token, and Storage Budgets are Hard Constraints",
    thesis: "Unbounded cloud spend and runaway LLM token bills are architectural failures. In i2c, resource budgets (memory, FLOPS, tokens, latency) are declared directly in the ULSX schema, causing the compiler to optimize data structures and execution runtimes accordingly.",
    invariant: "Execution_Cost ≤ Declared_Budget(ULSX)",
    legacyFlaw: "Cloud costs skyrocket unexpectedly due to unoptimized database joins and massive LLM calls.",
    i2cGuarantee: "MinhAI edge SLMs (<2GB VRAM) and O(1) CAS deduplication enforce strict resource ceilings.",
    substrates: ["MinhAI", "Fluid", "Long Runtime"]
  },
  {
    num: "08",
    title: "Canonical Graphs, Plural Syntaxes",
    tagline: "Syntax is Ephemeral, the Underlying AST Graph is Eternal",
    thesis: "Developers argue endlessly over programming languages and UI frameworks. In i2c, syntax is merely a serialized projection of the underlying HyperGraph AST. A developer can view code in TypeScript, Rust, or visual node graphs while operating on the exact same canonical state.",
    invariant: "Projection(Graph, TypeScript) ≅ Projection(Graph, Rust) ≅ Projection(Graph, VisualNode)",
    legacyFlaw: "Rewriting applications in new frameworks requires painful manual porting and introduces bugs.",
    i2cGuarantee: "Polyglot compilation via Long Runtime and RsTs translates intent into any target runtime effortlessly.",
    substrates: ["HyperGraph", "RsTs", "Long Runtime"]
  },
  {
    num: "09",
    title: "Continuous Verification Over Post-Hoc Testing",
    tagline: "Correctness is Proven Mathematically at Compile Time",
    thesis: "Unit tests only check the scenarios a human engineer remembered to write. Continuous verification analyzes full graph invariants, typing constraints, and security membranes mathematically before code is ever locked into build artifacts.",
    invariant: "Verify(Artifact) ≡ True ∀ Inputs ∈ Invariant_Domain",
    legacyFlaw: "Hidden edge-case regressions bypass shallow test suites and surface in production.",
    i2cGuarantee: "Jigsaw ADR-001 canonical CBOR evidence verification guarantees total invariant adherence.",
    substrates: ["Jigsaw", "CyOp", "Long Runtime"]
  },
  {
    num: "10",
    title: "Immutable Lock Ceremonies",
    tagline: "Zero-Trust Sealed Artifacts with Content-Addressed Provenance",
    thesis: "Once a build passes all verification gates, it undergoes an immutable lock ceremony: the entire dependency graph, bytecode, and schema are hashed via BLAKE3 and anchored into FractalDB with signed cryptographic keys. No hot-patching or silent drift is physically possible.",
    invariant: "Lock(Artifact) = BLAKE3(AST + Bytecode + Receipts)",
    legacyFlaw: "Configuration drift between staging and production causes silent deployment failures.",
    i2cGuarantee: "Content-addressed CAS artifacts ensure bit-for-bit reproducible execution worldwide.",
    substrates: ["Fluid", "FractalDB", "Jigsaw"]
  }
];

export default function SolutionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"catalog" | "architecture" | "manifesto">("catalog");
  const [selectedManifestoLaw, setSelectedManifestoLaw] = useState<number>(0);

  const categories = [
    { id: "all", label: "All (36)", icon: "fa-solid fa-border-all" },
    { id: "enterprise", label: "Enterprise Solutions (15)", icon: "fa-solid fa-city" },
    { id: "substrates", label: "Core Substrates (4)", icon: "fa-solid fa-database" },
    { id: "runtime-ai", label: "AI & Runtimes (10)", icon: "fa-solid fa-brain" },
    { id: "dev-trust", label: "Trust & Dev (7)", icon: "fa-solid fa-shield-halved" }
  ];

  const architectureHotspots = [
    { id: "enterprise", name: "Quang & Enterprise Solutions", tag: "Layer 4 & 7: Apps", desc: "15 Enterprise Vertical Platforms", filter: "enterprise" },
    { id: "minh", name: "MinhAI & Cognitive Memory", tag: "Layer 3: Intelligence", desc: "Local Edge SLMs in <2GB VRAM", filter: "runtime-ai" },
    { id: "hyper", name: "HyperGraph & HyperAI", tag: "Layer 3 & 6: Execution", desc: "Universal Graph Schema & Tensor Cores", filter: "substrates" },
    { id: "fluid", name: "Fluid CAS Freezer", tag: "Layer 6: Flow", desc: "Content-Addressed Block Storage", filter: "substrates" },
    { id: "fractal", name: "FractalDB Spacetime", tag: "Layer 6: Shape", desc: "Distributed Lamport Clock Database", filter: "substrates" },
    { id: "trust", name: "Jigsaw & Rings Mesh", tag: "Layer 5: Governance", desc: "Zero-Knowledge ADR-001 Verification", filter: "dev-trust" }
  ];

  const enterpriseServices = myServices.services.filter((s) => s.category === "apps" || s.category === "enterprise");
  const substrateServices = myServices.services.filter((s) => s.category === "substrates");
  const aiRuntimeServices = myServices.services.filter((s) => s.category === "runtimes" || s.category === "runtime-ai");
  const devTrustServices = myServices.services.filter((s) => s.category === "tools" || s.category === "dev-trust");

  const filterMatches = (item: typeof myServices.services[0]) => {
    const matchesCat =
      activeCategory === "all" ||
      item.category === activeCategory ||
      (activeCategory === "enterprise" && item.category === "apps") ||
      (activeCategory === "runtime-ai" && item.category === "runtimes") ||
      (activeCategory === "dev-trust" && item.category === "tools");

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tech.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.layerName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  };

  const renderGroup = (title: string, icon: string, items: typeof myServices.services, categoryId: string) => {
    const filtered = items.filter(filterMatches);
    if (filtered.length === 0) return null;

    return (
      <section className="solutions-group-block" id={`group-${categoryId}`} key={categoryId}>
        <div className="group-header">
          <div className="group-title-row">
            <i className={icon}></i>
            <h2 className="title is-4 group-title">{title}</h2>
            <span className="group-count-badge">{filtered.length} Systems</span>
          </div>
          <p className="group-desc">
            {categoryId === "enterprise" && "Turnkey platforms for ERP, BI, FinTech, LearnTech, Logistics, Real Estate, and CRM."}
            {categoryId === "substrates" && "Deterministic Spacetime databases, content-addressed block storage, and generative middleware."}
            {categoryId === "runtime-ai" && "Quantized local edge SLMs, compiler toolchains, cluster GPU kernels, and speech transcription."}
            {categoryId === "dev-trust" && "Cryptographic zero-knowledge verification, P2P mesh networking, and internal developer platforms."}
          </p>
        </div>

        <div className="solutions-cards-grid">
          {filtered.map((service) => (
            <Link to={`/solutions/${service.slug}`} key={service.slug} className="sol-card-link">
              <article className="sol-component-card glass-panel">
                <div className="sol-card-top-header">
                  <div className="sol-icon-frame">
                    <img src={service.logoUrl} alt={service.title} className="sol-icon-svg" />
                  </div>
                  <div className="sol-title-wrap">
                    <h3 className="sol-card-title">{service.title}</h3>
                    <span className={`tag-layer tag-layer-l${service.layer} sol-layer-tag`}>
                      L{service.layer}: {service.layerName}
                    </span>
                  </div>
                </div>

                <div className="sol-art-preview">
                  <RotatingProductImage slug={service.slug} alt={service.title} className="sol-art-img" showIndicator={true} />
                </div>

                <div className="sol-card-body">
                  <p className="sol-card-desc">{service.description}</p>
                </div>

                <div className="sol-card-footer">
                  <span className="sol-tech-label">{service.categoryLabel}</span>
                  <div className="sol-inspect-cta">
                    <span>Detail</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    );
  };

  const activeLaw = MANIFESTO_LAWS[selectedManifestoLaw];

  return (
    <div className="solutions-page-wrap">
      {/* Solutions Top Hero */}
      <section className="section solutions-hero-section">
        <div className="container">
          <div className="solutions-hero-header">
            <div className="section-eyebrow">
              <i className="fa-solid fa-microchip"></i>
              <span>Technical Platform &bull; Architecture &bull; Catalog</span>
            </div>
            <h1 className="title is-1 solutions-page-title">
              Solutions &amp; <span className="gradient-text">Technical Architecture</span>
            </h1>
            <p className="subtitle is-5 solutions-page-subtitle">
              Explore the Enterprise Substrates, Intent Manifesto, and the 36-product enterprise catalog.
            </p>

            {/* Navigation Tabs */}
            <div className="solutions-main-tabs">
              <button
                className={`sol-main-tab ${activeTab === "catalog" ? "is-active" : ""}`}
                onClick={() => setActiveTab("catalog")}
              >
                <i className="fa-solid fa-cubes"></i>
                <span>Products &amp; Substrates Catalog</span>
              </button>
              <button
                className={`sol-main-tab ${activeTab === "architecture" ? "is-active" : ""}`}
                onClick={() => setActiveTab("architecture")}
              >
                <i className="fa-solid fa-layer-group"></i>
                <span>Substrate Architecture</span>
              </button>
              <button
                className={`sol-main-tab ${activeTab === "manifesto" ? "is-active" : ""}`}
                onClick={() => setActiveTab("manifesto")}
              >
                <i className="fa-solid fa-scroll"></i>
                <span>Intent Manifesto &amp; Vibe</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container solutions-body-container">
        {/* TAB 1: CATALOG & HLD DIAGRAM */}
        {activeTab === "catalog" && (
          <div className="solutions-catalog-view">
            {/* Interactive High-Level Architecture Diagram Frame */}
            <div className="solutions-hld-card glass-panel">
              <div className="hld-card-topbar">
                <div className="hld-topbar-title">
                  <i className="fa-solid fa-diagram-project text-blue"></i>
                  <h2 className="hld-title-big">High-Level Architecture &amp; Ecosystem Map</h2>
                </div>
              </div>

              <div className="hld-image-wrap">
                <img
                  src="/images/slides/slide_01_architecture.png"
                  alt="i2c Nextgen Ecosystem Architecture"
                  className="hld-img"
                />
              </div>

              <div className="hld-hotspot-buttons">
                {architectureHotspots.map((spot) => (
                  <div
                    key={spot.id}
                    className={`hld-spot-box ${activeCategory === spot.filter ? "is-active" : ""}`}
                    onClick={() => {
                      setActiveCategory(spot.filter);
                      const el = document.getElementById(`group-${spot.filter}`);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="spot-tag">{spot.tag}</span>
                    <h4 className="spot-name">{spot.name}</h4>
                    <p className="spot-desc">{spot.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Search & Filter Bar */}
            <div className="solutions-search-bar">
              <div className="search-input-wrap">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Search products, substrates, or tech stack..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="solutions-search-input"
                />
                {searchQuery && (
                  <button className="search-clear-btn" onClick={() => setSearchQuery("")}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}
              </div>

              <div className="solutions-category-pills">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`cat-pill ${activeCategory === cat.id ? "is-active" : ""}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <i className={cat.icon}></i>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Categorized Directory Groups */}
            <div className="solutions-catalog-groups">
              {renderGroup("Enterprise Platforms & Vertical Solutions", "fa-solid fa-city", enterpriseServices, "enterprise")}
              {renderGroup("Core Data Substrates & Middleware", "fa-solid fa-database", substrateServices, "substrates")}
              {renderGroup("AI Engines & Execution Runtimes", "fa-solid fa-brain", aiRuntimeServices, "runtime-ai")}
              {renderGroup("Trust, Governance & Developer Toolchains", "fa-solid fa-shield-halved", devTrustServices, "dev-trust")}
            </div>
          </div>
        )}

        {/* TAB 2: 7-LAYER ARCHITECTURE */}
        {activeTab === "architecture" && (
          <div className="solutions-architecture-view glass-panel">
            <div className="arch-view-header">
              <h2 className="title is-3">The 7-Layer Machine Architecture</h2>
              <p className="arch-view-subtitle">
                An integrated, verifiable platform designed from bare-metal persistence up to intelligent client surfaces.
              </p>
            </div>

            <div className="arch-layers-vertical-list">
              {ARCHITECTURE_LAYERS.map((layer) => (
                <article key={layer.id} className="arch-layer-card">
                  <div className="arch-layer-header-row">
                    <div className="layer-badge-wrap">
                      <span className="layer-num-badge">L{layer.level}</span>
                      <h3 className="layer-title">{layer.name}</h3>
                    </div>
                    <span className="layer-tagline">{layer.tagline}</span>
                  </div>

                  <p className="layer-description">{layer.description}</p>

                  <div className="layer-components-grid">
                    {layer.components.map((comp) => (
                      <div key={comp.name} className="layer-comp-item">
                        <div className="comp-item-header">
                          <h4 className="comp-name">{comp.name}</h4>
                          <span className="comp-tech">Verified Substrate</span>
                        </div>
                        <p className="comp-desc">{comp.description}</p>
                        {comp.slug && (
                          <Link to={`/solutions/${comp.slug}`} className="comp-link">
                            <span>Detail</span>
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: THE COMPREHENSIVE INTENT MANIFESTO & VIBE PARADIGM */}
        {activeTab === "manifesto" && (
          <div className="solutions-manifesto-view">
            {/* 1. Manifesto Hero Banner */}
            <div className="manifesto-executive-hero glass-panel">
              <div className="manifesto-hero-eyebrow">
                <i className="fa-solid fa-scroll text-blue"></i>
                <span>Foundational Manifesto &bull; Computable Software Engineering</span>
              </div>
              <h2 className="title is-2 manifesto-hero-title">
                The Intent Manifesto: <span className="gradient-text">From Ambiguous Prose to Computable Graphs</span>
              </h2>
              <p className="manifesto-hero-lead">
                For over fifty years, the software industry has treated specifications as informal prose written in English or markdown, re-interpreted with compounding error at every human handoff. 
                <strong> The i2c Vibe Paradigm establishes software as a deterministic, mathematically verifiable graph</strong>—where intent is the single source of truth and executable code is merely a locked build artifact.
              </p>

              <div className="manifesto-formula-strip">
                <div className="formula-box">
                  <span className="formula-lbl">Formal Synthesis Equation</span>
                  <code className="formula-math">Intent(ULSX) &xrarr; Autonomous_Plan(Garden) &xrarr; Verified_Lock(BLAKE3 + Jigsaw)</code>
                </div>
                <div className="formula-badge">
                  <i className="fa-solid fa-shield-check text-emerald"></i>
                  <span>Zero Code Drift &bull; 100% Deterministic</span>
                </div>
              </div>
            </div>

            {/* 2. The 3 Canonical Lifecycle Stages */}
            <div className="manifesto-pillars-grid">
              <div className="manifesto-pillar-card glass-panel">
                <div className="pillar-num-badge">STAGE 01</div>
                <h3 className="pillar-title">Draft as a Formal Graph</h3>
                <p className="pillar-desc">
                  Domain architects declare business rules, data schemas, and invariant boundaries in ULSX grammar. Underspecified degrees of freedom are treated as explicit degrees of freedom—resolved by verified domain defaults rather than silent developer assumptions.
                </p>
                <div className="pillar-feature-list">
                  <div className="p-feat"><i className="fa-solid fa-check text-blue"></i><span>ULSX / HyperGraph AST Schema</span></div>
                  <div className="p-feat"><i className="fa-solid fa-check text-blue"></i><span>Explicit Mathematical Invariants</span></div>
                </div>
              </div>

              <div className="manifesto-pillar-card glass-panel">
                <div className="pillar-num-badge pillar-num-plan">STAGE 02</div>
                <h3 className="pillar-title">Autonomous Subgraph Assembly</h3>
                <p className="pillar-desc">
                  Cognitive reasoning engines (MinhAI &amp; HyperAI) match intent hyperedges against pre-tested Garden components, achieving 80–90% immediate architectural reuse. Novel logic is synthesized inside isolated LongCell sandboxes with continuous invariant verification.
                </p>
                <div className="pillar-feature-list">
                  <div className="p-feat"><i className="fa-solid fa-check text-purple"></i><span>80-90% Pre-Tested Garden Reuse</span></div>
                  <div className="p-feat"><i className="fa-solid fa-check text-purple"></i><span>Multi-Reality Sandboxed Verification</span></div>
                </div>
              </div>

              <div className="manifesto-pillar-card glass-panel">
                <div className="pillar-num-badge pillar-num-lock">STAGE 03</div>
                <h3 className="pillar-title">Cryptographic Lock Ceremony</h3>
                <p className="pillar-desc">
                  Once all invariant tests pass, the compiled system is sealed with content-addressed BLAKE3 hashes and Jigsaw ADR-001 ZK Proof receipts. The resulting build artifact is permanently anchored into FractalDB Spacetime with complete cryptographic provenance.
                </p>
                <div className="pillar-feature-list">
                  <div className="p-feat"><i className="fa-solid fa-check text-emerald"></i><span>BLAKE3 Content-Addressed Hash</span></div>
                  <div className="p-feat"><i className="fa-solid fa-check text-emerald"></i><span>Jigsaw ADR-001 ZK Proof Receipt</span></div>
                </div>
              </div>
            </div>

            {/* 3. The 10 Architectural Laws of Intent (Exhaustive Interactive Reference) */}
            <div className="manifesto-laws-master-card glass-panel">
              <div className="laws-master-header">
                <div>
                  <span className="laws-eyebrow">Enterprise Governance Reference</span>
                  <h3 className="title is-3 laws-title">Ten Architectural Laws for Mission-Critical Systems</h3>
                </div>
                <span className="laws-count-pill">10 Comprehensive Laws</span>
              </div>

              <div className="laws-interactive-layout">
                {/* Left: Law Selector List */}
                <div className="laws-selector-sidebar">
                  {MANIFESTO_LAWS.map((law, idx) => (
                    <button
                      key={law.num}
                      className={`law-select-btn ${selectedManifestoLaw === idx ? "is-active" : ""}`}
                      onClick={() => setSelectedManifestoLaw(idx)}
                    >
                      <span className="law-btn-num">{law.num}</span>
                      <div className="law-btn-text">
                        <strong className="law-btn-title">{law.title}</strong>
                        <span className="law-btn-tagline">{law.tagline}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Right: Deep Architectural Law Dossier */}
                <div className="law-deep-dossier">
                  <div className="dossier-header-row">
                    <div className="dossier-badge-row">
                      <span className="dossier-num-badge">Law {activeLaw.num}</span>
                      <span className="dossier-status-pill">
                        <i className="fa-solid fa-circle-check"></i>
                        <span>Enforceable Standard</span>
                      </span>
                    </div>
                    <div className="dossier-substrates-row">
                      <span className="sub-lbl">Enforcing Substrates:</span>
                      {activeLaw.substrates.map((s) => (
                        <span key={s} className="sub-chip">{s}</span>
                      ))}
                    </div>
                  </div>

                  <h3 className="title is-3 dossier-title">{activeLaw.title}</h3>
                  <p className="dossier-tagline">{activeLaw.tagline}</p>

                  <div className="dossier-thesis-box">
                    <h4 className="thesis-heading">Architectural Thesis &amp; Governance Rationale</h4>
                    <p className="thesis-text">{activeLaw.thesis}</p>
                  </div>

                  <div className="dossier-invariant-box">
                    <span className="inv-label">Mathematical Invariant Expression</span>
                    <code className="inv-code">{activeLaw.invariant}</code>
                  </div>

                  <div className="dossier-contrast-grid">
                    <div className="dossier-contrast-col legacy-col">
                      <div className="col-head">
                        <i className="fa-solid fa-triangle-exclamation text-danger"></i>
                        <h4>The Legacy Software Trap</h4>
                      </div>
                      <p>{activeLaw.legacyFlaw}</p>
                    </div>

                    <div className="dossier-contrast-col i2c-col">
                      <div className="col-head">
                        <i className="fa-solid fa-shield-check text-blue"></i>
                        <h4>The i2c Mathematical Guarantee</h4>
                      </div>
                      <p>{activeLaw.i2cGuarantee}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Comparison Matrix: Traditional IT vs. i2c Architecture */}
            <div className="manifesto-comparison-table-wrap glass-panel">
              <h3 className="title is-4 comparison-table-title">
                Traditional IT vs. i2c Architecture
              </h3>
              <div className="comparison-table-responsive">
                <table className="comparison-manifesto-table">
                  <thead>
                    <tr>
                      <th>Vector</th>
                      <th>Traditional Software Engineering</th>
                      <th>The i2c Architecture</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Specification Layer</strong></td>
                      <td>Ambiguous natural language prose (Jira/Docs). 40% drift per handoff.</td>
                      <td><strong>ULSX Computable Intent Graphs.</strong> 100% machine-verifiable before coding.</td>
                    </tr>
                    <tr>
                      <td><strong>Component Assembly</strong></td>
                      <td>Manual reinvention of boilerplate (auth, CRUD, billing, APIs).</td>
                      <td><strong>80–90% instant reuse</strong> of pre-tested, verified Garden components.</td>
                    </tr>
                    <tr>
                      <td><strong>State &amp; Reality</strong></td>
                      <td>Single-timeline mutable databases; risky testing on production data.</td>
                      <td><strong>FractalDB Spacetime:</strong> Zero-copy parallel reality simulation branches.</td>
                    </tr>
                    <tr>
                      <td><strong>Verification Model</strong></td>
                      <td>Post-hoc unit tests that only cover scenarios engineers remember.</td>
                      <td><strong>Jigsaw ADR-001:</strong> Mathematical invariant proof verification at compile time.</td>
                    </tr>
                    <tr>
                      <td><strong>Rollbacks &amp; History</strong></td>
                      <td>Painful database rollback scripts, corrupted data restorations.</td>
                      <td><strong>O(1) Lamport Clock Time Travel:</strong> Instant pointer reversion to previous FTime.</td>
                    </tr>
                    <tr>
                      <td><strong>Security Membrane</strong></td>
                      <td>Reactive CVE patching after production exploits occur.</td>
                      <td><strong>LongGuard &amp; CyOp:</strong> Sandboxed WASM boundaries with cryptographic lock.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
