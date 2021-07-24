import React from "react";

import myInfo from "../../data/myInfo";

export default function Footer(props) {
  return (
    <footer
      className="footer isGradBg is-color-blue"
      style={{ padding: "16px" }}
    >
      <div className="section-heading">
        <p>
          <span style={{ padding: "8px" }}>
            <img src="/images/logo/i2cvn-logo.png" style={{ height: "40px" }} />
          </span>
          Built by <a href={myInfo.website}>{myInfo.name}</a>. All copyright
          reserved.
        </p>
        <hr />
      </div>
      <h4>
        <strong>Links</strong>
      </h4>
      <div style={{ width: "90%", margin: "auto" }}>
        <div className="columns">
          <div className="column">
            <ul>
              <li>
                <a href="https://unibi.surge.sh">UniBi</a>
              </li>
              <li>
                <a href="https://unifi.surge.sh">UniFi</a>
              </li>
              <li>
                <a href="https://uniqi.surge.sh">UniQi</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li>
                <a href="https://vivoice.surge.sh">ViVoice</a>
              </li>
              <li>
                <a href="https://i2cwebbuilder.surge.sh">WebBuilder</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li>
                <a href="https://logop.surge.sh">LogOp</a>
              </li>
              <li>
                <a href="https://tion.surge.sh">Tion</a>
              </li>
              <li>
                <a href="https://osee.surge.sh">OSee</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
