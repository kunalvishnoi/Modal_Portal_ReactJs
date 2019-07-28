import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = e => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("usEffect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("unmountint state");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <h2>useEffect for only once</h2>
      <span>X- {x}</span>
      <span>Y - {y}</span>
    </div>
  );
};
export default HookMouse;
