import { headerConstants } from '../constants'

export function routes(state = {}, action) {
  switch (action.type) {
    case headerConstants.CHANGE_ROUTE:
      return Object.assign({}, state, {
        currentRoute: action.route
      })
    default:
      return state
  }
}