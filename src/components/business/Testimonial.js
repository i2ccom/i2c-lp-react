import React from "react";

export default function Testimonial(props) {
  const { text, subtitle, cite, photo, link } = props;
  return (
    <div className="block is-centered">
      <blockquote className="quote" style={{fontSize: "24px"}}>
        {text}
        <br/>
        <cite>{cite}</cite>
      </blockquote>
    </div>
  )
}