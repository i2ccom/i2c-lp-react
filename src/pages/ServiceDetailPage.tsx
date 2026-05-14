import React from "react";
import { Link, useParams } from "react-router-dom";
import myServices from "../data/data.services";
import serviceDetails from "../data/data.service-details";
import "./ServiceDetailPage.css";

const conceptSummary: Record<string, string> = {
  unibi: "A unified command layer linking budget control, project execution, and decision visibility.",
  uniqi: "An adaptive learning intelligence model that aligns learner outcomes with institutional performance.",
  unifi: "A trust-centered finance architecture connecting secure transactions, controls, and compliance clarity.",
  webbuilder: "A rapid publishing system for conversion-focused experiences with consistent brand governance.",
  tion: "A revenue operations cockpit where lead quality, campaigns, and retention actions converge.",
  viai: "A governed AI copilot framework combining knowledge, workflow automation, and human handoff.",
  osee: "A market intelligence command hub transforming social signals into strategic decisions."
};

const conceptDetail: Record<string, { businessValue: string; executionModel: string }> = {
  unibi: {
    businessValue: "UniBi gives leadership one operating view of budget, execution risk, and delivery performance.",
    executionModel: "Teams run planning, approvals, and milestone tracking in one governed workflow instead of fragmented tools."
  },
  uniqi: {
    businessValue: "UniQi helps institutions improve completion rates, learner outcomes, and program quality visibility.",
    executionModel: "Program managers and instructors orchestrate curriculum, progress, and interventions through one measurable learning model."
  },
  unifi: {
    businessValue: "UniFi reduces financial friction by improving trust, compliance readiness, and reconciliation speed.",
    executionModel: "Finance and risk teams manage transactions, controls, and reporting on a single auditable operations layer."
  },
  webbuilder: {
    businessValue: "WebBuilder accelerates campaign launches while preserving brand consistency and conversion quality.",
    executionModel: "Marketing teams compose, publish, and optimize experiences rapidly using reusable governance-ready modules."
  },
  tion: {
    businessValue: "Tion improves revenue performance by aligning lead quality, campaign actions, and retention execution.",
    executionModel: "Growth and sales teams prioritize opportunities and run lifecycle journeys from one revenue operations cockpit."
  },
  viai: {
    businessValue: "ViAI raises team productivity with reliable AI assistance while maintaining policy and quality safeguards.",
    executionModel: "Organizations deploy role-based assistants with trusted knowledge retrieval, human handoff, and performance monitoring."
  },
  osee: {
    businessValue: "OSee shortens time-to-insight for brand, competitor, and market signal decisions.",
    executionModel: "Comms and strategy teams monitor multi-channel signals, prioritize alerts, and act from one intelligence command view."
  }
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = myServices.services.find((s) => s.slug === slug);
  const detail = slug ? serviceDetails[slug] : undefined;

  if (!service || !detail) {
    return (
      <section className="section service-detail-not-found">
        <div className="container">
          <h1 className="title is-2">Service not found</h1>
          <p>We could not find that service detail page.</p>
          <Link to="/services" className="button is-link is-light">Back to Services</Link>
        </div>
      </section>
    );
  }

  return (
    <article className="service-detail-page">
      <section className={`section service-detail-hero service-detail-hero--${service.slug}`}>
        <div className="container service-detail-hero-grid">
          <div>
            <p className="service-detail-eyebrow">{service.title}</p>
            <h1 className="title is-1 service-detail-title">{detail.valueProp}</h1>
            <p className="service-detail-subtitle">
              <strong>{service.description}.</strong> Engineered for fast rollout, measurable value, and long-term scale.
            </p>
            <div className="service-detail-cta-row">
              <a className="button is-link is-medium" href="/about">Request a live demo</a>
              <a className="button is-light is-medium" href="/about">Talk to a solution architect</a>
            </div>
          </div>
          <div className="service-detail-hero-image-wrap">
            <img src={service.heroImageUrl} alt={`${service.title} hero`} className="service-detail-hero-image" />
          </div>
        </div>
      </section>

      <section className="section service-detail-subnav-wrap">
        <div className="container">
          <nav className="service-detail-subnav" aria-label="Service detail sections">
            <a href="#problems">Problems</a>
            <a href="#features">Features</a>
            <a href="#preview">Concept</a>
            <a href="#fit">Industry Fit</a>
            <a href="#metrics">Metrics</a>
            <a href="#visual">Visual</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </section>

      <section className="section" id="problems">
        <div className="container service-detail-section-grid">
          <div className="service-detail-block">
            <h2 className="title is-3 service-section-title">🔥 Problems We Solve</h2>
            <ul>
              {detail.painPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-detail-block">
            <h2 className="title is-3 service-section-title">⚙️ Solution Flow</h2>
            <ol>
              {detail.flow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section service-detail-surface" id="features">
        <div className="container">
          <h2 className="title is-3 service-section-title">✨ What This Service Includes</h2>
          <div className="columns is-multiline">
            {detail.features.map((feature) => (
              <div className="column is-4" key={feature.title}>
                <div className="service-feature-card">
                  <h3 className="title is-5">{feature.title}</h3>
                  <p>{feature.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="preview">
        <div className="container">
          <h2 className="title is-3 service-section-title">🧭 Product Concept Map</h2>
          <div className="service-preview-card service-preview-card-wide service-preview-card-primary">
            <img
              src={`/images/product-illustrations/${service.slug}-network-concept.jpeg`}
              alt={`${service.title} network concept illustration`}
              className="service-preview-image"
            />
            <div className="service-concept-copy">
              <h3 className="title is-5">🔗 Users, Services, Infrastructure</h3>
              <p>
                This concept frames the app as one connected system: users, service modules, and i2c core infrastructure
                aligned into a single operational network.
              </p>
            </div>
          </div>

          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="service-preview-card">
                <img
                  src={`/images/product-illustrations/${service.slug}-ui-1.jpeg`}
                  alt={`${service.title} interface preview 1`}
                  className="service-preview-image"
                />
              </div>
            </div>
            <div className="column is-6">
              <div className="service-preview-card">
                <img
                  src={`/images/product-illustrations/${service.slug}-ui-2.jpeg`}
                  alt={`${service.title} interface preview 2`}
                  className="service-preview-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="fit">
        <div className="container service-detail-section-grid">
          <div className="service-detail-block">
            <h2 className="title is-3 service-section-title">🌍 Industry Fit</h2>
            <ul>
              {detail.industries.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </div>

          <div className="service-detail-block">
            <h2 className="title is-3 service-section-title">🧩 Business Enablement</h2>
            <ul>
              {detail.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section service-detail-surface" id="metrics">
        <div className="container">
          <h2 className="title is-3 service-section-title">📈 Impact Metrics</h2>
          <div className="columns">
            {detail.metrics.map((metric) => (
              <div key={metric.label} className="column">
                <div className="service-metric-card">
                  <p className="service-metric-value">{metric.value}</p>
                  <p className="service-metric-label">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-detail-surface" id="visual">
        <div className="container">
          <h2 className="title is-3 service-section-title">🧠 Product Visual Narrative</h2>
          <div className="service-preview-card service-preview-card-wide">
            <img
              src={`/images/product-illustrations/${service.slug}-concept.jpeg`}
              alt={`${service.title} product visual narrative`}
              className="service-preview-image"
            />
            <div className="service-concept-copy">
              <h3 className="title is-5">📌 Service Value Model</h3>
              <p>{conceptSummary[service.slug] || "A focused product architecture for measurable business outcomes."}</p>
              <p>{conceptDetail[service.slug]?.businessValue || "This service is designed to improve execution quality and business outcomes."}</p>
              <p>{conceptDetail[service.slug]?.executionModel || "Teams operate through a unified model that connects decisions, workflows, and measurable impact."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <h2 className="title is-3 service-section-title">❓ FAQ</h2>
          <div className="service-faq-list">
            {detail.faq.map((item) => (
              <details key={item.q} className="service-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-detail-final-cta">
        <div className="container">
          <h2 className="title is-3">Ready to evaluate {service.title}?</h2>
          <p>We can align solution architecture to your business constraints and growth goals.</p>
          <div className="service-detail-cta-row">
            <a className="button is-link is-medium" href="/about">Book a strategy call</a>
            <a className="button is-light is-medium" href={service.link} target="_blank" rel="noreferrer">Visit live product</a>
          </div>
          <p className="service-detail-back-link">
            <Link to="/services">Back to all services</Link>
          </p>
        </div>
      </section>
    </article>
  );
}