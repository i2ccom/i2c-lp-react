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
import BlogGrid from "./blog/BlogGrid";
import JumboHeader from "./landing/JumboHeader";
import MainSlider from "./landing/MainSlider";
import HighlightStats from "./landing/HighlightStats";
import OurServices from "./business/OurServices";
import OurTechs from "./business/OurTechs";
import AboutUs from "./business/AboutUs";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PromoLetCollab from "./landing/PromoLetCollab";
import Testimonial from "./business/Testimonial";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Home />
          </Route>
          {/* <Route path="/blogs">
            <Blogs />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <>
      <JumboHeader sides={
        <>
        <div className="container is-hidden-mobile">
          <MainSlider />
        </div>
        <div className="container">
          <HighlightStats />
        </div>
        </>
      } 
      footer={
        <OurTechs/>
      } />
      {/* <AboutMe /> */}
      <OurServices 
        header = {
          <>
            <Testimonial text={"We help enteprise solve most challanging technical issues araise in the Cloud Era..."}
            cite = {"Michael Nguyen - i2c CTO"} />
          </>
        middle = {
          <>
            <Testimonial text={"We want to have more customers and insights..."}
            cite = {"Sebastien - BearStock CTO"} />
          </>
      />
      <ExtraSections />
      {/* <ContactMe/> */}
    </>
  );
}
function ExtraSections() {
  return (
    <>
    <PromoLetCollab/>
    {/* <MyHighlightCircleBlock/> */}
    </>
  );
}
function Blogs() {
  return (
    <div>
      <h2>Blogs</h2>
      <BlogGrid blogs={blogsData} />
    </div>
  );
}
function About() {
  return (
    <>
      <AboutUs />
    </>
  );
}
