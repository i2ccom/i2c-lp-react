import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element was not found");
}

ReactDOM.createRoot(rootElement).render(
  React.createElement(React.StrictMode, null, React.createElement(App))
);
