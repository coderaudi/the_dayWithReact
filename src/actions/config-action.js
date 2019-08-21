import { GET_WEBNAME, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "./types";

export const getWebName = () => {
  let data = {
    username: "audi",
    webname: "coderhome"
  };
  return { type: GET_WEBNAME, payload: data };
};

export const getLogin = data => {
  if (data.username == data.password) {
    return { type: LOGIN_SUCCESS, payload: data };
  } else {
    return { type: LOGIN_FAILURE, payload: data };
  }
};
