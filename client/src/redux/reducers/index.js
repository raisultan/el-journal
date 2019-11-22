import {combineReducers} from 'redux'

import {authentication} from './authenticationReducer'
import {fetchEventList} from './eventsReducer'
import {fetchTimeTable} from './timeTableReducer'
import {fetchJournal} from './journalReducer'
import {fetchSubHeader} from './subHeaderReducer'
import {fetchHeader} from './headerReducer'
import {fetchAccount} from './accountReducer'
import {selectHeader} from './selectHeaderReducer'
import {selectSubHeader} from './selectSubHeaderReducer'

const rootReducer = combineReducers({
  authentication,
  fetchEventList,
  fetchTimeTable,
  fetchJournal,
  fetchSubHeader,
  fetchHeader,
  fetchAccount,
  selectHeader,
  selectSubHeader,
})

export default rootReducer