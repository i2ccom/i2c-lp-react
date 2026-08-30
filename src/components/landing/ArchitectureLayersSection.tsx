import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ARCHITECTURE_LAYERS } from "../../data/data.architecture";
import "./ArchitectureLayersSection.css";

export default function ArchitectureLayersSection() {
  const [activeLayerIndex, setActiveLayerIndex] = useState(5); // Default to Layer 6 (Persistence Core)
  const currentLayer = ARCHITECTURE_LAYERS[activeLayerIndex];

  return (
    <section className="section arch-layers-section" id="architecture">
      <div className="container">
        <div className="section-heading">
          <div className="section-eyebrow">
            <i className="fa-solid fa-cubes"></i>
            <span>System Architecture</span>
          </div>
          <h2 className="title is-2 arch-section-title">
            The <span className="gradient-text">Machine-Native Substrate</span> Layers
          </h2>
          <p className="subtitle is-5 arch-section-subtitle">
            A cohesive stack from content-addressed Spacetime storage up to client-rendered Vibe interfaces. Every layer enforces mathematical verification and cryptographic provenance.
          </p>
        </div>

        <div className="arch-interactive-container">
          {/* Layer Navigator Tabs */}
          <div className="arch-layer-tabs">
            {ARCHITECTURE_LAYERS.map((layer, idx) => (
              <button
                key={layer.id}
                className={`arch-layer-tab-btn ${activeLayerIndex === idx ? "is-active" : ""}`}
                onClick={() => setActiveLayerIndex(idx)}
                style={{
                  borderLeftColor: layer.color
                }}
              >
                <div className="tab-btn-header">
                  <span className="tab-layer-badge" style={{ color: layer.color }}>
                    {layer.badge}
                  </span>
                  <span className="tab-layer-name">{layer.name}</span>
                </div>
                <p className="tab-layer-tagline">{layer.tagline}</p>
              </button>
            ))}
          </div>

          {/* Active Layer Deep Dive View */}
          <div className="arch-layer-details-panel glass-panel">
            <div className="panel-header-row">
              <div>
                <div className="panel-badge-row">
                  <span className="tag-layer" style={{ background: `${currentLayer.color}22`, color: currentLayer.color, border: `1px solid ${currentLayer.color}55` }}>
                    {currentLayer.badge}
                  </span>
                  <span className="panel-layer-tagline">{currentLayer.tagline}</span>
                </div>
                <h3 className="title is-3 panel-layer-title">{currentLayer.name}</h3>
              </div>
              <div className="panel-layer-index" style={{ color: `${currentLayer.color}33` }}>
                0{currentLayer.level}
              </div>
            </div>

            <p className="panel-layer-description">{currentLayer.description}</p>

            <h4 className="components-heading">Substrate Components & Specifications</h4>

            <div className="components-grid">
              {currentLayer.components.map((comp) => (
                <div className="component-card" key={comp.name}>
                  <div className="comp-card-top">
                    <div className="comp-meta">
                      <h5 className="comp-name">{comp.name}</h5>
                      <span className="comp-role">{comp.role}</span>
                    </div>
                    <span className="comp-tech-badge">{comp.tech}</span>
                  </div>

                  <p className="comp-desc">{comp.description}</p>

                  {comp.slug && (
                    <Link to={`/services/${comp.slug}`} className="comp-detail-link">
                      <span>View Component Specs</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Architecture Flow Banner */}
            <div className="layer-flow-banner">
              <div className="banner-icon">
                <i className="fa-solid fa-diagram-project"></i>
              </div>
              <div className="banner-text">
                <strong>Substrate Integration Guarantee:</strong>
                <span> All writes are signed via Jigsaw, executed in LongCells, committed with FTime Lamport timestamps, and stored in Fluid BLAKE3 CAS.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
