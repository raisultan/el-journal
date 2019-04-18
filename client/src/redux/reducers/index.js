import { combineReducers } from 'redux'

import { authentication } from './authenticationReducer'
import { routes } from './headerReducer'

const rootReducer = combineReducers({
  authentication,
  routes,
});

export default rootReducer