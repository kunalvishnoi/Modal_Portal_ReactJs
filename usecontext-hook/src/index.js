import React from "react";
import ReactDOM from "react-dom";
import FirstComponent from "./first-component";
import "./styles.css";
import { UserContext } from "./user-context";

function App() {
  return (
    <div className="App">
      <UserContext.Provider value="kunal">
        <FirstComponent />
      </UserContext.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
