import { userConstants } from "../constants";

export const initialState = {
  pending: false,
  journal: {},
  error: null
};

export function fetchJournal(state = initialState, action) {
  switch (action.type) {
    case userConstants.FETCH_JOURNAL_PENDING:
      return {
        ...state,
        pending: true
      };
    case userConstants.FETCH_JOURNAL_SUCCESS:
      return {
        ...state,
        pending: false,
        journal: action.journal
      };
    case userConstants.FETCH_JOURNAL_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
