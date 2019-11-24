import { userConstants } from "../constants";

const initialState = {
  displayJournal: false
};

export function displayJournal(state = initialState, action) {
  switch (action.type) {
    case userConstants.DISPLAY_JOURNAL:
      return {
        ...state,
        displayJournal: action.value
      };
    default:
      return state;
  }
}
