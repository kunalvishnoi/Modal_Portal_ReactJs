import React from "react";
import ReactDOM from "react-dom";
import ComponentC from "./ComponentC";
import { UserProvider } from "./userContext";

import "./styles.css";

function App() {
  return (
    <UserProvider value="Kunal">
      <ComponentC />
    </UserProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
