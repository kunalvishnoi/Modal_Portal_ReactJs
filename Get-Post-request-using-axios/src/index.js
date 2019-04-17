import React from "react";
import ReactDOM from "react-dom";
import PostRequest from "./PostRequest";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <PostRequest />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
