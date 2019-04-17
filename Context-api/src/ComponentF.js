import React from "react";
import ComponentE from "./ComponentE";
import { UserConsumer } from "./userContext";
class ComponentF extends React.Component {
  render() {
    return (
      <UserConsumer>
        {username => {
          return <h1>Hello {username}</h1>;
        }}
      </UserConsumer>
    );
  }
}
export default ComponentF;
