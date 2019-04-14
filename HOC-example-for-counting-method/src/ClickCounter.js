import React from "react";
import UpdatedComponent from "./HOCcomponent";
class ClickCounter extends React.Component {
  render() {
    const { count, handleClick } = this.props;
    return (
      <div>
        <button onClick={handleClick}>Clicked {count} times</button>
      </div>
    );
  }
}
export default UpdatedComponent(ClickCounter);
