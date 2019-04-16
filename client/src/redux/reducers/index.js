import { combineReducers } from 'redux'

import { authentication } from './authenticationReducer'
import { alert } from './alertReducer';

const rootReducer = combineReducers({
  authentication,
  alert
});

export default rootReducer