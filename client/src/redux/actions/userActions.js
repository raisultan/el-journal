import axios from 'axios'
import { userConstants } from '../constants' 
import { history } from '../helpers' 

export const userActions = {
    login,
    logout,
} 

const LINK = 'http://7dea414a.ngrok.io'
const LOCAL = 'http://192.168.0.105:3000'

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