import React from "react";

export default function MyResume(props) {
  return (
    <section className="section" id="resume">
      <div className="section-heading">
        <h3 className="title is-2">Resume</h3>
        <h4 className="subtitle is-5">More about my past</h4>
        <a href="#" className="button is-link is-medium">
          <span className="icon">
            <i className="fas fa-file-alt" />
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
    </section>
  );
}
