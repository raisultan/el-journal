import { userConstants } from "../constants";

const initialState = {
  subHeaderTitle: null
};

export function changeSubHeaderTitle(state = initialState, action) {
  switch (action.type) {
    case userConstants.CHANGE_SUBHEADER_TITLE:
      return {
        ...state,
        subHeaderTitle: action.value
      };
    default:
      return state;
  }
}
