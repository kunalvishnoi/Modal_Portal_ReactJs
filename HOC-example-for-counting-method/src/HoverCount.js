import React from "react";
import UpdatedComponent from "./HOCcomponent";

class HoverCount extends React.Component {
  render() {
    const { count, handleClick } = this.props;
    return (
      <div>
        <h1 onMouseOver={handleClick}>Hover {count} times</h1>
      </div>
    );
  }
}
export default UpdatedComponent(HoverCount);
