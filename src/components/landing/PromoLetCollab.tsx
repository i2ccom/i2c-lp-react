import React from "react";

export default function CollabSection() {
  return (
    <div className="section">
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
              <h1 className="title is-1">Let's collab</h1>
              <h2 className="subtitle is-3">We Build the Future</h2>
          </div>
        </div>
        <div className="columns">
          <div className="column">
              <h1 className="title is-1">Share Your Dream</h1>
              <h2 className="subtitle is-3">We Make It</h2>
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