import React from "react";
import "./TestimonialsSection.css";

type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  avatarSeed: string;
};

const testimonials: TestimonialItem[] = [
  {
    name: "Michael Nguyen",
    role: "CTO, i2c",
    quote: "i2c helped us cut delivery friction and move from reactive execution to clear, measurable product momentum.",
    avatarSeed: "michael-nguyen"
  },
  {
    name: "Sebastien Roche",
    role: "CTO, BearStock",
    quote: "The team translated our growth goals into practical architecture and gave us faster decision visibility across product and operations.",
    avatarSeed: "sebastien-roche"
  },
  {
    name: "Linh Tran",
    role: "Head of Digital, Enterprise Client",
    quote: "From strategy to delivery, collaboration felt senior and structured. We launched confidently and iterated faster than expected.",
    avatarSeed: "linh-tran"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="section testimonials-pro" id="testimonials">
      <div className="container">
        <div className="section-heading">
          <p className="services-eyebrow">Client voices</p>
          <h2 className="title is-2 testimonials-pro-title">Trusted outcomes, not just promises</h2>
          <p className="testimonials-pro-subtitle">
            We partner with technology and business leaders to solve high-impact platform and growth challenges.
          </p>
        </div>

        <div className="columns is-variable is-5">
          {testimonials.map((t) => (
            <div key={t.name} className="column">
              <article className="testimonial-card-pro">
                <div className="testimonial-card-pro-header">
                  <img
                    className="testimonial-card-pro-avatar"
                    src={`https://api.dicebear.com/8.x/personas/png?seed=${encodeURIComponent(t.avatarSeed)}&size=72&backgroundColor=b6e3f4,c0aede,d1d4f9`}
                    alt={`${t.name} avatar`}
                    loading="lazy"
                  />
                  <div>
                    <p className="testimonial-card-pro-name">{t.name}</p>
                    <p className="testimonial-card-pro-role">{t.role}</p>
                  </div>
                </div>
                <p className="testimonial-card-pro-quote">“{t.quote}”</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}