import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import SigninPage from "./pages/signin";
import MainApp from "../routes/index";
function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/app" component={MainApp} />
          <Route path="/signin" component={SigninPage} />
          {/* <Route exact path="/home" component={Homepage} /> */}
          {/* <Route path="/topics" component={Topics} /> */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
