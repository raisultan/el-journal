import { combineReducers } from 'redux'

import { authentication } from './authenticationReducer'
import { alert } from './alertReducer'
import { routes } from './headerReducer'

const rootReducer = combineReducers({
  authentication,
  alert,
  routes,
});

export default rootReducer