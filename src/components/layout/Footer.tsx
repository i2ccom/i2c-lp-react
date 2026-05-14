import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import myInfo from "../../data/data.info";
import myServices from "../../data/data.services";

const products = myServices.services.filter((s) => s.showInFooter === true);

export default function Footer() {
  return (
    <footer className="footer modern-footer">
      <div className="container">
        <div className="columns is-variable is-5">
          <div className="column is-5">
            <div className="modern-footer-brand">
              <img src="/images/logo/i2cvn-logo.png" alt="i2c logo" className="modern-footer-logo" />
              <div>
                <h4 className="title is-5 modern-footer-title">i2c - Intelligent Cloud Computing</h4>
                <p className="modern-footer-text">
                  We design and build cloud-native products with practical AI capabilities for enterprise and growth teams.
                </p>
              </div>
            </div>
            <p className="modern-footer-meta">
              Built by <a href={myInfo.links.website} target="_blank" rel="noreferrer">{myInfo.name}</a>. All rights reserved.
            </p>
          </div>

          <div className="column">
            <h5 className="modern-footer-heading">Explore</h5>
            <ul className="modern-footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          <div className="column">
            <h5 className="modern-footer-heading">Products</h5>
            <ul className="modern-footer-list two-col">
              {products.map((p) => (
                <li key={p.slug}>
                  <a href={p.link} target="_blank" rel="noreferrer">{p.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="column">
            <h5 className="modern-footer-heading">Contact</h5>
            <ul className="modern-footer-list">
              <li>📍 🇻🇳 Hanoi, Vietnam / 🇺🇸 Atlanta, USA</li>
              <li>📧 {myInfo.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
