import React from "react";

import myInfo from "../../data/myInfo";

const displayAddress = address => {
  if (Array.isArray(address)) {
    return (address || []).map((a, index) => (
      <div key={index}>
        <b>{a[0]}</b> : {a[1]}
      </div>
    ));
  } else {
    return <div>{address}</div>;
  }
};

export default function AboutMe(props) {
  return (
    <section className="section" id="about">
      {/* Title */}
      <div className="section-heading" style={{ padding: "40px" }}>
        <h3 className="title is-2">{myInfo.name}</h3>
        <h4 className="subtitle is-5">{myInfo.text.summaryShort}</h4>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: myInfo.text.summary }} />
        </div>
      </div>
      <div className="columns has-same-height is-gapless">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <h3 className="title is-4">Profile</h3>
              <div className="content">
                <table className="table-profile">
                  <tbody>
                    <tr>
                      <th colSpan={1} />
                      <th colSpan={2} />
                    </tr>
                    <tr>
                      <td>Address:</td>
                      <td>{displayAddress(myInfo.address)}</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>{myInfo.phone}</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>{myInfo.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div className="buttons has-addons is-centered">
                <a href={myInfo.links.github} className="button is-link">
                  Github
                </a>
                <a href={myInfo.links.linkedIn} className="button is-link">
                  LinkedIn
                </a>
                <a href={myInfo.links.twitter} className="button is-link">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          {/* Profile picture */}
          <div className="card" style={{ textAlign: "right" }}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src={myInfo.pictures.profilePicture}
                  alt={myInfo.name}
                  style={{ width: "100%" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* Skills tags */
}
{
  /* <br>
            <div class="tags custom-tags">
              <span class="tag is-light">Node.js</span><span class="tag is-light">Express.js</span><span class="tag is-light">VueJS</span><span
                class="tag is-light">JavaScript</span><span class="tag is-light">HTML5</span><span class="tag is-light">Canvas</span><span
                class="tag is-light">CSS3</span><span class="tag is-light">Bulma</span><span class="tag is-light">Bootstrap</span><span
                class="tag is-light">jQuery</span><span class="tag is-light">Pug</span><span class="tag is-light">Stylus</span><span
                class="tag is-light">SASS/SCSS</span><span class="tag is-light">Webpack</span><span class="tag is-light">Git</span><span
                class="tag is-light">ASP.NET Web Forms</span><span class="tag is-light">MSSQL</span><span class="tag is-light">MongoDB</span><span
                class="tag is-light">Apache Cordova</span><span class="tag is-light">Chrome Extensions</span>
            </div> */
}
