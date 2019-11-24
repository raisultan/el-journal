import { userConstants } from "../constants";

export const initialState = {
  pending: false,
  timetable: [],
  error: null
};

export function fetchTimeTable(state = initialState, action) {
  switch (action.type) {
    case userConstants.FETCH_TIMETABLE_PENDING:
      return {
        ...state,
        pending: true
      };
    case userConstants.FETCH_TIMETABLE_SUCCESS:
      return {
        ...state,
        pending: false,
        timetable: action.timetable
      };
    case userConstants.FETCH_TIMETABLE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
