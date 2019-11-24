import { userConstants } from "../constants";

export const initialState = {
  pending: false,
  events: [],
  error: null
};

export function fetchEventList(state = initialState, action) {
  switch (action.type) {
    case userConstants.FETCH_EVENT_LIST_PENDING:
      return {
        ...state,
        pending: true
      };
    case userConstants.FETCH_EVENT_LIST_SUCCESS:
      return {
        ...state,
        pending: false,
        events: action.events
      };
    case userConstants.FETCH_EVENT_LIST_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
