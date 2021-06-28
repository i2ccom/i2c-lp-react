import React from "react";
import myInfo from "../../data/myInfo";
import mySkills from "../../data/mySkills";
import myServices from "../../data/myServices";

function ServiceCard(props) {
  const {service} = props;
  return (
    <a href={service.link}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img className="zoom-box" src={service.imageUrl} alt={service.title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h4 className="title is-5">{service.title}</h4>
            {service.description}
          </div>
        </div>
      </div>
    </a>
  );
}

export default function OurServices(props) {
  const { title, header, middle, footer } = props;
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <h3 className="title is-2">{title? title: "Services"}</h3>
      </div>
      {header}
      <div className="container">
        <div className="columns">
          {myServices.services.filter(s=>s.p==1).map(service => (
            <div key={service.title} className="column">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
      {middle}
      <div className="container">
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
