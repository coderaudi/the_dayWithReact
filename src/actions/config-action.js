import { GET_WEBNAME, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "./types";

export const getWebName = () => {
  let data = {
    username: "audi",
    webname: "coderhome"
  };
  return { type: GET_WEBNAME, payload: data };
};

export const loginUser = ({ title, userId }) => {
  return dispatch => {
    dispatch({ type: LOGIN });
    setTimeout(() => {
      dispatch({ type: LOGIN_SUCCESS });
    }, 2500);
    setTimeout(() => {
      dispatch({ type: LOGIN_FAILURE });
    }, 2500);
    // axios
    //   .post(`https://jsonplaceholder.typicode.com/todos`, {
    //     title,
    //     userId,
    //     completed: false
    //   })
    //   .then(res => {
    //     dispatch(addTodoSuccess(res.data));
    //   })
    //   .catch(err => {
    //     dispatch(addTodoFailure(err.message));
    //   });
  };
};
