import React from "react";

function BigCircle() {
  return (
    <div className="circular-container">
      <div className="circular">
        <div>
          <div>
            <img src="./img/circular-icon-4.png" alt="" />
            <div className="title is-size-3 font-900">Powerful</div>
            <div>
              A pseudo-Latin text used in web design, layout, and printing in
              place of English to emphasise design elements.
            </div>
          </div>
          <div>
            <img src="./img/circular-icon-3.png" alt="" />
            <div className="title is-size-3 font-900">Powerful</div>
            <div>
              A pseudo-Latin text used in web design, layout, and printing in
              place of English to emphasise design elements.
            </div>
          </div>
        </div>
      </div>
      <div className="circular">
        <div>
          <div>
            <img src="./img/circular-icon-2.png" alt="" />
            <div className="title is-size-3 font-900">Powerful</div>
            <div>
              A pseudo-Latin text used in web design, layout, and printing in
              place of English to emphasise design elements.
            </div>
          </div>
          <div>
            <img src="./img/circular-icon-1.png" alt="" />
            <div className="title is-size-3 font-900">Powerful</div>
            <div>
              A pseudo-Latin text used in web design, layout, and printing in
              place of English to emphasise design elements.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Title() {
  <div className="has-text-centered max-w-650 mx-auto">
    <h1 className="title font-900">Meet April</h1>
    <p>
      Lorem ipsum is common placeholder text used to demonstrate the graphic
      elements of a document or visual presentation.
    </p>
  </div>;
}
export default function() {
  return (
    <section className>
      <div className="container">
        <Title />
        <BigCircle />
      </div>
    </section>
  );
}
