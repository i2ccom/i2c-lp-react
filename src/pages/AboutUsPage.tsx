import React from "react";
import AboutUs from "../components/business/AboutUs";
import OurClients from "../components/business/OurClients";
import TimelineVision from "../components/business/TimelineVision";
import "./AboutUsPage.css";

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = React.useState<"about" | "timeline" | "clients">("about");

  return (
    <section className="section about-tabs-page">
      <div className="container">
        <div className="section-heading">
          <p className="services-eyebrow">Company</p>
          <h1 className="title is-2 about-tabs-title">About i2c</h1>
          <p className="about-tabs-subtitle">Explore our story, roadmap, and client ecosystem.</p>
        </div>

        <div className="about-tabs-nav" role="tablist" aria-label="About page tabs">
          <button
            role="tab"
            className={`about-tab-btn ${activeTab === "about" ? "is-active" : ""}`}
            aria-selected={activeTab === "about"}
            onClick={() => setActiveTab("about")}
          >
            AboutUs
          </button>
          <button
            role="tab"
            className={`about-tab-btn ${activeTab === "timeline" ? "is-active" : ""}`}
            aria-selected={activeTab === "timeline"}
            onClick={() => setActiveTab("timeline")}
          >
            Timeline & Vision
          </button>
          <button
            role="tab"
            className={`about-tab-btn ${activeTab === "clients" ? "is-active" : ""}`}
            aria-selected={activeTab === "clients"}
            onClick={() => setActiveTab("clients")}
          >
            Clients
          </button>
        </div>
      </div>

      <div role="tabpanel" className="about-tabs-panel">
        {activeTab === "about" ? <AboutUs /> : null}
        {activeTab === "timeline" ? <TimelineVision /> : null}
        {activeTab === "clients" ? <OurClients /> : null}
      </div>
    </section>
  );
}
