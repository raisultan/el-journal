import { userConstants } from "../constants";

const initialState = {
  header: [],
  pending: false,
  error: null
};

export function fetchHeader(state = initialState, action) {
  switch (action.type) {
    case userConstants.FETCH_HEADER_PENDING:
      return {
        ...state,
        pending: true
      };
    case userConstants.FETCH_HEADER_SUCCESS:
      return {
        ...state,
        pending: false,
        header: action.header
      };
    case userConstants.FETCH_HEADER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
