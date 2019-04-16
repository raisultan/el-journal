import { userConstants } from '../constants' 
import { alertActions } from './alertActions' 
import { history } from '../helpers' 

export const userActions = {
    login,
    logout,
} 

function login(user) {
    return dispatch => {
        dispatch(request({ user })) 

        // userService.login(username, password)
        //     .then(
        //         user => { 
        //             dispatch(success(user)) 
        //             history.push('/') 
        //         },
        //         error => {
        //             dispatch(failure(error)) 
        //             dispatch(alertActions.error(error)) 
        //         }
        //     ) 
        
        //FAKE AUTH
        if(user.username === 'test' && user.password === 'test') {
            setTimeout(() => {
                dispatch(success(user))
                history.push('/')
                localStorage.setItem('user', JSON.stringify(user));
            }, 3000)            
        }
        else {
            dispatch(failure('error')) 
            dispatch(alertActions.error('error')) 
        }
    } 

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    localStorage.removeItem('user');
    return { type: userConstants.LOGOUT } 
}