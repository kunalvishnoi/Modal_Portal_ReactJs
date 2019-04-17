import React from "react";
import "./styles.css";
import axios from "axios";

class PostList extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response =>
        this.setState({
          posts: response.data
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        <p>Post Lists</p>
        {posts.length
          ? posts.map(data => {
              return (
                <div key={data.id}>
                  <p>{data.title}</p>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}
export default PostList;
