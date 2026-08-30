import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import myInfo from "../../data/data.info";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header is-fixed-top">
      <div className="container header-container">
        {/* Left Side: Brand Logo + Home, Solutions, Company */}
        <div className="header-left">
          <Link to="/" className="header-brand" onClick={closeMenu}>
            <img src={myInfo.logo} alt="i2c" className="header-logo-img" />
            <div className="header-brand-text">
              <span className="brand-main">i2c</span>
            </div>
          </Link>

          <nav className="header-nav-left">
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "is-active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/solutions"
              className={`nav-link ${location.pathname.startsWith("/solutions") || location.pathname.startsWith("/services") ? "is-active" : ""}`}
              onClick={closeMenu}
            >
              Solutions
            </Link>

            <Link
              to="/company"
              className={`nav-link ${location.pathname === "/company" || location.pathname === "/about" ? "is-active" : ""}`}
              onClick={closeMenu}
            >
              Company
            </Link>
          </nav>
        </div>

        {/* Right Side: Contact, Console */}
        <div className="header-right">
          <a href={`mailto:${myInfo.email}`} className="nav-link nav-contact-link">
            Contact
          </a>
          <a
            href="https://console.i2cw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-console-cta"
            onClick={closeMenu}
          >
            <span>Console</span>
            <i className="fa-solid fa-chevron-right"></i>
          </a>

          {/* Mobile Menu Burger */}
          <button
            className={`header-burger ${isOpen ? "is-active" : ""}`}
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <div className={`mobile-nav-drawer ${isOpen ? "is-active" : ""}`}>
          <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/solutions" className="mobile-nav-link" onClick={closeMenu}>
            Solutions
          </Link>
          <Link to="/company" className="mobile-nav-link" onClick={closeMenu}>
            Company
          </Link>
          <div className="mobile-nav-divider"></div>
          <a href={`mailto:${myInfo.email}`} className="mobile-nav-link" onClick={closeMenu}>
            Contact
          </a>
          <a
            href="https://console.i2cw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-console-cta mobile-console-btn"
            onClick={closeMenu}
          >
            <span>Console</span>
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
