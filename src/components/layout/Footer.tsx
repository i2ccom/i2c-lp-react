import React from "react";
import { Link } from "react-router-dom";
import myInfo from "../../data/data.info";
import myServices from "../../data/data.services";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const substrates = myServices.services.filter((s) => s.category === "substrates");
  const aiRuntimes = myServices.services.filter((s) => s.category === "runtimes" || s.category === "runtime-ai");
  const devTrust = myServices.services.filter((s) => s.category === "tools" || s.category === "dev-trust");
  const enterprise = myServices.services.filter((s) => s.category === "apps" || s.category === "enterprise");

  return (
    <footer className="corporate-footer">
      <div className="container">
        {/* Top Corporate Strip */}
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img src={myInfo.logo} alt="i2c Inc." className="footer-logo-img" />
              <div>
                <span className="footer-brand-name">i2c Inc.</span>
                <span className="footer-portal-sub">i2cw Global Portal (i2cw.com)</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Established in 2014, i2c Inc. is an enterprise cloud applications and AI company. We provide unified, machine-native operating foundations connecting Spacetime persistence, generative middleware, and private edge reasoning.
            </p>
            <div className="footer-nodes-info">
              <div className="footer-node-item">
                <i className="fa-solid fa-location-dot"></i>
                <span><strong>Vietnam Office:</strong> 22/8 Nguyen Trai, Hanoi, Vietnam</span>
              </div>
              <div className="footer-node-item">
                <i className="fa-solid fa-location-dot"></i>
                <span><strong>US Office:</strong> Atlanta, GA</span>
              </div>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Enterprise Solutions</h4>
            <ul className="footer-links-list">
              {enterprise.slice(0, 6).map((item) => (
                <li key={item.slug}>
                  <Link to={`/solutions/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Core Substrates</h4>
            <ul className="footer-links-list">
              {substrates.map((item) => (
                <li key={item.slug}>
                  <Link to={`/solutions/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">AI &amp; Runtimes</h4>
            <ul className="footer-links-list">
              {aiRuntimes.slice(0, 6).map((item) => (
                <li key={item.slug}>
                  <Link to={`/solutions/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Company &amp; Trust</h4>
            <ul className="footer-links-list">
              {devTrust.slice(0, 4).map((item) => (
                <li key={item.slug}>
                  <Link to={`/solutions/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
              <li><Link to="/company">Timeline &amp; Founders</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            &copy; 2014 &ndash; {currentYear} <strong>i2cw Global Portal</strong> (i2cw.com). All rights reserved.
          </div>
          <div className="footer-social-links">
            <a href={myInfo.links.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={myInfo.links.linkedIn} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={myInfo.links.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href={`mailto:${myInfo.email}`} title="Email Us">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
