import React, { Component } from "react";
import { connect } from "react-redux";
import { getWebName } from "../../actions/index";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getServerData = this.getServerData.bind(this);
  }

  getServerData = data => {
    this.props.getWebName();
  };
  render() {
    return (
      <div>
        Dashboard
        {this.props.config.webname}
        <button onClick={this.getServerData}> connectToServer</button>
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
    getWebName
    // saveCaseComplaintData   api calls
  }
)(Dashboard);
