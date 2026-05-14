import React from "react";

import myInfo from "../../data/data.info";

const aboutParagraphs = [
  'Established in 2014, i2cw is an "AI First" cloud applications company that focuses on bridging the gap between advanced artificial intelligence and practical business operations. The company was founded on the principle that cloud computing should not just be a storage or hosting solution but a dynamic environment where AI is integrated at the core. By leveraging its deep expertise in cloud-native architectures, i2cw helps organizations transition from traditional digital workflows to intelligent, automated systems.',
  'The company\'s philosophy centers on the "AI First" approach, which dictates that every new application or system update starts with a consideration of how machine learning and data science can optimize the outcome. Since its inception, i2cw has worked with a diverse range of clients to deploy scalable solutions that move beyond basic automation toward predictive and prescriptive intelligence. This methodology ensures that businesses are not just reacting to data but are proactively guided by it.',
  "Technologically, i2cw specializes in high-performance cloud environments that support demanding AI workloads. Their platforms are designed to handle complex data processing, real-time analytics, and seamless integration with existing enterprise software. By focusing on modular and flexible architectures, the company allows its clients to scale their AI capabilities incrementally, ensuring that innovation remains sustainable and aligned with specific business goals.",
  "Looking forward, i2cw continues to push the boundaries of what is possible in the cloud-AI intersection. The company remains committed to developing ethical and transparent AI tools that empower human teams rather than replacing them. With a decade of experience in the field, i2cw stands as a seasoned partner for enterprises looking to navigate the complexities of modern digital transformation and secure a competitive edge in an increasingly automated world."
];

const coreServices = [
  "Custom AI Application Development: Designing and deploying bespoke cloud-native apps with built-in machine learning models.",
  "Predictive Analytics & Forecasting: Utilizing historical data to provide actionable insights into market trends and operational efficiency.",
  "Cloud Infrastructure Optimization: Building scalable and secure cloud environments specifically tuned for AI and data-heavy workloads.",
  'Strategic AI Integration: Consulting on the transformation of legacy processes into intelligent, "AI First" workflows.'
];

const companyFacts = [
  ["Established", "2014"],
  ["Focus", 'AI First cloud applications'],
  ["Approach", "Cloud-native, scalable, modular systems"],
  ["Commitment", "Ethical and transparent AI tools"]
];

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
      <div className="section-heading" style={{ padding: "40px" }}>
        <h3 className="title is-2">{myInfo.name}</h3>
        <h4 className="subtitle is-5">{myInfo.text.summaryShort}</h4>
        <div className="container">
          {aboutParagraphs.slice(0, 2).map((paragraph, index) => (
            <p key={index} style={{ marginBottom: "1rem" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="columns has-same-height is-gapless">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <h3 className="title is-4">Company Overview</h3>
              <div className="content">
                <table className="table-profile is-fullwidth">
                  <tbody>
                    <tr>
                      <th colSpan={1} />
                      <th colSpan={2} />
                    </tr>
                    {companyFacts.map(([label, value]) => (
                      <tr key={label}>
                        <td>{label}:</td>
                        <td>{value}</td>
                      </tr>
                    ))}
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
                <a href={myInfo.links.website} className="button is-link">
                  Website
                </a>
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
          <div className="card" style={{ height: "100%" }}>
            <div className="card-content">
              <h3 className="title is-4">Core Services & Vision</h3>
              <div className="content">
                <ul>
                  {coreServices.map(service => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
                <p>
                  <strong>Vision:</strong> To be the global leader in
                  accessible, high-impact AI cloud solutions that drive
                  measurable business value and human-centric innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-heading" style={{ padding: "40px 40px 0" }}>
        <div className="container">
          {aboutParagraphs.slice(2).map((paragraph, index) => (
            <p key={index} style={{ marginBottom: "1rem" }}>
              {paragraph}
            </p>
          ))}
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
