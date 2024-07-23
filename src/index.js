import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Globel.css";
import { BrowserRouter as Router } from "react-router-dom";
import ResultContextProvider from "./Context/ResultContext";
ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.getElementById("root")
);
