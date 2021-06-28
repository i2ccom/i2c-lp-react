import React from "react";

import myInfo from "../../data/myInfo"
import mySkills from "../../data/mySkills"

export default 
function MySkills(props){
  return (


<div className="column">
  {/* Skills */}
  <div className="card">
    <div className="card-content skills-content">
      <h3 className="title is-4">Skills</h3>
      <div className="content">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>JavaScript:</strong>
                <br />
                <progress className="progress is-primary" value={90} max={100} />
              </p>
            </div>
          </div>
        </article>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Vue.js:</strong>
                <br />
                <progress className="progress is-primary" value={90} max={100} />
              </p>
            </div>
          </div>
        </article>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Node.js:</strong>
                <br />
                <progress className="progress is-primary" value={75} max={100} />
              </p>
            </div>
          </div>
        </article>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>HTML5/CSS3</strong>
                <br />
                <progress className="progress is-primary" value={95} max={100} />
              </p>
            </div>
          </div>
        </article>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Databases</strong>
                <br />
                <progress className="progress is-primary" value={66} max={100} />
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</div>
  )};