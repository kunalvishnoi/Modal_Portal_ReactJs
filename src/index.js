import React from "react";
import ReactDOM from "react-dom";
import New from "./New";
import PortalNew from "./PortalNew";

import "./styles.css";

function App() {
  return <New />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
