import React from "react";

class ClickCounter extends React.Component {
  render() {
    const { count, handleCount } = this.props;
    return <button onClick={handleCount}>Clicked {count} times</button>;
  }
}
export default ClickCounter;
