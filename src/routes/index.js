import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Dashboard from "./dashborad/dashboard";
class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        MainAPp
        <Route exact path="/app/dashbard" component={Dashboard} />
      </div>
    );
  }
}

export default MainApp;
