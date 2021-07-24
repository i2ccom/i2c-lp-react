import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import AboutUs from "../components/business/AboutUs";

export default function AboutUsPage() {
  return (
    <>
      <AboutUs />
    </>
  );
}
