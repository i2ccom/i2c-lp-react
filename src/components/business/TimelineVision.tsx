import React from "react";
import "./TimelineVision.css";
import teamMembers from "../../data/data.team-members";
import milestones from "../../data/data.timeline";

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
