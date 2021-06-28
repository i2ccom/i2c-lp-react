import React from "react";
import Slider from "react-slick";
import myInfo from "../../data/myInfo";

const slides = [
  {
    imageUrl: "/images/slider/slider-img-01.jpg",
    description: "Enterprise face Challanges"
  },

  {
    imageUrl: "/images/slider/slider-img-02.jpg",
    description: "Cloud Computing is the Future"
  },

  {
    imageUrl: "/images/slider/slider-img-03.jpg",
    description: "Collaboration in Global scale"
  },

  {
    imageUrl: "/images/slider/slider-img-04.jpg",
    description: "Digital Transform everything"
  },

  {
    imageUrl: "/images/slider/slider-img-05.jpg",
    description: "World is changing"
  }
];
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true
};
export default function MainSlider(props) {
  const { isShowDesc = false} = props;
  return (
    <Slider {...sliderSettings} style={{ width: "600px", height: isShowDesc ? "300px" : "250px" }}>
      {slides.map(slide => (
        <div key="slide.imageUrl">
          <img src={slide.imageUrl} style={{ width: "100%", height: "250px" }}/>
          <div style={{ textAlign: "center", fontSize: "24px" }}>
            {isShowDesc && slide.description}
          </div>
        </div>
      ))}
    </Slider>
  );
}