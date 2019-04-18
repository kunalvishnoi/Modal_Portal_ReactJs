import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import Person from "./Person";
import ScrollMemory from "react-router-scroll-memory";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/person/:name" component={Person} exact />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
