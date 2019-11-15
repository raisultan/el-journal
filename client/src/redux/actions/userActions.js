import axios from 'axios'
import { userConstants } from '../constants'
import { history } from '../helpers'

import {events,
    timetable,
    journal,
    subheader,
    header,
} from '../helpers/initialData'

export const userActions = {
    login,
    logout,
    fetchEvents,
    fetchTimeTable,
    fetchJournal,
    fetchSubHeader,
    fetchHeader,
    fetchAccount,
}

// auth actions
function login(user) {
    return dispatch => {
        dispatch(request(user));
        axios.post('http://localhost:8000/rest-auth/login/', user)
        .then(res => {
            const token = res.data.key
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token', token)
            localStorage.setItem('expirationDate', expirationDate)
            dispatch(success(token))
            dispatch(checkAuthTimeout())
            history.push('/layout')
        })
        .catch(err => {
            dispatch(failure(err))
        })
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST } }
    function success(token) { return { type: userConstants.LOGIN_SUCCESS, token } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
    function checkAuthTimeout () {
    return dispatch => {
        const expDate = localStorage.getItem('expirationDate');
        var dateNow = new Date();

        if(expDate == null || expDate < dateNow.getTime())
            logout()
    }
}
}

function logout() {
    localStorage.removeItem('token')
    history.replace('/')
    return { type: userConstants.LOGOUT }
}

function fetchEvents() {
    return async dispatch => {
        dispatch(fetchEventsPending());
        setTimeout(() => {
            dispatch(fetchEventsSuccess(events))
        }, 1000)
        /*
        fetch('someurl.com/api')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            dispatch(fetchEventsSuccess(res.events))
        })
        .catch(error => {
            dispatch(fetchEventsError(error))
        })
        */
    }

    // events actions
    function fetchEventsPending() {
        return {
            type: userConstants.FETCH_EVENTS_PENDING
        }
    }

    function fetchEventsSuccess(events) {
        return {
            type: userConstants.FETCH_EVENTS_SUCCESS,
            events: events
        }
    }

    function fetchEventsError(error) {
        return {
            type: userConstants.FETCH_EVENTS_ERROR,
            error: error
        }
    }
}

function fetchTimeTable() {
    return async dispatch => {
        dispatch(fetchTimeTablePending());
        setTimeout(() => {
            dispatch(fetchTimeTableSuccess(timetable))
        }, 1000)
        /*
        fetch('someurl.com/api')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            dispatch(fetchTimeTableSuccess(res.events))
        })
        .catch(error => {
            dispatch(fetchTimeTableError(error))
        })
        */
    }

    // events actions
    function fetchTimeTablePending() {
        return {
            type: userConstants.FETCH_TIMETABLE_PENDING
        }
    }

    function fetchTimeTableSuccess(timetable) {
        return {
            type: userConstants.FETCH_TIMETABLE_SUCCESS,
            timetable
        }
    }

    function fetchTimeTableError(error) {
        return {
            type: userConstants.FETCH_TIMETABLE_ERROR,
            error: error
        }
    }
}

function fetchJournal() {
    return async dispatch => {
        dispatch(fetchJournalPending());
        setTimeout(() => {
            dispatch(fetchJournalSuccess(journal))
        }, 1000)
        /*
        fetch('someurl.com/api')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            dispatch(fetchTimeJournalSuccess(res.events))
        })
        .catch(error => {
            dispatch(fetchJournalError(error))
        })
        */
    }

    // events actions
    function fetchJournalPending() {
        return {
            type: userConstants.FETCH_JOURNAL_PENDING
        }
    }

    function fetchJournalSuccess(journal) {
        return {
            type: userConstants.FETCH_JOURNAL_SUCCESS,
            journal
        }
    }

    function fetchJournalError(error) {
        return {
            type: userConstants.FETCH_JOURNAL_ERROR,
            error: error
        }
    }
}

function fetchSubHeader() {
    return async dispatch => {
        dispatch(fetchSubHeaderPending());
        setTimeout(() => {
            dispatch(fetchSubHeaderSuccess(subheader))
        }, 1000)
        /*
        fetch('someurl.com/api')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            dispatch(fetchTimeJournalSuccess(res.events))
        })
        .catch(error => {
            dispatch(fetchJournalError(error))
        })
        */
    }

    // events actions
    function fetchSubHeaderPending() {
        return {
            type: userConstants.FETCH_SUBHEADER_PENDING
        }
    }

    function fetchSubHeaderSuccess(subheader) {
        return {
            type: userConstants.FETCH_SUBHEADER_SUCCESS,
            subheader
        }
    }

    function fetchSubHeaderError(error) {
        return {
            type: userConstants.FETCH_SUBHEADER_ERROR,
            error: error
        }
    }
}

function fetchHeader() {
    return async dispatch => {
        dispatch(fetchHeaderPending());
        setTimeout(() => {
            dispatch(fetchHeaderSuccess(header))
        }, 1000)
        /*
        fetch('someurl.com/api')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            dispatch(fetchTimeJournalSuccess(res.events))
        })
        .catch(error => {
            dispatch(fetchJournalError(error))
        })
        */
    }

    // events actions
    function fetchHeaderPending() {
        return {
            type: userConstants.FETCH_HEADER_PENDING
        }
    }

    function fetchHeaderSuccess(header) {
        return {
            type: userConstants.FETCH_HEADER_SUCCESS,
            header
        }
    }

    function fetchHeaderError(error) {
        return {
            type: userConstants.FETCH_HEADER_ERROR,
            error: error
        }
    }
}

// TODO: check token expiration
function fetchAccount() {
    return dispatch => {
        dispatch(fetchAccountPending());
        axios.get('http://localhost:8000/api/5',)
        .then(res => {
            const userAccountInfo = res.data
            dispatch(fetchAccountSuccess(userAccountInfo))
        })
        .catch(err => {
            dispatch(fetchAccountError(err))
        })
    }

    // events actions
    function fetchAccountPending() {
        return {
            type: userConstants.FETCH_ACCOUNT_PENDING
        }
    }

    function fetchAccountSuccess(account) {
        return {
            type: userConstants.FETCH_ACCOUNT_SUCCESS,
            account
        }
    }

    function fetchAccountError(error) {
        return {
            type: userConstants.FETCH_ACCOUNT_ERROR,
            error: error
        }
    }
}