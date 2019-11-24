import { userConstants } from "../constants";

const initialState = {
  subjectName: null
};

export function selectHeader(state = initialState, action) {
  switch (action.type) {
    case userConstants.SELECT_HEADER:
      return {
        ...state,
        subjectName: action.value
      };
    default:
      return state;
  }
}
