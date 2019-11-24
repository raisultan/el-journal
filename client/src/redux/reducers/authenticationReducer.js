import { userConstants } from "../constants";

let token = localStorage.getItem("token");
const initialState = token
  ? { loggedIn: true, loginFail: false, token: token }
  : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loginFail: false,
        token: action.token
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loginFail: true,
        errorMessage: action.error
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
