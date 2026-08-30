import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import myServices from "../data/data.services";
import serviceDetails from "../data/data.service-details";
import "./ServiceDetailPage.css";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = myServices.services.find((s) => s.slug === slug);
  const detail = slug ? serviceDetails[slug] : undefined;

  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Auto-cycle gallery slides every 8 seconds
  useEffect(() => {
    if (!detail?.gallery || detail.gallery.length <= 1) return;
    const interval = setInterval(() => {
      setActiveGalleryIndex((prev) => (prev + 1) % detail.gallery.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [detail?.gallery]);

  if (!service) {
    return (
      <div className="service-detail-not-found section">
        <div className="container text-center">
          <div className="section-eyebrow">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <span>Product 404</span>
          </div>
          <h1 className="title is-2">Product Not Found</h1>
          <p className="subtitle is-5">We could not locate specifications for &ldquo;{slug}&rdquo; in the active catalog.</p>
          <Link to="/solutions" className="btn-modern-primary">
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to Solutions Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  // Fallback if detailed metadata is missing
  const fallbackDetail = {
    slug: service.slug,
    valueProp: service.description,
    layer: service.layer,
    layerName: service.layerName,
    challenge: `${service.title} addresses the limitations of fragmented enterprise legacy software by integrating real-time AI capabilities with resilient cloud persistence.`,
    solution: `By leveraging i2c's 7-layer machine-native architecture, ${service.title} delivers high-throughput execution with measurable business ROI and zero vendor lock-in.`,
    gallery: [
      {
        title: `${service.title} Real-World Application`,
        image: service.heroImageUrl || `/images/products-human/${service.slug}.jpg`,
        caption: `Enterprise deployment and real-world operational workflow for ${service.title}.`
      },
      {
        title: `${service.title} Architecture Design`,
        image: `/images/products-hd/${service.slug}.jpg`,
        caption: `Visual architecture design, subsystem interfaces, and execution model for ${service.title}.`
      },
      {
        title: "Enterprise Substrate & SLA Compliance",
        image: "/images/topics/blockchain-infographic.jpg",
        caption: `Continuous auditability, high-throughput execution guarantees, and state persistence.`
      }
    ],
    painPoints: [
      "Fragmented data silos and manual handoffs slow down business execution.",
      "High maintenance costs and brittle legacy integrations.",
      "Lack of real-time visibility into mission-critical operational metrics."
    ],
    features: [
      { title: "High-Performance Execution", outcome: "Sub-millisecond processing speed", desc: "Optimized for enterprise scale with near-metal execution." },
      { title: "Deterministic Governance", outcome: "100% full audit compliance", desc: "Built-in cryptographic policy verification and tamper-proof receipts." },
      { title: "Seamless Stack Integration", outcome: "Zero friction integration", desc: "Native API connectors and dynamic schema virtualization." }
    ],
    flow: [
      "Ingest data from enterprise sources through isolated security membrane",
      "Process transactions through isolated runtime sandbox at high throughput",
      "Verify state consistency with Jigsaw cryptographic proofs",
      "Commit audit receipts to FractalDB spacetime immutable event log"
    ],
    industries: ["Enterprise Technology", "FinTech & Banking", "Supply Chain & Logistics", "Healthcare & Utilities"],
    stack: ["⚡ Machine-Native Architecture", "🌳 FractalDB Persistence", "🔐 Jigsaw Governance", "🚀 Edge Optimized"],
    metrics: [
      { label: "Availability SLA", value: "99.999%" },
      { label: "Execution Latency", value: "< 15ms" },
      { label: "Audit Compliance", value: "100% Verified" }
    ],
    faq: [
      { q: `What architectural layer does ${service.title} operate on within the i2c stack?`, a: `${service.title} operates on Layer ${service.layer} (${service.layerName}), integrating directly with foundational persistence, generative middleware, and zero-knowledge governance membranes.` },
      { q: `How does ${service.title} guarantee data integrity and audit compliance?`, a: `Every transaction and state change executed by ${service.title} generates a cryptographic ADR-001 receipt hashed with BLAKE3 and anchored in FractalDB's spacetime event log.` },
      { q: `Can ${service.title} integrate with existing enterprise IT legacy systems?`, a: `Yes. Through Kitchen dynamic schema virtualization and open standard connectors (REST, GraphQL, gRPC), ${service.title} federates with existing databases and legacy ERPs without requiring database migrations.` },
      { q: `What deployment options are supported for ${service.title}?`, a: `${service.title} can be deployed on sovereign private on-premise clusters, dedicated cloud VPCs (AWS/GCP), or as a fully managed enterprise cloud instance with 99.999% SLA.` }
    ]
  };

  const activeDetail = detail || fallbackDetail;

  const relatedServices = myServices.services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 4);

  return (
    <div className="service-detail-page-wrap">
      {/* ═══ 1. EXECUTIVE HERO HEADER ═══ */}
      <section className="section detail-executive-hero">
        <div className="container">
          {/* Breadcrumbs */}
          <nav className="detail-breadcrumb-bar" aria-label="breadcrumbs">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right breadcrumb-arrow"></i>
            <Link to="/solutions">Solutions</Link>
            <i className="fa-solid fa-chevron-right breadcrumb-arrow"></i>
            <span className="breadcrumb-category">{service.categoryLabel}</span>
            <i className="fa-solid fa-chevron-right breadcrumb-arrow"></i>
            <span className="breadcrumb-current">{service.title}</span>
          </nav>

          <div className="detail-hero-content-grid">
            <div className="detail-hero-main">
              <div className="detail-badges-row">
                <span className={`tag-layer tag-layer-l${service.layer} detail-hero-layer-tag`}>
                  Layer {service.layer}: {service.layerName}
                </span>
                <span className="detail-status-badge">
                  <span className="status-dot-green"></span>
                  <span>{service.status} Enterprise Production</span>
                </span>
                <span className="detail-sla-pill">
                  <i className="fa-solid fa-shield-check"></i>
                  <span>SLA 99.999% Verified</span>
                </span>
              </div>

              <div className="detail-title-icon-row">
                <div className="detail-hero-icon-frame">
                  <img src={service.logoUrl} alt={service.title} className="detail-hero-icon-img" />
                </div>
                <div>
                  <h1 className="title is-1 detail-hero-title">{service.title}</h1>
                  <p className="detail-hero-tagline">{activeDetail.valueProp}</p>
                </div>
              </div>

              <div className="detail-hero-cta-bar">
                <a href={`mailto:contact@i2cw.com?subject=Inquiry:%20Deploying%20${service.title}`} className="btn-modern-primary detail-hero-cta-btn">
                  <span>Deploy {service.title}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a href="https://docs.i2cw.com" target="_blank" rel="noopener noreferrer" className="btn-modern-secondary detail-hero-cta-btn">
                  <span>Technical Documentation</span>
                  <i className="fa-solid fa-book-bookmark"></i>
                </a>
                <Link to="/solutions" className="btn-modern-outline detail-hero-cta-btn">
                  <span>Back to Solutions Catalog</span>
                  <i className="fa-solid fa-list-check"></i>
                </Link>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="detail-hero-metrics-panel glass-panel">
              <span className="metrics-panel-label">Enterprise SLA &amp; Performance</span>
              <div className="metrics-rows-list">
                {activeDetail.metrics.map((m) => (
                  <div className="metric-row-box" key={m.label}>
                    <span className="metric-key">{m.label}</span>
                    <strong className="metric-val">{m.value}</strong>
                  </div>
                ))}
              </div>
              <div className="metrics-panel-footer">
                <i className="fa-solid fa-lock text-blue"></i>
                <span>SOC2 Type II &bull; ADR-001 ZK Proof Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. MAIN SPECIFICATIONS & VISUAL SHOWCASE ═══ */}
      <section className="section detail-body-content-section">
        <div className="container">
          <div className="detail-layout-columns">
            {/* Left Main Content Column */}
            <div className="detail-primary-column">
              {/* 📸 INTERACTIVE VISUAL SHOWCASE & INFOGRAPHIC GALLERY */}
              {activeDetail.gallery && activeDetail.gallery.length > 0 && (
                <div className="detail-block-card glass-panel gallery-showcase-block">
                  <div className="block-card-header">
                    <div className="block-title-row">
                      <i className="fa-solid fa-layer-group text-blue"></i>
                      <h2 className="title is-4 block-card-title">Architecture Design</h2>
                    </div>
                    <span className="gallery-counter">
                      View {activeGalleryIndex + 1} of {activeDetail.gallery.length}
                    </span>
                  </div>

                  {/* Active Full Artwork Display */}
                  <div className="gallery-main-viewport">
                    <img
                      src={activeDetail.gallery[activeGalleryIndex].image}
                      alt={activeDetail.gallery[activeGalleryIndex].title}
                      className="gallery-viewport-img"
                    />
                    <div className="gallery-caption-bar">
                      <h4 className="caption-title">{activeDetail.gallery[activeGalleryIndex].title}</h4>
                      <p className="caption-text">{activeDetail.gallery[activeGalleryIndex].caption}</p>
                    </div>
                  </div>

                  {/* Interactive Thumbnail Switcher */}
                  {activeDetail.gallery.length > 1 && (
                    <div className="gallery-thumbnails-strip">
                      {activeDetail.gallery.map((item, idx) => (
                        <button
                          key={idx}
                          className={`gallery-thumb-btn ${activeGalleryIndex === idx ? "is-active" : ""}`}
                          onClick={() => setActiveGalleryIndex(idx)}
                        >
                          <img src={item.image} alt={item.title} className="gallery-thumb-img" />
                          <span className="thumb-btn-title">{item.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ⚔️ THE ENTERPRISE CHALLENGE VS THE I2C SOLUTION */}
              <div className="detail-block-card glass-panel challenge-solution-block">
                <div className="block-card-header">
                  <i className="fa-solid fa-scale-balanced text-blue"></i>
                  <h2 className="title is-4 block-card-title">The Enterprise Challenge vs. The i2c Solution</h2>
                </div>

                <div className="challenge-solution-grid">
                  <div className="challenge-col-card">
                    <div className="col-card-head challenge-head">
                      <i className="fa-solid fa-circle-exclamation"></i>
                      <h3>Why Legacy Approaches Fail</h3>
                    </div>
                    <p className="challenge-summary-text">{activeDetail.challenge}</p>
                    <ul className="pain-points-list">
                      {activeDetail.painPoints.map((pain, idx) => (
                        <li key={idx} className="pain-point-item">
                          <i className="fa-solid fa-xmark text-danger"></i>
                          <span>{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="solution-col-card">
                    <div className="col-card-head solution-head">
                      <i className="fa-solid fa-circle-check"></i>
                      <h3>Architectural Implementation &amp; Enterprise Value</h3>
                    </div>
                    <p className="solution-summary-text">{activeDetail.solution}</p>
                    {activeDetail.solutionHighlights && activeDetail.solutionHighlights.length > 0 && (
                      <div className="solution-highlights-box">
                        {activeDetail.solutionHighlights.map((highlight, hIdx) => (
                          <div className="highlight-item" key={hIdx}>
                            <i className="fa-solid fa-check text-blue"></i>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* ⚡ KEY CAPABILITIES & ENTERPRISE OUTCOMES */}
              <div className="detail-block-card glass-panel">
                <div className="block-card-header">
                  <i className="fa-solid fa-list-check text-blue"></i>
                  <h2 className="title is-4 block-card-title">Key Capabilities &amp; Business Outcomes</h2>
                </div>

                <div className="capabilities-two-col-grid">
                  {activeDetail.features.map((feat, idx) => (
                    <div className="capability-card-item" key={idx}>
                      <div className="cap-head">
                        <i className="fa-solid fa-circle-check text-blue"></i>
                        <h4 className="cap-title">{feat.title}</h4>
                      </div>
                      <div className="cap-outcome-pill">
                        <span className="outcome-label">Outcome:</span>
                        <span className="outcome-text">{feat.outcome}</span>
                      </div>
                      {feat.desc && <p className="cap-desc-text">{feat.desc}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* 🔄 INTERACTIVE EXECUTION LIFECYCLE & DATA FLOW */}
              <div className="detail-block-card glass-panel">
                <div className="block-card-header">
                  <i className="fa-solid fa-arrow-progress text-blue"></i>
                  <h2 className="title is-4 block-card-title">Execution Lifecycle &amp; Data Flow</h2>
                </div>

                <div className="execution-lifecycle-list">
                  {activeDetail.flow.map((step, idx) => (
                    <div className="lifecycle-step-row" key={idx}>
                      <div className="lifecycle-step-num">0{idx + 1}</div>
                      <div className="lifecycle-step-info">
                        <span className="step-phase-lbl">Phase 0{idx + 1}</span>
                        <p className="step-narrative">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 🏛️ ARCHITECTURAL & SUBSTRATE SPECIFICATIONS */}
              {activeDetail.architecture && (
                <div className="detail-block-card glass-panel">
                  <div className="block-card-header">
                    <i className="fa-solid fa-microchip text-blue"></i>
                    <h2 className="title is-4 block-card-title">Architectural &amp; Substrate Mechanics</h2>
                  </div>

                  <div className="arch-matrix-grid">
                    <div className="arch-matrix-item">
                      <span className="matrix-lbl">Substrate Role</span>
                      <p className="matrix-val">{activeDetail.architecture.substrateRole}</p>
                    </div>
                    <div className="arch-matrix-item">
                      <span className="matrix-lbl">Data Addressing Model</span>
                      <code className="matrix-code">{activeDetail.architecture.dataModel}</code>
                    </div>
                    <div className="arch-matrix-item">
                      <span className="matrix-lbl">Verification Membrane</span>
                      <p className="matrix-val">{activeDetail.architecture.verificationModel}</p>
                    </div>
                    <div className="arch-matrix-item">
                      <span className="matrix-lbl">Execution Protocol</span>
                      <p className="matrix-val">{activeDetail.architecture.executionProtocol}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* 🏢 TARGET INDUSTRIES & SECTORS */}
              <div className="detail-block-card glass-panel">
                <div className="block-card-header">
                  <i className="fa-solid fa-city text-blue"></i>
                  <h2 className="title is-4 block-card-title">Target Industries &amp; Enterprise Verticals</h2>
                </div>

                <div className="industries-badges-row">
                  {activeDetail.industries.map((ind, idx) => (
                    <div className="industry-badge-card" key={idx}>
                      <i className="fa-solid fa-building-circle-check"></i>
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ❓ ENTERPRISE FAQ ACCORDION */}
              {activeDetail.faq && activeDetail.faq.length > 0 && (
                <div className="detail-block-card glass-panel">
                  <div className="block-card-header">
                    <i className="fa-solid fa-circle-question text-blue"></i>
                    <h2 className="title is-4 block-card-title">Enterprise FAQ</h2>
                  </div>

                  <div className="faq-accordion-list">
                    {activeDetail.faq.map((faqItem, idx) => (
                      <div
                        className={`faq-accordion-card ${openFaqIndex === idx ? "is-open" : ""}`}
                        key={idx}
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      >
                        <div className="faq-accordion-q">
                          <h4 className="faq-q-text">{faqItem.q}</h4>
                          <i className={`fa-solid ${openFaqIndex === idx ? "fa-minus" : "fa-plus"} faq-toggle-icon`}></i>
                        </div>
                        {openFaqIndex === idx && (
                          <div className="faq-accordion-a">
                            <p>{faqItem.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ═══ 3. RIGHT SIDEBAR: QUICK FACTS & ACTIONS ═══ */}
            <aside className="detail-sidebar-column">
              {/* Quick Specs Factsheet */}
              <div className="sidebar-box glass-panel">
                <div className="sidebar-box-head">
                  <i className="fa-solid fa-file-contract text-blue"></i>
                  <h3 className="sidebar-box-title">System Specifications</h3>
                </div>

                <div className="sidebar-specs-list">
                  <div className="sidebar-spec-row">
                    <span className="spec-name">Layer:</span>
                    <strong className="spec-data">L{service.layer}: {service.layerName}</strong>
                  </div>
                  <div className="sidebar-spec-row">
                    <span className="spec-name">Category:</span>
                    <strong className="spec-data">{service.categoryLabel}</strong>
                  </div>
                  <div className="sidebar-spec-row">
                    <span className="spec-name">Status:</span>
                    <strong className="spec-data">{service.status}</strong>
                  </div>
                  <div className="sidebar-spec-row">
                    <span className="spec-name">Architecture:</span>
                    <strong className="spec-data">Machine-Native Substrate</strong>
                  </div>
                  <div className="sidebar-spec-row">
                    <span className="spec-name">Deployment:</span>
                    <strong className="spec-data">Cloud / Private VPC / Sovereign Node</strong>
                  </div>
                  <div className="sidebar-spec-row">
                    <span className="spec-name">SLA Uptime:</span>
                    <strong className="spec-data">99.999% High Availability</strong>
                  </div>
                  <div className="sidebar-spec-row">
                    <span className="spec-name">Compliance:</span>
                    <strong className="spec-data">SOC2 Type II / ADR-001</strong>
                  </div>
                </div>
              </div>

              {/* Connected Platform Layers */}
              <div className="sidebar-box glass-panel">
                <div className="sidebar-box-head">
                  <i className="fa-solid fa-cubes text-blue"></i>
                  <h3 className="sidebar-box-title">Connected Platform Stack</h3>
                </div>
                <ul className="sidebar-stack-pills">
                  {activeDetail.stack.map((stk, idx) => (
                    <li key={idx} className="stack-pill-item">
                      <span>{stk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Solutions in Tier */}
              {relatedServices.length > 0 && (
                <div className="sidebar-box glass-panel">
                  <div className="sidebar-box-head">
                    <i className="fa-solid fa-diagram-next text-blue"></i>
                    <h3 className="sidebar-box-title">Related in {service.categoryLabel}</h3>
                  </div>
                  <div className="related-cards-list">
                    {relatedServices.map((rel) => (
                      <Link to={`/solutions/${rel.slug}`} key={rel.slug} className="related-card-anchor">
                        <div className="rel-card-icon">
                          <img src={rel.logoUrl} alt={rel.title} className="rel-icon-img" />
                        </div>
                        <div className="rel-card-text">
                          <h4 className="rel-title">{rel.title}</h4>
                          <span className="rel-tech">{rel.tech}</span>
                        </div>
                        <i className="fa-solid fa-chevron-right rel-arrow"></i>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Deployment CTA */}
              <div className="sidebar-cta-box glass-panel">
                <div className="sidebar-cta-icon-wrap">
                  <i className="fa-solid fa-rocket"></i>
                </div>
                <h3 className="sidebar-cta-title">Deploy {service.title}</h3>
                <p className="sidebar-cta-desc">
                  Schedule a technical architecture briefing or deploy {service.title} in your sovereign enterprise cluster.
                </p>
                <a href={`mailto:contact@i2cw.com?subject=Enterprise%20Deployment:%20${service.title}`} className="btn-modern-primary sidebar-btn-cta">
                  <span>Contact Engineering</span>
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}