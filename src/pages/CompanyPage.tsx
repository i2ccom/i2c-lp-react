import React, { useState } from "react";
import teamMembers from "../data/data.team-members";
import milestones from "../data/data.timeline";
import myInfo from "../data/data.info";
import "./CompanyPage.css";

export default function CompanyPage() {
  const [activeTab, setActiveTab] = useState<"vision" | "founders" | "timeline" | "partners" | "nodes">("vision");

  const companyFacts = [
    { label: "Company Entity", value: "i2c Inc. (i2c.com)" },
    { label: "Global Gateway Portal", value: "i2cw Global Portal (i2cw.com)" },
    { label: "Year Established", value: "2014 (Over 12 Years of Innovation)" },
    { label: "Core Methodology", value: "AI First Machine-Native Cloud Engineering" },
    { label: "Active Enterprise Products", value: "36 Verified Platforms & Substrates" },
    { label: "Global Cluster SLA", value: "99.999% High Availability Uptime" },
    { label: "Enterprise Compliance", value: "SOC2 Type II / ADR-001 ZK Proof Ready" },
    { label: "Operating Hubs", value: "Vietnam Office (Hanoi) & US Office (Atlanta, GA)" }
  ];

  const corePillars = [
    {
      icon: "fa-solid fa-brain",
      title: "AI-First Cloud Architecture",
      desc: "Every system begins with machine intelligence at its center. We reject retrofitted AI wrappers in favor of native tensor-aware persistence, compiler-driven safety, and sub-2GB local edge inference."
    },
    {
      icon: "fa-solid fa-diagram-project",
      title: "The Computable Intent Paradigm",
      desc: "Replacing fragile prose specifications with machine-checkable property graphs. Intent is codified once; verification is mathematically guaranteed across build, deployment, and execution."
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Deterministic Governance & Trust",
      desc: "Zero-knowledge cryptographic audit trails (ADR-001), decentralized P2P transport meshes (Rings), and content-addressed immutable state (Fluid & FractalDB) that eliminate hallucination and software drift."
    },
    {
      icon: "fa-solid fa-cubes-stacked",
      title: "Accountable Enterprise Value",
      desc: "Delivering tangible business ROI across 50+ enterprise partners in banking, energy, telecommunications, logistics, and healthcare through turnkey vertical platforms."
    }
  ];

  const globalEnterprisePartners = [
    {
      name: "AWS Cloud",
      logo: "/images/clients/aws.svg",
      type: "Strategic Cloud Infrastructure",
      desc: "Global cloud substrate nodes, high-throughput compute clusters, and private VPC interconnects."
    },
    {
      name: "Google Cloud",
      logo: "/images/clients/google.svg",
      type: "AI & Distributed TPU Partner",
      desc: "Distributed tensor acceleration, global fiber transport, and enterprise Kubernetes orchestration."
    },
    {
      name: "Atlassian",
      logo: "/images/clients/atlassian.svg",
      type: "Developer Ecosystem Partner",
      desc: "Deep integration with Jira, Bitbucket, and Confluence for automated Shai CPG code synthesis."
    },
    {
      name: "EVN Group",
      logo: "/images/clients/evn.svg",
      type: "Energy & National Utilities",
      desc: "Mission-critical grid telemetry, operational BI dashboards, and enterprise asset management."
    },
    {
      name: "Viettel Group",
      logo: "/images/clients/viettel.svg",
      type: "Telecommunications & 5G Edge",
      desc: "High-density private 5G edge computing clusters and sovereign AI reasoning infrastructure."
    },
    {
      name: "VNPT",
      logo: "/images/clients/vnpt.svg",
      type: "National Telecommunications",
      desc: "Enterprise cloud transformation, nationwide citizen identity verification, and data hubs."
    },
    {
      name: "UrBox",
      logo: "/images/clients/urbox.svg",
      type: "Digital Loyalty & FinTech",
      desc: "High-concurrency digital voucher settlement, rewards routing, and omni-channel commerce."
    }
  ];

  return (
    <div className="company-page-wrap">
      {/* Company Top Hero */}
      <section className="section company-hero-section">
        <div className="container">
          <div className="company-hero-content">
            <div className="section-eyebrow">
              <i className="fa-solid fa-building"></i>
              <span>i2c Inc. &bull; Established 2014 &bull; i2cw Global Portal</span>
            </div>
            <h1 className="title is-1 company-main-title">
              Our Vision, <span className="gradient-text">Leadership &amp; Global Impact</span>
            </h1>
            <p className="subtitle is-5 company-main-subtitle">
              Founded in 2014 by 3 visionary engineers, <strong>i2c Inc.</strong> delivers unified machine-native cloud operating foundations, deterministic Spacetime databases, and enterprise platforms.
            </p>

            {/* Company Navigation Tabs */}
            <div className="company-nav-tabs">
              <button
                className={`comp-tab-btn ${activeTab === "vision" ? "is-active" : ""}`}
                onClick={() => setActiveTab("vision")}
              >
                <i className="fa-solid fa-compass"></i>
                <span>Vision &amp; Methodology</span>
              </button>

              <button
                className={`comp-tab-btn ${activeTab === "founders" ? "is-active" : ""}`}
                onClick={() => setActiveTab("founders")}
              >
                <i className="fa-solid fa-users-viewfinder"></i>
                <span>Founders &amp; Leadership</span>
              </button>

              <button
                className={`comp-tab-btn ${activeTab === "timeline" ? "is-active" : ""}`}
                onClick={() => setActiveTab("timeline")}
              >
                <i className="fa-solid fa-timeline"></i>
                <span>Company Timeline (12 Years)</span>
              </button>

              <button
                className={`comp-tab-btn ${activeTab === "partners" ? "is-active" : ""}`}
                onClick={() => setActiveTab("partners")}
              >
                <i className="fa-solid fa-handshake-angle"></i>
                <span>Partners &amp; Clients</span>
              </button>

              <button
                className={`comp-tab-btn ${activeTab === "nodes" ? "is-active" : ""}`}
                onClick={() => setActiveTab("nodes")}
              >
                <i className="fa-solid fa-network-wired"></i>
                <span>Global Operating Nodes</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="container company-body-container">
        {/* TAB 1: VISION & METHODOLOGY */}
        {activeTab === "vision" && (
          <div className="company-vision-panel glass-panel">
            {/* Story & Inception */}
            <div className="vision-story-grid">
              <div className="vision-story-text">
                <span className="vision-badge">Company Genesis &bull; Hanoi 2014</span>
                <h2 className="title is-3">Bridging Frontier AI and Resilient Enterprise Operations</h2>
                <p className="vision-lead-p">
                  Established in 2014, <strong>i2c Inc.</strong> and the <strong>i2cw Global Portal</strong> were founded on the belief that cloud computing must not merely host or store data—it must be an active, intelligent computational fabric where machine reasoning and mathematical verification exist at the bedrock.
                </p>
                <p className="vision-lead-p">
                  Over twelve years of continuous engineering, i2c has expanded from specialized team collaboration utilities to an integrated ecosystem of <strong>36 verified enterprise products</strong>, Spacetime persistence databases (FractalDB), content-addressed chunking engines (Fluid), and local edge SLMs (MinhAI).
                </p>
                <p className="vision-lead-p">
                  Our commitment remains unwavering: building transparent, verifiable, and ethical AI systems that empower human organizations to execute with radical clarity and verifiable speed.
                </p>
              </div>

              <div className="vision-story-photo">
                <img
                  src="/images/product-illustrations/corporate-users-asia.jpeg"
                  alt="i2c Enterprise Teams"
                  className="vision-photo-img"
                />
              </div>
            </div>

            {/* 4 Core Pillars */}
            <div className="vision-pillars-block">
              <h3 className="title is-4 pillars-section-title">Four Core Architectural Pillars</h3>
              <div className="pillars-grid">
                {corePillars.map((pillar) => (
                  <div className="pillar-item-card" key={pillar.title}>
                    <div className="pillar-icon-box">
                      <i className={pillar.icon}></i>
                    </div>
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Facts Table */}
            <div className="company-facts-card">
              <div className="facts-card-header">
                <i className="fa-solid fa-list-check text-blue"></i>
                <h3 className="facts-title">Enterprise Profile &amp; Governance Facts</h3>
              </div>
              <div className="facts-table-grid">
                {companyFacts.map((f) => (
                  <div className="fact-row-item" key={f.label}>
                    <span className="fact-lbl">{f.label}</span>
                    <strong className="fact-val">{f.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FOUNDERS & LEADERSHIP */}
        {activeTab === "founders" && (
          <div className="company-founders-panel glass-panel">
            <div className="founders-header-block">
              <span className="lead-tag">Leadership &amp; Architecture</span>
              <h2 className="title is-2">The Founding Team</h2>
              <p className="founders-lead-desc">
                Meet the visionary architects behind i2c Inc. and the i2cw Global Portal who have spent over a decade advancing machine-native computing foundations.
              </p>
            </div>

            {/* Large Executive Founder Cards */}
            <div className="founders-large-stack">
              {teamMembers.map((member) => (
                <article key={member.id} className="founder-executive-card">
                  <div className="founder-card-avatar-col">
                    <div className="founder-avatar-large">
                      <img src={member.imageUrl} alt={member.name} className="founder-portrait-img" />
                    </div>
                    <div className="founder-social-pills">
                      {member.links?.github && (
                        <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="founder-social-btn" title="GitHub">
                          <i className="fa-brands fa-github"></i>
                          <span>GitHub</span>
                        </a>
                      )}
                      {member.links?.linkedin && (
                        <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="founder-social-btn" title="LinkedIn">
                          <i className="fa-brands fa-linkedin"></i>
                          <span>LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="founder-card-content-col">
                    <div className="founder-title-badge-row">
                      <div>
                        <h3 className="founder-large-name">{member.name}</h3>
                        <span className="founder-large-role">{member.role}</span>
                      </div>
                      <span className="founder-focus-pill">
                        <i className="fa-solid fa-crosshairs"></i>
                        <span>{member.focus}</span>
                      </span>
                    </div>

                    <p className="founder-large-bio">{member.bio}</p>

                    {/* Philosophy Quote */}
                    <div className="founder-philosophy-quote">
                      <i className="fa-solid fa-quote-left quote-icon"></i>
                      <p className="quote-text">&ldquo;{member.philosophy}&rdquo;</p>
                    </div>

                    {/* Key Contributions & Achievements */}
                    <div className="founder-achievements-block">
                      <span className="achievements-title">Key Architectural Milestones:</span>
                      <ul className="achievements-list">
                        {member.achievements.map((ach, idx) => (
                          <li key={idx} className="achievement-item">
                            <i className="fa-solid fa-circle-check text-blue"></i>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: TIMELINE (VERTICAL STACK - MOST RECENT FIRST) */}
        {activeTab === "timeline" && (
          <div className="company-timeline-panel glass-panel">
            <div className="comp-panel-heading">
              <span className="lead-tag">12-Year Engineering Journey</span>
              <h2 className="title is-2">Product Milestones (2026+ &rarr; 2014)</h2>
              <p className="comp-panel-sub">
                A chronological stack of twelve major product milestones and platform revolutions, ordered from our latest Nextgen releases back to company inception.
              </p>
            </div>

            {/* Vertical Timeline Stack */}
            <div className="timeline-vertical-stack">
              {milestones.map((m, index) => (
                <div className="timeline-stack-card" key={`${m.year}-${m.title}`}>
                  {/* Left Column: Year & Connecting Line */}
                  <div className="timeline-left-axis">
                    <div className="timeline-year-badge">
                      <span>{m.year}</span>
                    </div>
                    {index < milestones.length - 1 && <div className="timeline-axis-line"></div>}
                  </div>

                  {/* Right Column: Milestone Details Card */}
                  <div className="timeline-right-card glass-panel">
                    <div className="timeline-card-head">
                      <div className="timeline-icon-box">
                        <img src={m.logo} alt={m.title} className="timeline-icon-svg" />
                      </div>
                      <div className="timeline-head-info">
                        <span className="timeline-category-tag">{m.category}</span>
                        <h3 className="timeline-item-title">{m.title}</h3>
                        <span className="timeline-tagline">{m.tagline}</span>
                      </div>
                    </div>

                    <p className="timeline-item-desc">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PARTNERS & CLIENT TRUST */}
        {activeTab === "partners" && (
          <div className="company-partners-panel glass-panel">
            <div className="comp-panel-heading">
              <span className="lead-tag">Enterprise Ecosystem</span>
              <h2 className="title is-2">Global Partners &amp; Client Network</h2>
              <p className="comp-panel-sub">
                Trusted by industry leaders and forward-thinking enterprises across cloud infrastructure, telecommunications, energy, and finance.
              </p>
            </div>

            {/* Large Prominent Partner Cards */}
            <div className="partners-prominent-grid">
              {globalEnterprisePartners.map((partner) => (
                <div className="partner-prominent-card glass-panel" key={partner.name}>
                  <div className="partner-logo-box">
                    <img src={partner.logo} alt={partner.name} className="partner-large-logo" />
                  </div>
                  <div className="partner-card-info">
                    <h4 className="partner-prominent-name">{partner.name}</h4>
                    <span className="partner-type-badge">{partner.type}</span>
                    <p className="partner-card-desc">{partner.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Global Enterprise Ecosystem Visual Presentation */}
            <div className="partners-feature-banner">
              <img
                src="/images/slides/slide_03.png"
                alt="i2c Global Enterprise Trust Network"
                className="partners-banner-img"
              />
            </div>
          </div>
        )}

        {/* TAB 5: GLOBAL OPERATING NODES */}
        {activeTab === "nodes" && (
          <div className="company-nodes-panel glass-panel">
            <div className="comp-panel-heading">
              <span className="lead-tag">Distributed Topology</span>
              <h2 className="title is-2">Global Sovereign Substrate Nodes</h2>
              <p className="comp-panel-sub">
                i2c operates across distributed global clusters connected via Rings P2P mesh and audited via Jigsaw zero-knowledge policy membranes.
              </p>
            </div>

            <div className="nodes-cards-row">
              <div className="node-detail-card">
                <div className="node-flag-title">🇻🇳 Vietnam Office</div>
                <h3 className="node-heading">Asia-Pacific Engineering &amp; Substrate Research</h3>
                <p className="node-address-txt">22/8 Nguyen Trai, Hanoi, Vietnam</p>
                <p className="node-summary-txt">
                  Hosts core storage substrate research (FractalDB, Fluid), compiler toolchains (RsTs, Long Runtime), and distributed system engineering.
                </p>
                <div className="node-live-status">
                  <span className="live-dot-green"></span>
                  <span>Active Engineering Hub &bull; Latency &lt; 8ms</span>
                </div>
              </div>

              <div className="node-detail-card">
                <div className="node-flag-title">🇺🇸 US Office</div>
                <h3 className="node-heading">North America Headquarters &amp; Enterprise Governance</h3>
                <p className="node-address-txt">Atlanta, GA</p>
                <p className="node-summary-txt">
                  Hosts enterprise deployment gateways, Jigsaw trust ring coordination, North American customer success, and global client partnerships.
                </p>
                <div className="node-live-status">
                  <span className="live-dot-green"></span>
                  <span>Active Enterprise Cluster &bull; Latency &lt; 12ms</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
