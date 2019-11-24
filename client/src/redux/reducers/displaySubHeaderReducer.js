import { userConstants } from "../constants";

const initialState = {
  value: false,
  studentClasses: []
};

export function displaySubHeader(state = initialState, action) {
  switch (action.type) {
    case userConstants.DISPLAY_SUBHEADER:
      return {
        ...state,
        value: true,
        studentClasses: action.studentClasses
      };
    default:
      return state;
  }
}
