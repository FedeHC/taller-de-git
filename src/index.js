import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { TallerDeGitApp } from "./TallerDeGitApp";
import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <TallerDeGitApp />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
