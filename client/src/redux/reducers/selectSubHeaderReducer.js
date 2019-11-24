import { userConstants } from "../constants";

const initialState = {
  className: null
};

export function selectSubHeader(state = initialState, action) {
  switch (action.type) {
    case userConstants.SELECT_SUBHEADER:
      return {
        ...state,
        className: action.value
      };
    default:
      return state;
  }
}
