import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./Context";
import App from "./App";
import "./styles.css";
import "animate.css";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
