import React, { useState } from "react";
import { Link } from "react-router-dom";
import myServices from "../../data/data.services";
import "./EcosystemGridSection.css";

export default function EcosystemGridSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Products & Substrates", icon: "fa-solid fa-border-all" },
    { id: "enterprise", label: "Enterprise Solutions", icon: "fa-solid fa-city" },
    { id: "substrates", label: "Core Substrates", icon: "fa-solid fa-database" },
    { id: "runtime-ai", label: "AI & Runtimes", icon: "fa-solid fa-brain" },
    { id: "dev-trust", label: "Trust & Dev", icon: "fa-solid fa-shield-halved" }
  ];

  const filteredServices =
    activeCategory === "all"
      ? myServices.services
      : myServices.services.filter((s) => s.category === activeCategory);

  return (
    <section className="section ecosystem-grid-section" id="ecosystem">
      <div className="container">
        <div className="section-heading">
          <div className="section-eyebrow">
            <i className="fa-solid fa-diagram-nested"></i>
            <span>Verified Registry &amp; Directory</span>
          </div>
          <h2 className="title is-2 ecosystem-title">
            The <span className="gradient-text">i2c Global Substrate &amp; App Catalog</span>
          </h2>
          <p className="subtitle is-5 ecosystem-subtitle">
            36 actively supported enterprise platforms, persistence substrates, generative middleware, and AI copilot runtimes.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="ecosystem-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-tab-btn ${activeCategory === cat.id ? "is-active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <i className={cat.icon}></i>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="ecosystem-cards-grid">
          {filteredServices.map((service) => (
            <Link to={`/solutions/${service.slug}`} key={service.slug} className="ecosystem-card-link">
              <article className="ecosystem-card glass-panel">
                <div className="eco-card-top">
                  <div className="eco-layer-tag">
                    <span className={`tag-layer tag-layer-l${service.layer}`}>
                      L{service.layer}: {service.layerName}
                    </span>
                  </div>
                  <span className="eco-status-dot"></span>
                </div>

                <div className="eco-card-content">
                  <h3 className="eco-card-title">{service.title}</h3>
                  <p className="eco-card-desc">{service.description}</p>
                </div>

                <div className="eco-card-footer">
                  <span className="eco-tech-tag">{service.tech}</span>
                  <div className="eco-explore-cta">
                    <span>Detail</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="ecosystem-bottom-cta">
          <Link to="/solutions" className="btn-modern-primary">
            <span>View Full Solutions &amp; Substrates</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
