import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StoreComponent from "./app/StoreContext";

ReactDOM.render(
  <StoreComponent>
    <App />
  </StoreComponent>,
  document.getElementById("root")
);
