import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CLIENT_LOGOS } from "../../data/data.architecture";
import "./HeroSection.css";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const heroSlides = [
    {
      id: "architecture",
      title: "Your Intelligent Computing Cloud",
      subtitle: "Enterprise AI infrastructure, smart orchestration, and enterprise-ready collaboration.",
      image: "/images/slides/slide_01_architecture.png",
      badge: "Enterprise AI Infrastructure"
    },
    {
      id: "ecosystem",
      title: "The Operating System for AI-Native Software",
      subtitle: "Unified graph intelligence layer connecting Quang, Hyper, Fluid, Fractal, Shai, and Minh.",
      image: "/images/slides/slide_02.png",
      badge: "i2c Nextgen Multi-Reality"
    },
    {
      id: "quang",
      title: "AI-First Corporate Collaboration Hub",
      subtitle: "Robotic workflow orchestration, global logistics, and no-code apps connected by HyperGraph.",
      image: "/images/slides/slide_06.png",
      badge: "Quang Enterprise Workspace"
    },
    {
      id: "stack",
      title: "The Ecosystem Layer by Layer",
      subtitle: "From files to flow. From prompts to graphs. From apps to autonomous agents.",
      image: "/images/slides/slide_04.png",
      badge: "Substrate Architecture"
    }
  ];

  return (
    <section className="hero-epic-section">
      <div className="container">
        {/* Top Hero Headline */}
        <div className="hero-text-content">
          <div className="hero-pill-badge">
            <span className="pill-dot"></span>
            <span>i2c Inc. Enterprise Operating System &bull; 2026+ Nextgen Architecture</span>
          </div>

          <h1 className="hero-main-title">
            Intelligent. Interconnected. <span className="gradient-text">Cloud &amp; AI Platform</span>
          </h1>

          <p className="hero-main-description">
            <strong>i2c Inc.</strong> (i2c.com) provides mission-critical enterprise software foundations, deterministic Spacetime databases, generative data middleware, and the <strong>i2cw Global Portal</strong> (i2cw.com) connecting 36 verified products.
          </p>

          <div className="hero-cta-buttons">
            <Link to="/solutions" className="btn-modern-primary hero-btn-lg">
              <span>Explore Solutions &amp; Catalog</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link to="/company" className="btn-modern-secondary hero-btn-lg">
              <span>Company &amp; Timeline</span>
              <i className="fa-solid fa-timeline"></i>
            </Link>
          </div>
        </div>

        {/* Epic Hero Artwork Showcase Carousel */}
        <div className="hero-artwork-frame glass-panel">
          <div className="artwork-toolbar">
            <div className="artwork-tabs">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  className={`artwork-tab-btn ${activeSlide === idx ? "is-active" : ""}`}
                  onClick={() => setActiveSlide(idx)}
                >
                  <span>{slide.badge}</span>
                </button>
              ))}
            </div>
            <div className="artwork-telemetry">
              <span className="telemetry-live">● LIVE PLATFORM VIEW</span>
            </div>
          </div>

          <div className="artwork-display-area">
            <img
              src={heroSlides[activeSlide].image}
              alt={heroSlides[activeSlide].title}
              className="artwork-main-image"
            />
            <div className="artwork-overlay-caption">
              <h3 className="caption-title">{heroSlides[activeSlide].title}</h3>
              <p className="caption-desc">{heroSlides[activeSlide].subtitle}</p>
            </div>
          </div>
        </div>

        {/* Enterprise Client Trust Bar */}
        <div className="hero-trust-bar">
          <span className="trust-label">TRUSTED BY FORWARD-THINKING ENTERPRISES &amp; PLATFORMS:</span>
          <div className="trust-logos-row">
            {CLIENT_LOGOS.map((client) => (
              <div className="trust-logo-card" key={client.name}>
                <img src={client.logo} alt={client.name} className="trust-client-logo" />
                <span className="trust-client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
