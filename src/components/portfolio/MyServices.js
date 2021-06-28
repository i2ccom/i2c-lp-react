import React from "react";
import myInfo from "../../data/myInfo";
import mySkills from "../../data/mySkills";
import myServices from "../../data/myServices";

function ServiceCard(props) {
  const service = props.service;
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

export default function MyServices(props) {
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <h3 className="title is-2">Services</h3>
      </div>
      <div className="block is-centered">
          <blockquote className="quote" style={{fontSize: "24px"}}>
            We help enteprise solve most challanging technical issues araise in the Cloud Era...
            <br/>
            <cite>Michael Nguyen - i2c CTO</cite>
          </blockquote>
        </div>
      <div className="container">
        <div className="columns">
          {myServices.services.filter(s=>s.p==1).map(service => (
            <div key={service.title} className="column">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
      <div className="block is-centered">
          <blockquote className="quote" style={{fontSize: "24px"}}>
            We want to have more customers and insights...
            <br/>
            <cite>Sebastien - BearStock CTO</cite>
          </blockquote>
        </div>
      <div className="container">
        <div className="columns">
          {myServices.services.filter(s=>s.p==2).map(service => (
            <div key={service.title} className="column">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
