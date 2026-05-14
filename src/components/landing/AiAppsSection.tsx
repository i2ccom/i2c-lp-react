import React from "react";
import "./AiAppsSection.css";

const aiApps = [
  { name: "aiReport", subtitle: "Smart reporting", icon: "/images/ai-apps/icons/ai-report.jpeg" },
  { name: "aiSales Copilot", subtitle: "Pipeline guidance", icon: "/images/ai-apps/icons/ai-sales-copilot.jpeg" },
  { name: "aiSupport", subtitle: "Ticket assistant", icon: "/images/ai-apps/icons/ai-support.jpeg" },
  { name: "aiForecast", subtitle: "Demand forecast", icon: "/images/ai-apps/icons/ai-forecast.jpeg" },
  { name: "aiContract", subtitle: "Clause intelligence", icon: "/images/ai-apps/icons/ai-contract.jpeg" },
  { name: "aiCampaign", subtitle: "Growth automation", icon: "/images/ai-apps/icons/ai-campaign.jpeg" },
  { name: "aiOps", subtitle: "Ops anomaly watch", icon: "/images/ai-apps/icons/ai-ops.jpeg" },
  { name: "aiKnowledge", subtitle: "Enterprise search", icon: "/images/ai-apps/icons/ai-knowledge.jpeg" }
];

export default function AiAppsSection() {
  return (
    <section className="section ai-apps-section" id="ai-apps">
      <div className="container">
        <div className="section-heading">
          <p className="services-eyebrow">AI Apps</p>
          <h2 className="title is-2 ai-apps-title">Fast, practical AI apps for real workflows</h2>
          <p className="ai-apps-subtitle">
            Explore our first app set. Built for speed, clarity, and measurable business outcomes.
          </p>
        </div>

        <div className="ai-apps-grid" role="list" aria-label="AI app cards">
          {aiApps.map((app) => (
            <article className="ai-app-card" key={app.name} role="listitem">
              <img src={app.icon} alt={`${app.name} icon`} className="ai-app-icon" loading="lazy" />
              <h3 className="ai-app-name">{app.name}</h3>
              <p className="ai-app-tagline">{app.subtitle}</p>
            </article>
          ))}
        </div>

        <div className="ai-apps-actions">
          <a className="button is-link ai-apps-more-btn" href="/services">
            More
          </a>
        </div>
      </div>
    </section>
  );
}