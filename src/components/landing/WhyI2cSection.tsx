import React from "react";
import "./WhyI2cSection.css";

export default function WhyI2cSection() {
  const comparisons = [
    {
      dimension: "Architecture & Specifications",
      traditional: "Ambiguous natural-language documents re-interpreted at every handoff; high engineering drift and unexpected rework.",
      i2c: "Machine-checkable ULSX intent graphs. Completeness and validity are verified by AST traversal before code is locked.",
      icon: "fa-solid fa-file-lines"
    },
    {
      dimension: "Data Persistence & Audit",
      traditional: "Mutable in-place SQL/NoSQL updates. Historical regulatory compliance requires complex, fragile CDC log reconstruction.",
      i2c: "FractalDB Spacetime event log with Lamport clocks. Instant deterministic time-travel and immutable auditability.",
      icon: "fa-solid fa-clock-rotate-left"
    },
    {
      dimension: "Data Middleware & Joins",
      traditional: "Static REST/GraphQL joins causing backend latency, N+1 query penalties, and database read locks.",
      i2c: "Kitchen Generative Middleware: Dynamic Recipes compiled into on-demand computed Soup views in under 10ms.",
      icon: "fa-solid fa-network-wired"
    },
    {
      dimension: "AI Agent Orchestration",
      traditional: "High-latency, expensive public cloud LLM calls with privacy leakage risks and unconstrained hallucination.",
      i2c: "MinhAI local edge SLMs (<2GB VRAM) running under grammar constraints for 100% deterministic JSON and code.",
      icon: "fa-solid fa-microchip"
    },
    {
      dimension: "Security & Governance",
      traditional: "Reactive log audits after security incidents or policy breaches have already occurred.",
      i2c: "Jigsaw zero-knowledge ADR-001 CBOR pre-flight verification of cryptographic claims before transaction execution.",
      icon: "fa-solid fa-shield-halved"
    }
  ];

  return (
    <section className="section why-i2c-section">
      <div className="container">
        <div className="section-heading">
          <div className="section-eyebrow">
            <i className="fa-solid fa-scale-balanced"></i>
            <span>Executive Comparison</span>
          </div>
          <h2 className="title is-2 why-title">
            Why Enterprise Leaders Choose <span className="gradient-text">i2c & i2cw</span>
          </h2>
          <p className="subtitle is-5 why-subtitle">
            How content-addressing, Spacetime persistence, and Intent-driven engineering deliver higher reliability, lower latency, and lower total cost of ownership.
          </p>
        </div>

        <div className="comparison-table-wrap glass-panel">
          <div className="comparison-table-header">
            <div className="col-dim">Dimension</div>
            <div className="col-trad">Traditional IT & Cloud Stacks</div>
            <div className="col-i2c">i2c Unified Enterprise Substrate</div>
          </div>

          <div className="comparison-rows">
            {comparisons.map((row) => (
              <div className="comparison-row" key={row.dimension}>
                <div className="col-dim">
                  <i className={row.icon}></i>
                  <span>{row.dimension}</span>
                </div>
                <div className="col-trad">
                  <span className="row-badge-trad">Legacy Model</span>
                  <p>{row.traditional}</p>
                </div>
                <div className="col-i2c">
                  <span className="row-badge-i2c">i2c Architecture</span>
                  <p>{row.i2c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
