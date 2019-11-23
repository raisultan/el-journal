import {combineReducers} from 'redux'

import {authentication} from './authenticationReducer'
import {fetchEventList} from './eventsReducer'
import {fetchTimeTable} from './timeTableReducer'
import {fetchJournal} from './journalReducer'
import {fetchHeader} from './headerReducer'
import {fetchAccount} from './accountReducer'
import {selectHeader} from './selectHeaderReducer'
import {selectSubHeader} from './selectSubHeaderReducer'
import {displaySubHeader} from './displaySubHeaderReducer'

const rootReducer = combineReducers({
  authentication,
  fetchEventList,
  fetchTimeTable,
  fetchJournal,
  fetchHeader,
  fetchAccount,
  selectHeader,
  selectSubHeader,
  displaySubHeader,
})

export default rootReducer