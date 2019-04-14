import React from "react";
import ReactDOM from "react-dom";
import Parent from "./Parent";

import "./styles.css";

function App() {
  return <Parent />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
