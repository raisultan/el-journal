import { combineReducers } from 'redux'

import { authentication } from './authenticationReducer'
import {fetchEvents} from './eventsReducer'

const rootReducer = combineReducers({
  authentication,
  fetchEvents,
})

export default rootReducer