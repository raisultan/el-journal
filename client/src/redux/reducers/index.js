import { combineReducers } from 'redux'

import { authentication } from './authenticationReducer'

const rootReducer = combineReducers({
  authentication,
})

export default rootReducer