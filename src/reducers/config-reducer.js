import { GET_WEBNAME } from "../actions/types";
const INIT_STATE = {
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

    default:
      return state;
  }
};
