import React from "react";
import OurServices from "../components/business/OurServices";
import "./ServicesPage.css";

export default function ServicesPage() {
  return (
    <>
      <section className="section services-hero">
        <div className="container services-hero-inner">
          <p className="services-eyebrow">What we build</p>
          <h1 className="title is-1 services-hero-title">AI-cloud products that deliver impact fast</h1>
          <p className="services-hero-subtitle">
            We turn fragmented operations into accountable execution. From board-level visibility to team-level workflows,
            every service is designed to accelerate growth, reduce risk, and improve margins.
          </p>
          <div className="services-hero-corporate-wrap">
            <img
              src="/images/product-illustrations/corporate-users-asia.jpeg"
              alt="Corporate users in Asian market"
              className="services-hero-corporate-image"
            />
          </div>
        </div>
      </section>
      <OurServices title="Service Portfolio" />
    </>
  );
}