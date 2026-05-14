import React from "react";
import "./PromoLetCollab.css";

export default function CollabSection() {
  return (
    <div className="section collab-section">
      <div className="container">
        <div className="columns">
          <div
            className="column"
            style={{
              backgroundImage: "url('/images/background/collab.png')",
              backgroundSize: "cover",
              minHeight: "400px"
            }}
          ></div>
            <div className="column">
              <h1 className="title is-1 collab-title">Let's collab</h1>
              <h2 className="subtitle is-3 collab-subtitle">We Build the Future</h2>
          </div>
        </div>
        <div className="columns">
          <div className="column">
              <h1 className="title is-1 collab-title">Share Your Dream</h1>
              <h2 className="subtitle is-3 collab-subtitle">We Make It</h2>
          </div>
          <div
            className="column"
            style={{
              backgroundImage: "url('/images/background/collab2.jpg')",
              backgroundSize: "cover",
              minHeight: "400px"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}