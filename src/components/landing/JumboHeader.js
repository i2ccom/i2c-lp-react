import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import myInfo from "../../data/myInfo";
import MyHighlightTechs from "../business/OurTechs";
import "./JumboHeader.css";
import {
  initParticlesJs,
  destroyParticlesJs
} from "../../utils/canvasfx/particles";

export default function MyJumboHeader(props) {
  const { style, sides, footer, buttons, more } = props;

  const particlesRef = useRef(null);
  useEffect(() => {
    if (particlesRef.current) {
      initParticlesJs(particlesRef.current);
    }
    return () => {
      if (particlesRef.current) {
        destroyParticlesJs();
      }
    };
  });
  return (
    <section
      className="hero is-fullheight is-fullheight-with-navbar"
      style={style}
    >
      <div id="particles-js" ref={particlesRef}></div>
      <div className="hero-body">
        <div className="container max-width" style={{ width: "100%" }}>
          <div className="columns has-same-height is-gapless is-desktop">
            <div className="column">
              <h1 className="title is-1">{myInfo.name}</h1>
              <h2 className="subtitle is-3">{myInfo.text.summaryShort}</h2>
              <div style={{ margin: "1rem" }}>
                {buttons ? (
                  buttons
                ) : (
                  <button className="button is-primary">Get started</button>
                )}
              </div>
              {more}
            </div>
            <div className="column">{sides}</div>
          </div>
          {footer}
        </div>
      </div>
    </section>
  );
}
