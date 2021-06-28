import React from "react";
import Slider from "react-slick";
import myTechsData from "../../data/myTechs";
import MyHighlightStats from "../landing/HighlightStats";

const slides = myTechsData.techs;
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};
function MyTechsSlider(props) {
  const slides = props.slides;
  return (
    <Slider {...sliderSettings} style={{ height: "80px" }}>
      {slides.map(slide => (
        <div key="slide.imageUrl">
          <a href={slide.link} title={slide.name}>
            <img src={slide.imageUrl} style={{opacity: "0.8", width: "200px", height: "80px"}}/>
          </a>
        </div>
      ))}
    </Slider>
  );
}
function StaticTechList(){
  return (
    <div className="columns has-same-height is-gapless">
    {techs.map(tech=>
      <div className="column">
        <img src={tech.iconUrl} width="200px"/>
      </div>
    )}
    </div>
  )
}
export default function MyTechs(props) {
  return (
    <section className="section">
      <div className="columns is-desktop">
        <div className="column is-full">
          <h2 className="subtitle is-3">Techstacks</h2>
          <div style={{width: "100%", height: "120px"}}>
            <MyTechsSlider slides={slides}/>
          </div>
        </div>
      </div>
    </section>
  );
}
