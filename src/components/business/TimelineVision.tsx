import React from "react";
import "./TimelineVision.css";
import teamMembers from "../../data/data.team-members";

type Milestone = {
  year: string;
  title: string;
  description: string;
  logo: string;
};

const milestones: Milestone[] = [
  {
    year: "2014",
    title: "Founding Team of 3",
    description: "i2c started with three founders focused on intelligent cloud systems for practical business operations.",
    logo: "/images/logo/i2cvn-logo.png"
  },
  {
    year: "2015",
    title: "Ubo Launch",
    description: "Released Ubo, an early lightweight collaboration utility for internal teams.",
    logo: "/images/services/ubo-logo.svg"
  },
  {
    year: "2017",
    title: "MarketPlus Release",
    description: "Shipped MarketPlus to help SMB teams centralize campaigns and lead tracking.",
    logo: "/images/services/marketplus-logo.svg"
  },
  {
    year: "2018",
    title: "Enterprise Cloud Programs",
    description: "Expanded from product builds into enterprise cloud modernization engagements.",
    logo: "/images/logo/i2cvn-logo.png"
  },
  {
    year: "2019",
    title: "UniBi Premier",
    description: "Premiered UniBi for ERP and project operations visibility.",
    logo: "/images/products/unibi.jpg"
  },
  {
    year: "2020",
    title: "UniQi Premier",
    description: "Launched UniQi for education and digital learning workflows.",
    logo: "/images/products/uniqi.jpg"
  },
  {
    year: "2021",
    title: "UniFi Premier",
    description: "Introduced UniFi as a finance platform with blockchain-backed transparency.",
    logo: "/images/products/unifi.jpg"
  },
  {
    year: "2022",
    title: "WebBuilder Premier",
    description: "Released WebBuilder to accelerate campaign and website delivery for growth teams.",
    logo: "/images/products/iWeb.jpg"
  },
  {
    year: "2023",
    title: "Tion Premier",
    description: "Rolled out Tion to unify CRM and marketing intelligence pipelines.",
    logo: "/images/products/tion.jpg"
  },
  {
    year: "2024",
    title: "ViAI & OSee Premier",
    description: "Expanded into applied AI and social intelligence with ViAI and OSee.",
    logo: "/images/products/viai.jpg"
  }
];

export default function TimelineVision() {
  return (
    <section className="section timeline-vision-section" id="timeline-vision">
      <div className="container">
        <div className="section-heading">
          <p className="services-eyebrow">Timeline & Vision</p>
          <h3 className="title is-2 timeline-vision-title">Built Fast. Built Right.</h3>
          <p className="timeline-vision-subtitle">
            3 founders. One focused AI-cloud product line.
          </p>
        </div>

        <div className="timeline-founders-card">
          <h4 className="title is-4">👥 Founders</h4>
          <div className="founders-grid">
            {teamMembers.map((member) => (
              <article key={member.id} className="founder-card">
                <img src={member.imageUrl} alt={member.name} className="founder-avatar" loading="lazy" />
                <h5 className="founder-name">{member.name}</h5>
                <p className="founder-role">{member.role}</p>
                <p className="founder-focus">{member.focus}</p>
                <p className="founder-bio">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="timeline-list">
          {milestones.map((m) => (
            <article key={`${m.year}-${m.title}`} className="timeline-item">
              <div className="timeline-year">{m.year}</div>
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-content-card">
                <div className="timeline-logo-wrap">
                  <img src={m.logo} alt={`${m.title} logo`} className="timeline-logo" />
                </div>
                <div>
                  <h5 className="title is-5 timeline-item-title">{m.title}</h5>
                  <p>{m.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
