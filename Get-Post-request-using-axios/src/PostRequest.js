import React from "react";
import "./styles.css";
import axios from "axios";
class PostRequest extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }
  handleChange = e => {
    const elem = e.target;
    this.setState({
      [elem.name]: elem.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="userId"
            value={this.state.userId}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />

          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <br />

          <button type="submit">Submit Data</button>
        </form>
      </div>
    );
  }
}
export default PostRequest;
