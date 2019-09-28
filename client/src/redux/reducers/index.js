import { combineReducers } from 'redux'

import { authentication } from './authenticationReducer'
import {fetchEvents} from './eventsReducer'
import {fetchTimeTable} from './timeTableReducer'
import {fetchJournal} from './journalReducer'
import {fetchSubHeader} from './subHeaderReducer'
import {fetchHeader} from './headerReducer'
import {fetchAccount} from './accountReducer'

const rootReducer = combineReducers({
  authentication,
  fetchEvents,
  fetchTimeTable,
  fetchJournal,
  fetchSubHeader,
  fetchHeader,
  fetchAccount,
})

export default rootReducer