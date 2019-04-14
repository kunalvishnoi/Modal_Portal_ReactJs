import React, { Component } from "react";

const New = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});
export default New;
