import React, { Component } from "react";
import { render } from "react-dom";

class User extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  handleCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  render() {
    return <div>{this.props.render(this.state.count, this.handleCount)}</div>;
  }
}
export default User;
