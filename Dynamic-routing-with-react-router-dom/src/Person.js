import React, { Component } from "react";
import history from "history";

class Person extends Component {
  handleChange = () => {
    this.props.history.goBack();
  };
  render() {
    const style = {
      textAlign: "center"
    };
    return (
      <div>
        <h1 style={style}>Hi {this.props.match.params.name}</h1>
        <button onClick={this.handleChange}>Back</button>
      </div>
    );
  }
}
export default Person;
