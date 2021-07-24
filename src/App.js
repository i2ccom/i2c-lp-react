import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/about">
            <AboutUsPage />
          </Route>
          <Route path="/services">
            <HomePage />
          </Route>
          {/* <Route path="/blogs">
            <Blogs />
          </Route> */}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
