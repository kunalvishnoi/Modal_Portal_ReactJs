import React, { useState, useEffect } from "react";

const HookTwo = () => {
  const [count, setCount] = useState(0);
  const [name, changeName] = useState("");
  useEffect(() => {
    console.log("hi");
    document.title = `You clicked me ${count} times`;
  }, [count]);
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      <h2>UseEffect only for one state Count </h2>
      <input
        type="text"
        value={name}
        onChange={e => changeName(e.target.value)}
      />
      <button onClick={incrementCount}>Click Count {count}</button>
    </div>
  );
};
export default HookTwo;
