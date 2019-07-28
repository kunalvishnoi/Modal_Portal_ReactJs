import React from "react";
import ReactDOM from "react-dom";
import HookOne from "../hook-one";
import HookTwo from "./hook-two";
import HookContainer from "./mouse-container";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <HookOne />
      <HookTwo />
      <HookContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
