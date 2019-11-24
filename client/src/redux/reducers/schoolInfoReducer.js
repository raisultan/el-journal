import { userConstants } from "../constants";

const initialState = {
  schoolInfo: null,
  pending: false,
  error: null
};

export function fetchSchoolInfo(state = initialState, action) {
  switch (action.type) {
    case userConstants.FETCH_SCHOOLINFO_PENDING:
      return {
        ...state,
        pending: true
      };
    case userConstants.FETCH_SCHOOLINFO_SUCCESS:
      return {
        ...state,
        pending: false,
        schoolInfo: action.school
      };
    case userConstants.FETCH_SCHOOLINFO_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
