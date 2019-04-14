import React, { Component } from "react";
import Modal from "./Modal";
class PortalNew extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };
  }
  showModal = () => {
    this.setState({
      modal: true
    });
  };
  hideModal = () => {
    this.setState({
      modal: false
    });
  };
  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            maxWidth: 400,
            position: "relative"
          }}
        >
          <h1>My App</h1>
          <p>
            This is an example of how you might use React.createPortal. I think
            it is a pretty neat API that is yet another awesome escape hatch
            that React provides for practical reasons. Sometimes you just need
            to render something completely outside the React Tree.
          </p>
          <button onClick={this.showModal}>Show Modal</button>
          {this.state.modal ? (
            <Modal hideModal={this.hideModal}>
              This is the secret modal message!
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
export default PortalNew;
