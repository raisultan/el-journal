import { combineReducers } from "redux";

import { authentication } from "./authenticationReducer";
import { fetchEventList } from "./eventsReducer";
import { fetchTimeTable } from "./timeTableReducer";
import { fetchJournal } from "./journalReducer";
import { fetchHeader } from "./headerReducer";
import { fetchAccount } from "./accountReducer";
import { selectHeader } from "./selectHeaderReducer";
import { selectSubHeader } from "./selectSubHeaderReducer";
import { displaySubHeader } from "./displaySubHeaderReducer";
import { displayJournal } from "./displayJournalReducer";
import { changeSubHeaderTitle } from "./changeSubHeaderTitleReducer";
import { fetchSchoolInfo } from "./schoolInfoReducer";

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
  displayJournal,
  changeSubHeaderTitle,
  fetchSchoolInfo
});

export default rootReducer;
