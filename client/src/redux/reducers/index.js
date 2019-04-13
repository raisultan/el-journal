import { combineReducers } from 'redux'

import { authentication } from './authenticationReducer'
import { registration } from './registrationReducer'
import { users } from './usersReducer'
import { alert } from './alertReducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert
});

export default rootReducer