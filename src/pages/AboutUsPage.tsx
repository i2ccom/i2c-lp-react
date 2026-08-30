import React, { useState } from "react";
import myInfo from "../data/data.info";
import teamMembers from "../data/data.team-members";
import milestones from "../data/data.timeline";
import { VIBE_PRINCIPLES } from "../data/data.architecture";
import "./AboutUsPage.css";

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState<"leadership" | "timeline" | "manifesto" | "nodes">("leadership");

  return (
    <div className="about-page-wrapper">
      {/* Hero Header */}
      <section className="section about-hero-strip">
        <div className="container">
          <div className="about-hero-content">
            <div className="section-eyebrow">
              <i className="fa-solid fa-building"></i>
              <span>About i2c Inc. &bull; Established 2014</span>
            </div>
            <h1 className="title is-1 about-page-title">
              Over a Decade of <span className="gradient-text">AI-First Cloud Innovation</span>
            </h1>
            <p className="subtitle is-5 about-page-subtitle">
              Founded in 2014 by 3 visionary engineers, <strong>i2c Inc.</strong> (i2c.com) delivers enterprise cloud platforms, Spacetime persistence substrates, and the <strong>i2cw Global Portal</strong> (i2cw.com).
            </p>

            {/* Navigation Tabs */}
            <div className="about-nav-tabs-row">
              <button
                className={`about-tab-btn ${activeTab === "leadership" ? "is-active" : ""}`}
                onClick={() => setActiveTab("leadership")}
              >
                <i className="fa-solid fa-users"></i>
                <span>Founders &amp; Leadership</span>
              </button>

              <button
                className={`about-tab-btn ${activeTab === "timeline" ? "is-active" : ""}`}
                onClick={() => setActiveTab("timeline")}
              >
                <i className="fa-solid fa-timeline"></i>
                <span>Company Timeline (2014&ndash;2026+)</span>
              </button>

              <button
                className={`about-tab-btn ${activeTab === "manifesto" ? "is-active" : ""}`}
                onClick={() => setActiveTab("manifesto")}
              >
                <i className="fa-solid fa-scroll"></i>
                <span>Intent Manifesto &amp; Vibe</span>
              </button>

              <button
                className={`about-tab-btn ${activeTab === "nodes" ? "is-active" : ""}`}
                onClick={() => setActiveTab("nodes")}
              >
                <i className="fa-solid fa-globe"></i>
                <span>Global Nodes &amp; Trust</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tab Panels */}
      <section className="section about-panel-section">
        <div className="container">
          {/* TAB 1: FOUNDERS & LEADERSHIP */}
          {activeTab === "leadership" && (
            <div className="leadership-panel glass-panel">
              <div className="leadership-intro-grid">
                <div className="lead-text-box">
                  <span className="lead-badge">Executive &amp; Technical Leadership</span>
                  <h2 className="title is-3 lead-heading">Built Fast. Built Right. Driven by AI-Native Vision.</h2>
                  <p className="lead-paragraph">
                    i2c started in 2014 with a core founding team dedicated to making cloud computing intelligent, deterministic, and verifiable. Over 10+ years of continuous engineering, the team has expanded from lightweight productivity tools to a global 36-product enterprise ecosystem.
                  </p>
                  <div className="leadership-quick-facts">
                    <div className="fact-item">
                      <strong>2014</strong>
                      <span>Year Founded</span>
                    </div>
                    <div className="fact-item">
                      <strong>36</strong>
                      <span>Active Products</span>
                    </div>
                    <div className="fact-item">
                      <strong>2</strong>
                      <span>Global Nodes</span>
                    </div>
                    <div className="fact-item">
                      <strong>99.999%</strong>
                      <span>Enterprise SLA</span>
                    </div>
                  </div>
                </div>

                <div className="lead-banner-box">
                  <img
                    src="/images/product-illustrations/corporate-users-asia-2.jpeg"
                    alt="i2c Leadership & Engineering Team"
                    className="lead-team-photo"
                  />
                </div>
              </div>

              {/* Founders Cards Grid */}
              <h3 className="title is-4 founders-section-title">Co-Founders &amp; Core Architects</h3>
              <div className="founders-cards-grid">
                {teamMembers.map((member) => (
                  <article key={member.id} className="founder-profile-card">
                    <div className="founder-avatar-wrap">
                      <img src={member.imageUrl} alt={member.name} className="founder-avatar-img" />
                    </div>
                    <div className="founder-info">
                      <h4 className="founder-name">{member.name}</h4>
                      <span className="founder-role">{member.role}</span>
                      <p className="founder-focus">
                        <i className="fa-solid fa-crosshairs"></i>
                        <span>{member.focus}</span>
                      </p>
                      <p className="founder-bio">{member.bio}</p>
                      {member.links?.github && (
                        <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="founder-link">
                          <i className="fa-brands fa-github"></i>
                          <span>GitHub Profile</span>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: COMPANY TIMELINE (2014 - 2026+) */}
          {activeTab === "timeline" && (
            <div className="timeline-panel glass-panel">
              <div className="timeline-heading-strip">
                <h2 className="title is-3 timeline-panel-title">12 Years of Product Milestones &amp; Continuous Growth</h2>
                <p className="timeline-panel-subtitle">
                  From internal collaboration utilities to mission-critical ERPs, Spacetime databases, and multi-reality OS layers.
                </p>
              </div>

              <div className="milestones-timeline-grid">
                {milestones.map((m) => (
                  <div className="timeline-milestone-card" key={`${m.year}-${m.title}`}>
                    <div className="milestone-badge-row">
                      <span className="milestone-year-pill">{m.year}</span>
                      <span className="milestone-status-dot"></span>
                    </div>
                    <div className="milestone-card-body">
                      <div className="milestone-logo-frame">
                        <img src={m.logo} alt={m.title} className="milestone-product-logo" />
                      </div>
                      <div>
                        <h4 className="milestone-product-title">{m.title}</h4>
                        <p className="milestone-product-desc">{m.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INTENT MANIFESTO */}
          {activeTab === "manifesto" && (
            <div className="manifesto-panel glass-panel">
              <div className="manifesto-hero-box">
                <h2 className="title is-3 manifesto-panel-title">The Intent Paradigm: Why Graph Specifications Beat Prose Requirements</h2>
                <p className="manifesto-hero-text">
                  Traditional software delivery treats <strong>intent as prose</strong>. Prose is re-interpreted at every handoff between executives, architects, developers, and QA—a process where ambiguity survives and costly engineering drift accumulates.
                </p>
                <p className="manifesto-hero-text">
                  <strong>Vibe</strong> treats intent as a <strong>computable graph</strong>: parseable, hashable, content-addressed, and verifiable by AST traversal. The graph is the single source of truth; code is a locked build artifact.
                </p>
              </div>

              <h3 className="title is-4 principles-title">The Ten Foundational Laws of Intent-Driven Systems</h3>
              <div className="manifesto-principles-grid">
                {VIBE_PRINCIPLES.map((p) => (
                  <div className="manifesto-principle-card" key={p.num}>
                    <div className="p-header">
                      <span className="p-num">LAW {p.num}</span>
                      <span className="p-badge">Deterministic Standard</span>
                    </div>
                    <h4 className="p-title">{p.title}</h4>
                    <p className="p-desc">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: NODES & INFRASTRUCTURE */}
          {activeTab === "nodes" && (
            <div className="nodes-panel glass-panel">
              <div className="nodes-heading-box">
                <h2 className="title is-3 nodes-panel-title">Global Operating Nodes &amp; Sovereign Infrastructure</h2>
                <p className="nodes-panel-subtitle">
                  i2c operates across distributed global clusters connected via high-speed P2P meshes and verified by Jigsaw zero-knowledge policy membranes.
                </p>
              </div>

              <div className="nodes-grid-row">
                <div className="node-box">
                  <div className="node-flag">🇻🇳 Hanoi Genesis Node</div>
                  <h3 className="node-title">Asia-Pacific Engineering &amp; Substrate Research</h3>
                  <p className="node-loc">22/8 Nguyen Trai, Thanh Xuan, Hanoi, Vietnam</p>
                  <p className="node-detail">
                    Hosts substrate research, language compilers (RsTs, Long Runtime), and core storage engine engineering.
                  </p>
                  <div className="node-telemetry-tag">
                    <span className="dot-green"></span>
                    <span>Active Genesis Node &bull; Latency &lt; 8ms</span>
                  </div>
                </div>

                <div className="node-box">
                  <div className="node-flag">🇺🇸 Atlanta Enterprise Node</div>
                  <h3 className="node-title">North America Headquarters &amp; Trust Governance</h3>
                  <p className="node-loc">70 Perimeter Center East, Atlanta, GA, 30346, USA</p>
                  <p className="node-detail">
                    Hosts enterprise deployment gateways, Jigsaw trust ring coordination, and global client partnerships.
                  </p>
                  <div className="node-telemetry-tag">
                    <span className="dot-green"></span>
                    <span>Active Enterprise Node &bull; Latency &lt; 12ms</span>
                  </div>
                </div>
              </div>

              {/* Global Network Promotional Graphic */}
              <div className="global-network-image-card">
                <img
                  src="/images/slides/slide_03.png"
                  alt="i2c Global Enterprise Client Network"
                  className="global-network-img"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
