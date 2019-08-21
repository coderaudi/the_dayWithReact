import React, { Component } from "react";
import { connect } from "react-redux";
import AppConfig from "../../const/AppConfig";
import { getLogin } from "../../actions/index";
class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler = data => {
    let tempData = {
      username: "audi",
      password: "audi"
    };
    this.props.getLogin(tempData);
  };
  render() {
    return (
      <div>
        {AppConfig.webName} sign in page
        <button className="btn btn-info" onClick={this.loginHandler}>
          Login
        </button>
        {this.props.config.username}
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ config }) => {
  return {
    config
    // friendList: friendData.friendList,
    // loadingfriendList: friendData.loadingfriendList
    // // data from store to use set as props
    // assignedUserList: userSetting.userListByCustomer,
    // perliminaryCauseList: cases.perliminaryCauseList,
    // complaintCategoryList: cases.complaintCategoryList
  };
};

export default connect(
  mapStateToProps,
  {
    getLogin
    // saveCaseComplaintData   api calls
  }
)(Signin);
