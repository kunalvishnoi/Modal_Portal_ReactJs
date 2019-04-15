import React from "react";

class ClickCounter extends React.Component {
  render() {
    const { count, handleCount } = this.props;
    return <h1 onMouseOver={handleCount}>Hover {count} times</h1>;
  }
}
export default ClickCounter;
