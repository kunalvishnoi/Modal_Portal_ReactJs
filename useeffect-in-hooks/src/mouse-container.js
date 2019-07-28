import React, { useState } from "react";
import HookMouse from "./hook-mouse";
const HookContainer = () => {
  const [display, toggleDisplay] = useState(true);

  return (
    <div>
      <h2>useEffect on Unmount</h2>
      <button onClick={() => toggleDisplay(!display)}>ToogleDisplay</button>
      {display ? <HookMouse /> : null}
    </div>
  );
};
export default HookContainer;
