import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "reset":
      return initialState;
    case "increment2":
      return { ...state, secondCount: state.secondCount + action.value };
    case "decrement2":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset2":
      return { firstCount: 0, secondCount: 10 };
    default:
      return state;
  }
};

const SecondReducer = () => {
  const [count, setCount] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Complex useReducer</h1>
      <p>First count {count.firstCount}</p>
      <p>Second count {count.secondCount}</p>
      <button
        onClick={() =>
          setCount({
            type: "increment",
            value: 1
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          setCount({
            type: "decrement",
            value: 1
          })
        }
      >
        Decrement
      </button>
      <button
        onClick={() =>
          setCount({
            type: "increment",
            value: 5
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          setCount({
            type: "decrement",
            value: 5
          })
        }
      >
        Decrement
      </button>
      <button
        onClick={() =>
          setCount({
            type: "increment2",
            value: 5
          })
        }
      >
        Increment2
      </button>
      <button
        onClick={() =>
          setCount({
            type: "decrement2",
            value: 5
          })
        }
      >
        Decrement2
      </button>
      <button
        onClick={() =>
          setCount({
            type: "reset"
          })
        }
      >
        Reset
      </button>
    </div>
  );
};
export default SecondReducer;
