import React from "react";
import JumboHeader from "../components/landing/JumboHeader";
import AiAppsSection from "../components/landing/AiAppsSection";
import MainSlider from "../components/landing/MainSlider";
import HighlightStats from "../components/landing/HighlightStats";
import OurServices from "../components/business/OurServices";
import TestimonialsSection from "../components/business/TestimonialsSection";
import OurTechs from "../components/business/OurTechs";
import PromoLetCollab from "../components/landing/PromoLetCollab";

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
      <OurServices />
      <TestimonialsSection />
      <AiAppsSection />
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
