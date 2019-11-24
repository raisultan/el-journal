import { userConstants } from "../constants";

export const initialState = {
  pending: false,
  subheader: [],
  error: null
};

export function fetchSubHeader(state = initialState, action) {
  switch (action.type) {
    case userConstants.FETCH_SUBHEADER_PENDING:
      return {
        ...state,
        pending: true
      };
    case userConstants.FETCH_SUBHEADER_SUCCESS:
      return {
        ...state,
        pending: false,
        subheader: action.subheader
      };
    case userConstants.FETCH_SUBHEADER_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
