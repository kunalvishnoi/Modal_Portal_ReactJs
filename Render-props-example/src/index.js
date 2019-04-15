import React from "react";
import ReactDOM from "react-dom";
import User from "./User";
import ClickCount from "./ClickCount";
import HoverCount from "./HoverCount";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <User
        render={(count, handleCount) => (
          <ClickCount count={count} handleCount={handleCount} />
        )}
      />
      <User
        render={(count, handleCount) => (
          <HoverCount count={count} handleCount={handleCount} />
        )}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
