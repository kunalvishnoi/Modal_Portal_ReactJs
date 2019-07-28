import React, { useState, useEffect } from "react";

const HookOne = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });
  return (
    <>
      <h2>UseEffect basic example</h2>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </>
  );
};

export default HookOne;
