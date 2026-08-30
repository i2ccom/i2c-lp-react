import React from "react";
import { Link } from "react-router-dom";
import myServices from "../../data/data.services";
import RotatingProductImage from "../common/RotatingProductImage";
import "./EnterpriseSolutionsSection.css";

export default function EnterpriseSolutionsSection() {
  // Show Top 10 Core Enterprise Platforms on Homepage (p === 1)
  const top10Solutions = myServices.services
    .filter((s) => s.category === "apps" || s.p === 1)
    .slice(0, 10);

  return (
    <section className="section enterprise-solutions-section" id="solutions">
      <div className="container">
        <div className="section-heading">
          <div className="section-eyebrow">
            <i className="fa-solid fa-building-circle-check"></i>
            <span>Enterprise Solutions</span>
          </div>
          <h2 className="title is-2 enterprise-section-title">
            Mission-Critical <span className="gradient-text">Enterprise Platforms</span>
          </h2>
          <p className="subtitle is-5 enterprise-section-subtitle">
            Turnkey enterprise platforms engineered by <strong>i2c Inc.</strong> and deployed across global client operations.
          </p>
        </div>

        {/* Top 10 Product Cards Grid */}
        <div className="solutions-grid">
          {top10Solutions.map((sol) => (
            <Link to={`/solutions/${sol.slug}`} key={sol.slug} className="solution-card-link">
              <article className="solution-card glass-panel">
                <div className="solution-card-head">
                  <div className="solution-icon-box">
                    <img src={sol.logoUrl} alt={sol.title} className="solution-icon-svg" />
                  </div>
                  <div className="solution-head-meta">
                    <h3 className="solution-card-title">{sol.title}</h3>
                    <span className={`tag-layer tag-layer-l${sol.layer}`}>
                      L{sol.layer}: {sol.layerName}
                    </span>
                  </div>
                </div>

                <div className="solution-art-wrap">
                  <RotatingProductImage slug={sol.slug} alt={sol.title} className="solution-art-img" showIndicator={true} />
                </div>

                <div className="solution-card-body">
                  <p className="solution-card-desc">{sol.description}</p>
                </div>

                <div className="solution-card-footer">
                  <span className="solution-tech">{sol.categoryLabel}</span>
                  <div className="solution-detail-btn">
                    <span>Detail</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="solutions-footer-cta">
          <Link to="/solutions" className="btn-modern-primary">
            <span>View Full Solutions &amp; Substrates Catalog</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
