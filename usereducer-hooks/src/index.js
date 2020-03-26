import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import SecondReducer from "./second-reducer";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <p>count is {count}</p>
      <button onClick={() => setCount("increment")}>Increment</button>
      <button onClick={() => setCount("decrement")}>Decrement</button>
      <button onClick={() => setCount("reset")}>Reset</button>
      <SecondReducer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
