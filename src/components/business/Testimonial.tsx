import React from "react";

type TestimonialProps = {
  text: string;
  cite?: string;
};

export default function Testimonial(props: TestimonialProps) {
  const { text, cite } = props;
  return (
    <div className="testimonial-modern">
      <p className="testimonial-emoji" aria-hidden="true">💬</p>
      <blockquote className="testimonial-modern-quote">{text}</blockquote>
      {cite ? <p className="testimonial-modern-cite">{cite}</p> : null}
    </div>
  );
}