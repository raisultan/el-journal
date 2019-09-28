import { userConstants } from '../constants'

export const initialState = {
    pending: false,
    events: [],
    error: null
}

export function fetchEvents(state = initialState, action) {
    switch(action.type) {
        case userConstants.FETCH_EVENTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case userConstants.FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                pending: false,
                events: action.events
            }
        case userConstants.FETCH_EVENTS_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state
    }
}