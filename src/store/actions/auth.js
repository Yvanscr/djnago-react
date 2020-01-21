import * as actionsTypes from './actionsTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionsTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionsTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionsTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () =>{
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        types: actionsTypes.AUTH_LOGOUT,
    }
}

const checkAuthTimeOut = expirationTime =>{
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username,password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http:127.0.0.1:8000/rest-auth/login/',{
            username: username,
            password: password
        })
        .then(res =>{
            const token = res.data.key;
            const expirationDate =  new Date(new Date().getTime() + 3600*1000);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeOut(3600));
        })
        .catch(err =>{
            dispatch(authFail(err));
        })
    }
}

export const authSignUp = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http:127.0.0.1:8000/rest-auth/registration/',{
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res =>{
            const token = res.data.key;
            const expirationDate =  new Date(new Date().getTime() + 3600*1000);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeOut(3600));
        })
        .catch(err =>{
            dispatch(authFail(err));
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(token === undefined){
            dispatch(logout());
        }else{
            const expirationDate = new Date(localStorage.getItem('exp'));
            if (expirationDate <= new Date()){
                dispatch(logout());
            }else{
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeOut( expirationDate.getTime() - new Date().getTime() )/ 1000)
            }
        }
    }
}