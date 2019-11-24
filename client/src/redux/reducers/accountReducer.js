import { userConstants } from "../constants";

const initialState = {
  pending: false,
  account: {},
  error: null
};

export function fetchAccount(state = initialState, action) {
  switch (action.type) {
    case userConstants.FETCH_ACCOUNT_PENDING:
      return {
        ...state,
        pending: true
      };
    case userConstants.FETCH_ACCOUNT_SUCCESS:
      return {
        ...state,
        pending: false,
        account: action.account
      };
    case userConstants.FETCH_ACCOUNT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
