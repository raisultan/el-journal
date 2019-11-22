import {userConstants} from '../constants'

const initialState = {
    value: null,
}

export function selectSubHeader(state=initialState, action) {
    switch(action.type) {
        case userConstants.SELECT_SUBHEADER:
            return {
                ...state,
                value: action.value
            }
        default:
            return state
    }
}