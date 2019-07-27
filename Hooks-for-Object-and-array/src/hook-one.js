import React, { useState } from "react";
const HookOne = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <div>
      <button onClick={incrementCounter}>You clicked {count} times</button>
    </div>
  );
};
export default HookOne;
