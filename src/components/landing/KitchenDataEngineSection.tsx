import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./KitchenDataEngineSection.css";

export default function KitchenDataEngineSection() {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineStages = [
    {
      title: "Universal Ingress Gateway",
      tech: "Multi-Protocol Termination",
      desc: "Terminates incoming REST, GraphQL, gRPC, and WebSocket connections into canonical, type-safe execution envelopes with sub-millisecond edge latency.",
      icon: "fa-solid fa-network-wired",
      badge: "Ingress L5",
      image: "/images/products-hd/kitchen.jpg",
      imageCaption: "Stage 1: Multi-Protocol Ingress Gateway • Canonical type-safe execution envelopes."
    },
    {
      title: "Cryptographic Intent Envelope",
      tech: "Zero-Trust Policy Verification",
      desc: "Every data mutation or query is signed with asymmetric cryptographic keys and verified against Jigsaw zero-knowledge policy membranes prior to execution.",
      icon: "fa-solid fa-shield-halved",
      badge: "Signed Intent",
      image: "/images/products-hd/jigsaw.jpg",
      imageCaption: "Stage 2: Jigsaw Cryptographic Membrane • Zero-Knowledge ADR-001 policy enforcement."
    },
    {
      title: "Dynamic Schema Virtualization",
      tech: "HyperGraph AST Projection",
      desc: "On-the-fly hypergraph schema compilation and dynamic type synthesis, eliminating relational table locks and eliminating migration downtime.",
      icon: "fa-solid fa-diagram-project",
      badge: "Schema Core",
      image: "/images/products-hd/hypergraph.jpg",
      imageCaption: "Stage 3: HyperGraph Virtualization Core • Real-time AST projection without schema migration locks."
    },
    {
      title: "LongCell WASM Execution Grid",
      tech: "Sandboxed Transformation Mesh",
      desc: "Isolated memory sandboxes executing distributed transformations and heterogeneous database joins at native near-metal throughput.",
      icon: "fa-solid fa-microchip",
      badge: "WASM Grid",
      image: "/images/products-hd/long.jpg",
      imageCaption: "Stage 4: Long Runtime WASM Grid • Sandboxed zero-overhead distributed join kernels."
    },
    {
      title: "Materialized Real-Time State Stream",
      tech: "Reactive NATS JetStream Delivery",
      desc: "Zero-copy, in-memory materialized views pushed reactively to client state buses and edge nodes in under 8 milliseconds.",
      icon: "fa-solid fa-bolt",
      badge: "Reactive State",
      image: "/images/products-hd/fluid.jpg",
      imageCaption: "Stage 5: Fluid Reactive State Stream • Sub-8ms materialized view delivery over JetStream."
    }
  ];

  const currentStage = pipelineStages[activeStep];

  return (
    <section className="section kitchen-engine-section" id="kitchen">
      <div className="container">
        <div className="section-heading">
          <div className="section-eyebrow">
            <i className="fa-solid fa-server"></i>
            <span>Data Substrate &bull; Dynamic Query Virtualization</span>
          </div>
          <h2 className="title is-2 kitchen-title">
            <span className="gradient-text">Kitchen</span>: High-Throughput Data Virtualization &amp; Event Federation
          </h2>
          <p className="subtitle is-5 kitchen-subtitle">
            Federating heterogeneous SQL, NoSQL, and Spacetime HyperGraph stores into on-demand compiled virtual views in &lt;8ms without static schema locks or N+1 query latency.
          </p>
        </div>

        <div className="kitchen-grid glass-panel">
          {/* Left: Pipeline Stages */}
          <div className="brigade-nav">
            <div className="brigade-nav-header">
              <span className="brigade-title">Execution Pipeline Architecture</span>
              <span className="brigade-count">Stage {activeStep + 1} of {pipelineStages.length}</span>
            </div>

            <div className="brigade-list">
              {pipelineStages.map((stage, idx) => (
                <div
                  key={stage.title}
                  className={`brigade-item ${activeStep === idx ? "is-active" : ""}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="brigade-item-icon">
                    <i className={stage.icon}></i>
                  </div>
                  <div className="brigade-item-info">
                    <div className="brigade-item-top">
                      <span className="brigade-item-name">{stage.title}</span>
                      <span className="brigade-item-badge">{stage.badge}</span>
                    </div>
                    <span className="brigade-item-tech">{stage.tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Active Stage Deep Dive & Dynamic Data Pipeline Image */}
          <div className="brigade-detail-view">
            <div className="detail-view-card">
              <div className="kitchen-promo-graphic" key={`stage-graphic-${activeStep}`}>
                <img
                  src={currentStage.image}
                  alt={currentStage.title}
                  className="kitchen-concept-img"
                />
                <div className="kitchen-stage-overlay">
                  <span className="kitchen-stage-badge">
                    <i className={currentStage.icon}></i>
                    <span>{currentStage.badge}</span>
                  </span>
                  <p className="kitchen-stage-caption">{currentStage.imageCaption}</p>
                </div>
              </div>

              <div className="detail-content-wrap" key={`stage-content-${activeStep}`}>
                <div className="detail-top-meta">
                  <span className="detail-phase-tag">Stage 0{activeStep + 1}: {currentStage.title}</span>
                  <span className="detail-tech-pill">{currentStage.tech}</span>
                </div>

                <p className="detail-desc">{currentStage.desc}</p>

                <div className="detail-footer-action">
                  <Link to="/solutions/kitchen" className="btn-modern-primary btn-kitchen-specs">
                    <span>Inspect Kitchen Architecture</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <div className="kid-hash-preview">
                    <code>KID: kid://ops/blake3:8f4b...3c1a</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
