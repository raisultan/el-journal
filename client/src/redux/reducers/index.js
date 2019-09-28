import { combineReducers } from 'redux'

import { authentication } from './authenticationReducer'
import {fetchEvents} from './eventsReducer'
import {fetchTimeTable} from './timeTableReducer'
import {fetchJournal} from './journalReducer'

const rootReducer = combineReducers({
  authentication,
  fetchEvents,
  fetchTimeTable,
  fetchJournal,
})

export default rootReducer