import { GET_WEBNAME } from "./types";

export const getWebName = () => {
  let data = {
    username: "audi",
    webname: "coderhome"
  };
  return { type: GET_WEBNAME, payload: data };
};
