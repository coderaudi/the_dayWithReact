import {
  GET_WEBNAME,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from "../actions/types";
const INIT_STATE = {
  username: "",
  userLogged: false,
  loadingUserLogin: false,
  webname: "webname_default",
  data: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WEBNAME:
      return {
        ...state,
        copyRightText: "",
        webname: "server_name"
        //  data: action.payload
      };
    case "GET_FOOTER_TEXT_SUCCESS":
      return {
        ...state,
        casesDataLoading: false,
        copyRightText: "coderHOmeFooter serv" //action.payload
      };
    case "GET_FOOTER_TEXT_FAILURE":
      return {
        ...state,
        casesDataLoading: false,
        copyRightText: "NA"
      };

    case LOGIN:
      return {
        ...state,
        username: "logging_started",
        userLogged: false,
        loadingUserLogin: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: "Audi_user",
        userLogged: true,
        loadingUserLogin: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        username: "",
        userLogged: false,
        loadingUserLogin: false
      };

    default:
      return state;
  }
};
