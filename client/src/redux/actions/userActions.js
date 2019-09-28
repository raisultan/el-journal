import axios from 'axios'
import { userConstants } from '../constants'
import { history } from '../helpers'

import {events, timetable, journal} from '../helpers/initialData'

export const userActions = {
    login,
    logout,
    fetchEvents,
    fetchTimeTable,
    fetchJournal,
}

const LINK = 'http://7dea414a.ngrok.io'
const LOCAL = 'http://192.168.0.105:3000'

// auth actions
function login(user) {
    return async dispatch => {
        dispatch(request({ user }))

        //needs to be tested
        // try {
        //     const  response = await axios.post(`${LINK}/auth/login`,  user)
        //     if (response) {
        //         dispatch(success(response))
        //         localStorage.setItem('user', JSON.stringify(response.data.token))
        //         history.push('/')
        //     } else {
        //         dispatch(failure('Неизвестная ошибка'))
        //         dispatch(alertActions.error('Неизвестная ошибка'))
        //     }
        // } catch (e) {
        //     dispatch(failure(e.response.data.message))
        //     dispatch(alertActions.error(e.response.data.message))
        // }

        if (user.username === 'test') {
            setTimeout(() => {
                dispatch(success(user))
                localStorage.setItem('user', JSON.stringify(user))
                history.push('/layout')
            }, 1000)
        } else {
            dispatch(failure('Ошибка'))
        }

        // axios.post(`${LINK}/auth/login`,  user)
        //     .then(res => {
        //         dispatch(success(res))
        //         localStorage.setItem('user', JSON.stringify(res.data.token))
        //         history.push('/')
        //     }).catch(e => {
        //         dispatch(failure(e.response.data.message))
        //         dispatch(alertActions.error(e.response.data.message))
        //     })
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
function logout() {
    localStorage.removeItem('user')
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
