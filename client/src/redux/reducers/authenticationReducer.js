import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: false, loginFail: false, token: null } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
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
      return state
  }
}