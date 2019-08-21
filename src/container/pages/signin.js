import React, { Component } from "react";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        sign inpage
        <button className="btn btn-info">Login</button>
      </div>
    );
  }
}

export default Signin;
