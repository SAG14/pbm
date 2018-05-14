import {
    REGISTER_USER, 
    LOGIN_USER, 
    LOGOUT_USER, 
    UPDATE_REGISTER_VALUE,
    REDIRECT_TO_REGISTRATION,
    REDIRECT_TO_LOGIN, 
} from './types';

export const toRegistration = () => dispatch => {
    dispatch({
        type: REDIRECT_TO_REGISTRATION, 
    })
}

export const toLogin = () => dispatch => {
    dispatch({
        type: REDIRECT_TO_LOGIN,
    })
}

export const signIn = (credentialData) => dispatch => {
    fetch('http://localhost:3100/api/account/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentialData)
        })
        .then(res => res.json())
        .then(data => 
            dispatch ({
                type: LOGIN_USER,
                payload: data
            })
        );
}

export const logout = (token) => dispatch => {
    fetch('http://localhost:3100/api/account/logout?token=' + token)
            .then(res => res.json())
            .then(data =>
                dispatch ({
                    type: LOGOUT_USER,
                    payload: data
                })
            );
}

export const register = (userData) => dispatch =>{
    fetch('http://localhost:3100/api/account/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then(res => res.json())
            .then(data => 
                dispatch ({
                    type: REGISTER_USER,
                    payload: data
                })
            );
}

// export const resetRegisterValue = (registerData) => dispatch => {
//     dispatch({
//         type: UPDATE_REGISTER_VALUE,
//         payload: JSON.stringify(registerdData)
//     });
// }