import axios from 'axios'
import { userConstants } from '../constants' 
import { alertActions } from './alertActions' 
import { history } from '../helpers' 

export const userActions = {
    login,
    logout,
} 

const LINK = 'http://ed9f8ca4.ngrok.io'
const LOCAL = 'http://192.168.0.105:3000'

function login(user) {
    return dispatch => {
        dispatch(request({ user })) 

        if (user.username === 'test') {
            setTimeout(() => {
                dispatch(success(user))
                history.push('/')
                localStorage.setItem('user', JSON.stringify(user))
            }, 2000)
        } else {
            dispatch(failure('Ошибка'))
            dispatch(alertActions.error('Ошибка'))
        }
        // axios.post(`${LINK}/auth/login`,  user)
        //     .then(res => {
        //         console.log(res)
        //         dispatch(success(res))
        //         history.push('/')
        //         localStorage.setItem('user', JSON.stringify(res.data.token))
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
    localStorage.removeItem('user');
    return { type: userConstants.LOGOUT } 
}