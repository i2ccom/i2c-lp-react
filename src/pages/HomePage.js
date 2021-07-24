import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Slider from "react-slick";
import BlogGrid from "../components/blog/BlogGrid";
import JumboHeader from "../components/landing/JumboHeader";
import MainSlider from "../components/landing/MainSlider";
import HighlightStats from "../components/landing/HighlightStats";
import OurServices from "../components/business/OurServices";
import OurTechs from "../components/business/OurTechs";
import AboutUs from "../components/business/AboutUs";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import PromoLetCollab from "../components/landing/PromoLetCollab";
import Testimonial from "../components/business/Testimonial";

export default function HomePage() {
  return (
    <>
      <JumboHeader
        sides={
          <>
            <div className="container is-hidden-mobile">
              <MainSlider />
            </div>
            <div className="container">
              <HighlightStats />
            </div>
          </>
        }
        footer={<OurTechs />}
      />
      {/* <AboutMe /> */}
      <OurServices
        header={
          <>
            <Testimonial
              text={
                "We help enteprise solve most challanging technical issues araise in the Cloud Era..."
              }
              cite={"Michael Nguyen - i2c CTO"}
            />
          </>
        }
        middle={
          <>
            <Testimonial
              text={"We want to have more customers and insights..."}
              cite={"Sebastien - BearStock CTO"}
            />
          </>
        }
      />
      <ExtraSections />
      {/* <ContactMe/> */}
    </>
  );
}
function ExtraSections() {
  return (
    <>
      <PromoLetCollab />
      {/* <MyHighlightCircleBlock/> */}
    </>
  );
}
