/**
 * App Reducers
 */

// all reducers file are here
import { combineReducers } from "redux";
import config from "./config-reducer";

// import sidebarReducer from "./SidebarReducer";
// import authUserReducer from "./AuthUserReducer";

const appReducer = combineReducers({
  config
  // friendData: FriendListReducer
  // authUser: authUserReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === LOGOUT_USER) {
  //   state = undefined;
  // }
  return appReducer(state, action);
};

export default rootReducer;
