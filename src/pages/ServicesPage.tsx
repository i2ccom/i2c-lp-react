import React, { useState } from "react";
import { Link } from "react-router-dom";
import myServices from "../data/data.services";
import "./ServicesPage.css";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Products & Substrates (36)", icon: "fa-solid fa-border-all", count: 36 },
    { id: "enterprise", label: "Enterprise Solutions (15)", icon: "fa-solid fa-city", count: 15 },
    { id: "substrates", label: "Core Data Substrates (4)", icon: "fa-solid fa-database", count: 4 },
    { id: "runtime-ai", label: "AI Engines & Runtimes (10)", icon: "fa-solid fa-brain", count: 10 },
    { id: "dev-trust", label: "Trust & Developer Systems (7)", icon: "fa-solid fa-shield-halved", count: 7 }
  ];

  // High-Level Design Interactive Hotspots
  const architectureHotspots = [
    { id: "enterprise", name: "Quang & Enterprise Solutions", tag: "Layer 4: Apps", desc: "15 Mission-Critical Enterprise Platforms", filter: "enterprise" },
    { id: "minh", name: "MinhAI & Cognitive Memory", tag: "Layer 5: Intelligence", desc: "Local Edge Reasoning & Quantized SLMs", filter: "runtime-ai" },
    { id: "hyper", name: "HyperGraph & HyperAI", tag: "Layer 3: Execution", desc: "Universal Graph Schema & Tensor Cores", filter: "substrates" },
    { id: "fluid", name: "Fluid & CAS Freezer", tag: "Layer 2: Flow", desc: "Content-Addressed Storage & Versioning", filter: "substrates" },
    { id: "fractal", name: "FractalDB Spacetime", tag: "Layer 1: Shape", desc: "Distributed Lamport Clock Database", filter: "substrates" },
    { id: "trust", name: "Jigsaw & Rings Mesh", tag: "Governance & Dev", desc: "Zero-Knowledge ADR-001 Verification", filter: "dev-trust" }
  ];

  const enterpriseServices = myServices.services.filter((s) => s.category === "enterprise");
  const substrateServices = myServices.services.filter((s) => s.category === "substrates");
  const aiRuntimeServices = myServices.services.filter((s) => s.category === "runtime-ai");
  const devTrustServices = myServices.services.filter((s) => s.category === "dev-trust");

  const filterMatches = (item: typeof myServices.services[0]) => {
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
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
      <section className="catalog-group-block" id={`group-${categoryId}`} key={categoryId}>
        <div className="group-header">
          <div className="group-title-row">
            <i className={icon}></i>
            <h2 className="title is-3 group-title">{title}</h2>
            <span className="group-count-badge">{filtered.length} Active Systems</span>
          </div>
          <p className="group-desc">
            {categoryId === "enterprise" && "Mission-critical applications for ERP, BI, FinTech, LearnTech, Logistics, Real Estate, and CRM."}
            {categoryId === "substrates" && "Deterministic Spacetime databases, content-addressed block storage, and generative middleware."}
            {categoryId === "runtime-ai" && "Quantized local edge SLMs, compiler toolchains, cluster GPU kernels, and speech transcription."}
            {categoryId === "dev-trust" && "Cryptographic zero-knowledge verification, P2P mesh networking, and internal developer platforms."}
          </p>
        </div>

        <div className="catalog-cards-grid">
          {filtered.map((service) => (
            <Link to={`/services/${service.slug}`} key={service.slug} className="catalog-card-link">
              <article className="catalog-component-card glass-panel">
                <div className="card-thumb-banner">
                  <img src={service.logoUrl || service.heroImageUrl} alt={service.title} className="card-thumb-img" />
                  <span className={`tag-layer tag-layer-l${service.layer} card-layer-tag`}>
                    L{service.layer}: {service.layerName}
                  </span>
                </div>

                <div className="card-main-content">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-desc">{service.description}</p>
                </div>

                <div className="card-bottom-bar">
                  <span className="card-tech-label">{service.tech}</span>
                  <div className="card-inspect-cta">
                    <span>Explore Dedicated Page</span>
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

  return (
    <div className="services-page-wrapper">
      {/* Hero Header */}
      <section className="section catalog-hero-header">
        <div className="container">
          <div className="catalog-header-text">
            <div className="section-eyebrow">
              <i className="fa-solid fa-cubes-stacked"></i>
              <span>i2cw Global Portal &bull; Enterprise Catalog</span>
            </div>
            <h1 className="title is-1 catalog-page-title">
              The <span className="gradient-text">i2c &amp; i2cw Global Product Directory</span>
            </h1>
            <p className="subtitle is-5 catalog-page-subtitle">
              Browse 36 actively supported enterprise platforms, persistence substrates, generative middleware, and AI copilot runtimes.
            </p>
          </div>

          {/* High-Level Design Architectural Diagram with Interactive Area Mapping */}
          <div className="hld-diagram-card glass-panel" id="ecosystem-diagram">
            <div className="hld-card-header">
              <div className="hld-header-left">
                <i className="fa-solid fa-diagram-project text-blue"></i>
                <h3 className="hld-title">High-Level Architectural Design &amp; Ecosystem Map</h3>
              </div>
              <span className="hld-badge">Click any layer below to jump to component specs</span>
            </div>

            <div className="hld-diagram-visual-wrap">
              <img
                src="/images/slides/slide_02.png"
                alt="i2c High Level Design Architecture"
                className="hld-diagram-image"
              />
            </div>

            {/* Interactive Clickable Hotspot Selector */}
            <div className="hld-hotspots-grid">
              {architectureHotspots.map((spot) => (
                <div
                  key={spot.id}
                  className={`hotspot-card ${activeCategory === spot.filter ? "is-selected" : ""}`}
                  onClick={() => {
                    setActiveCategory(spot.filter);
                    const el = document.getElementById(`group-${spot.filter}`);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <div className="hotspot-top">
                    <span className="hotspot-tag">{spot.tag}</span>
                    <i className="fa-solid fa-arrow-down-long"></i>
                  </div>
                  <h4 className="hotspot-name">{spot.name}</h4>
                  <p className="hotspot-desc">{spot.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Search and Category Filter Tabs */}
          <div className="catalog-filter-controls">
            <div className="catalog-search-wrapper">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
              <input
                type="text"
                placeholder="Search by product name, substrate, or technology (e.g. UniBi, Kitchen, FractalDB, Rust, Wasm)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="catalog-search-input"
              />
              {searchQuery && (
                <button className="clear-btn" onClick={() => setSearchQuery("")}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>

            <div className="catalog-category-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`cat-tab-button ${activeCategory === cat.id ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <i className={cat.icon}></i>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categorized Product Directory */}
      <section className="section catalog-content-section">
        <div className="container">
          {renderGroup("Enterprise Platforms & Vertical Solutions", "fa-solid fa-city", enterpriseServices, "enterprise")}
          {renderGroup("Core Data Substrates & Middleware", "fa-solid fa-database", substrateServices, "substrates")}
          {renderGroup("AI Engines & Execution Runtimes", "fa-solid fa-brain", aiRuntimeServices, "runtime-ai")}
          {renderGroup("Trust, Governance & Developer Toolchains", "fa-solid fa-shield-halved", devTrustServices, "dev-trust")}
        </div>
      </section>
    </div>
  );
}