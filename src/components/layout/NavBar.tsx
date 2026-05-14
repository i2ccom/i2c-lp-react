import React from "react";
import { Link } from "react-router-dom";
import myInfo from "../../data/data.info";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar is-fixed-top modern-navbar" aria-label="Main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item modern-navbar-brand" to="/" aria-label="i2c home">
            <img className="modern-navbar-logo" src={myInfo.logo} alt="i2c logo" />
            <span className="modern-navbar-brand-text">i2c</span>
          </Link>
        </div>

        <div className="navbar-menu is-active">
          <div className="navbar-end modern-navbar-links">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/services">
              Services
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <a className="button is-link is-small modern-navbar-cta" href="/about">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
