import React from "react";

export default function() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="has-text-centered max-w-650 mx-auto">
          <h1 className="title font-900">Testimonials</h1>
        </div>
        <div className="testimonials-container">
          <div className="testimonials-container-content">
            <div className="testimonials-item-container">
              <div className="testimonials-item">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </div>
                <a href>@mortajones</a>
              </div>
              <div className="testimonials-profile">
                <img src="./images/testimonials-1.png" alt="" />
              </div>
            </div>
            <img src="./images/quote.png" alt="" className="quote-separator" />
            <div className="testimonials-item-container">
              <div className="testimonials-item">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </div>
                <a href>@mortajones</a>
              </div>
              <div className="testimonials-profile">
                <img src="./images/testimonials-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
