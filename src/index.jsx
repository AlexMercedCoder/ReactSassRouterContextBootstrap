import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import { App } from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
