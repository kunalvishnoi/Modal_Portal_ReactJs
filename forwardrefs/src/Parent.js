import React, { Component } from "react";
import New from "./New";

class Parent extends Component {
  constructor() {
    super();
    this.compRef = React.createRef();
  }

  ParentHandle = () => {
    this.compRef.current.focus();
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <New ref={this.compRef} />
        <button onClick={this.ParentHandle}>Click Me !</button>
      </div>
    );
  }
}
export default Parent;
