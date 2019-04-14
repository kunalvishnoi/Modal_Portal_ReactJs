import React from "react";
import ReactDOM from "react-dom";
import ClickCounter from "./ClickCounter";
import HoverCount from "./HoverCount";
import "./styles.css";

function App() {
  return (
    <div>
      <ClickCounter />
      <HoverCount />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
