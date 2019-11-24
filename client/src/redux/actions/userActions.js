import axios from "axios";
import { userConstants } from "../constants";
import { history } from "../helpers";

export const userActions = {
  login,
  logout,
  fetchEventList,
  fetchTimeTable,
  fetchJournal,
  fetchHeader,
  fetchAccount,
  selectHeader,
  selectSubHeader,
  displaySubHeader,
  displayJournalToggle,
  changeSubHeaderTitle,
  fetchSchoolInfo
};

function login(user) {
  return dispatch => {
    dispatch(request(user));
    axios
      .post("http://localhost:8000/api/user/token/", user)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        dispatch(success(token));
        history.push("/layout");
      })
      .catch(err => {
        dispatch(
          failure("Невозможно войти с предоставленными учетными данными")
        );
      });
  };

  function request() {
    return { type: userConstants.LOGIN_REQUEST };
  }
  function success(token) {
    return { type: userConstants.LOGIN_SUCCESS, token };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  localStorage.removeItem("token");
  history.replace("/");
  return { type: userConstants.LOGOUT };
}

function fetchEventList() {
  return dispatch => {
    dispatch(fetchEventListPending());
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/api/event/events/", {
        headers: { Authorization: `Token ${token}` }
      })
      .then(res => {
        const events = res.data;
        dispatch(fetchEventListSuccess(events));
      })
      .catch(err => {
        dispatch(fetchEventListError("Возникла ошибка при подгрузке событий."));
      });
  };

  function fetchEventListPending() {
    return {
      type: userConstants.FETCH_EVENT_LIST_PENDING
    };
  }

  function fetchEventListSuccess(events) {
    return {
      type: userConstants.FETCH_EVENT_LIST_SUCCESS,
      events: events
    };
  }

  function fetchEventListError(error) {
    return {
      type: userConstants.FETCH_EVENT_LIST_ERROR,
      error: error
    };
  }
}

function fetchTimeTable() {
  return dispatch => {
    dispatch(fetchTimeTablePending());
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/api/timetable/days/", {
        headers: { Authorization: `Token ${token}` }
      })
      .then(res => {
        const timetable = res.data;
        dispatch(fetchTimeTableSuccess(timetable));
      })
      .catch(err => {
        dispatch(
          fetchTimeTableError("Возникла ошибка при подгрузке расписания.")
        );
      });
  };

  function fetchTimeTablePending() {
    return {
      type: userConstants.FETCH_TIMETABLE_PENDING
    };
  }

  function fetchTimeTableSuccess(timetable) {
    return {
      type: userConstants.FETCH_TIMETABLE_SUCCESS,
      timetable
    };
  }

  function fetchTimeTableError(error) {
    return {
      type: userConstants.FETCH_TIMETABLE_ERROR,
      error: error
    };
  }
}

function fetchJournal(className, subjectName) {
  return dispatch => {
    dispatch(fetchJournalPending());
    const token = localStorage.getItem("token");
    axios
      .get(
        `http://localhost:8000/api/journal/journals/?student_class=${className}&subject=${subjectName}`,
        { headers: { Authorization: `Token ${token}` } }
      )
      .then(res => {
        const journal = {
          subjectName: subjectName,
          className: className,
          data: res.data
        };
        dispatch(fetchJournalSuccess(journal));
      })
      .catch(err => {
        dispatch(
          fetchJournalError(
            "Возникла ошибка при подгрузке журнала. Попробуйте обновить страницу."
          )
        );
      });
  };

  function fetchJournalPending() {
    return {
      type: userConstants.FETCH_JOURNAL_PENDING
    };
  }

  function fetchJournalSuccess(journal) {
    return {
      type: userConstants.FETCH_JOURNAL_SUCCESS,
      journal
    };
  }

  function fetchJournalError(error) {
    return {
      type: userConstants.FETCH_JOURNAL_ERROR,
      error: error
    };
  }
}

function fetchHeader() {
  return dispatch => {
    dispatch(fetchHeaderPending());
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/api/user/me/", {
        headers: { Authorization: `Token ${token}` }
      })
      .then(res => {
        const header = res.data.teaching_subjects;
        dispatch(fetchHeaderSuccess(header));
      })
      .catch(err => {
        dispatch(
          fetchHeaderError("Возникла ошибка при подгрузке данных об учителе.")
        );
      });
  };

  function fetchHeaderPending() {
    return {
      type: userConstants.FETCH_HEADER_PENDING
    };
  }

  function fetchHeaderSuccess(header) {
    return {
      type: userConstants.FETCH_HEADER_SUCCESS,
      header
    };
  }

  function fetchHeaderError(error) {
    return {
      type: userConstants.FETCH_HEADER_ERROR,
      error: error
    };
  }
}

function selectHeader(value) {
  return dispatch => {
    dispatch(fetchHeader(value));
  };

  function fetchHeader() {
    return {
      type: userConstants.SELECT_HEADER,
      value
    };
  }
}

function displayJournalToggle(value) {
  return dispatch => {
    dispatch(displayJournal(value));
  };

  function displayJournal(value) {
    return {
      type: userConstants.DISPLAY_JOURNAL,
      value: value
    };
  }
}

function displaySubHeader(studentClasses) {
  return dispatch => {
    dispatch(displaySubHeader(studentClasses));
  };

  function displaySubHeader() {
    return {
      type: userConstants.DISPLAY_SUBHEADER,
      studentClasses: studentClasses
    };
  }
}

function selectSubHeader(value) {
  return dispatch => {
    dispatch(fetchSubHeader(value));
  };

  function fetchSubHeader() {
    return {
      type: userConstants.SELECT_SUBHEADER,
      value
    };
  }
}

function fetchAccount() {
  return dispatch => {
    dispatch(fetchAccountPending());
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/api/user/me/", {
        headers: { Authorization: `Token ${token}` }
      })
      .then(res => {
        const userAccountInfo = res.data;
        dispatch(fetchAccountSuccess(userAccountInfo));
      })
      .catch(err => {
        dispatch(
          fetchAccountError("Возникла ошибка при подгрузке данных об учителе.")
        );
      });
  };

  function fetchAccountPending() {
    return {
      type: userConstants.FETCH_ACCOUNT_PENDING
    };
  }

  function fetchAccountSuccess(account) {
    return {
      type: userConstants.FETCH_ACCOUNT_SUCCESS,
      account
    };
  }

  function fetchAccountError(error) {
    return {
      type: userConstants.FETCH_ACCOUNT_ERROR,
      error: error
    };
  }
}

function changeSubHeaderTitle(value) {
  return dispatch => {
    dispatch(changeSubHeaderTitle(value));
  };

  function changeSubHeaderTitle(value) {
    return {
      type: userConstants.CHANGE_SUBHEADER_TITLE,
      value: value
    };
  }
}

function fetchSchoolInfo() {
  return dispatch => {
    dispatch(fetchSchoolInfoPending());
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/api/journal/school/", {
        headers: { Authorization: `Token ${token}` }
      })
      .then(res => {
        const school = res.data[0];
        dispatch(fetchSchoolInfoSuccess(school));
      })
      .catch(err => {
        dispatch(
          fetchSchoolInfoError(
            "Возникла ошибка при подгрузке информации о школе."
          )
        );
      });
  };

  function fetchSchoolInfoPending() {
    return {
      type: userConstants.FETCH_SCHOOLINFO_PENDING
    };
  }

  function fetchSchoolInfoSuccess(school) {
    return {
      type: userConstants.FETCH_SCHOOLINFO_SUCCESS,
      school
    };
  }

  function fetchSchoolInfoError(error) {
    return {
      type: userConstants.FETCH_SCHOOLINFO_ERROR,
      error: error
    };
  }
}
