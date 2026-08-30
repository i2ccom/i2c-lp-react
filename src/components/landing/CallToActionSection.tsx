import React from "react";
import { Link } from "react-router-dom";
import myInfo from "../../data/data.info";
import "./CallToActionSection.css";

export default function CallToActionSection() {
  return (
    <section className="section cta-modern-section">
      <div className="container">
        <div className="cta-banner glass-panel">
          <div className="cta-content">
            <div className="section-eyebrow">
              <i className="fa-solid fa-handshake"></i>
              <span>Enterprise Partnership &amp; Deployment</span>
            </div>

            <h2 className="title is-2 cta-title">
              Ready to Accelerate Your Enterprise with the <span className="gradient-text">i2c Platform</span>?
            </h2>

            <p className="subtitle is-5 cta-subtitle">
              Deploy private edge SLMs with MinhAI, orchestrate real-time data through Kitchen, or modernize ERP operations with UniBi.
            </p>

            <div className="cta-btn-row">
              <Link to="/solutions" className="btn-modern-primary btn-cta-main">
                <span>Explore Solutions</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <a href={`mailto:${myInfo.email}`} className="btn-modern-secondary btn-cta-main">
                <span>Contact Engineering</span>
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>

            <div className="cta-nodes-telemetry">
              <span><strong>i2c Global Offices:</strong> 🇻🇳 Vietnam Office (Hanoi) &bull; 🇺🇸 US Office (Atlanta, GA)</span>
              <span>Enterprise SLA &bull; SOC2 / ZK Compliance Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
