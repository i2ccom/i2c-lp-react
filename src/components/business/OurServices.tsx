import React from "react";
import { Link } from "react-router-dom";
import myServices from "../../data/data.services";
import "./OurServices.css";

function ServiceCard(props: { service: any }) {
  const {service} = props;
  return (
    <Link to={`/services/${service.slug}`} className="service-card-link">
      <div className="card service-card-modern">
        <div className="card-image service-card-image-wrap">
          <figure className="image is-4by3 service-card-image-figure">
            <img className="zoom-box service-card-image" src={service.logoUrl} alt={`${service.title} logo`} />
          </figure>
        </div>
        <div className="card-content service-card-content">
          <div className="content">
            <h4 className="title is-5 service-card-title">{service.title}</h4>
            <p className="service-card-description">{service.description}</p>
            <p className="service-card-cta">Explore</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function OurServices(props: { title?: string; header?: React.ReactNode; middle?: React.ReactNode; footer?: React.ReactNode }) {
  const { title, header, middle, footer } = props;
  return (
    <section className="section modern-services-section" id="services">
      <div className="section-heading">
        <h3 className="title is-2 modern-services-title">{title? title: "Services"}</h3>
      </div>
      {header}
      <div className="container modern-services-grid-wrap">
        <div className="columns">
          {myServices.services.filter(s=>s.p==1).map(service => (
            <div key={service.title} className="column">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
      {middle}
      <div className="container modern-services-grid-wrap">
        <div className="columns">
          {myServices.services.filter(s=>s.p==2).map(service => (
            <div key={service.title} className="column">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
      {footer}
    </section>
  );
}
