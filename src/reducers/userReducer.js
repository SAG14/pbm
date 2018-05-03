import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../actions/types';

const initialState = {
    
    isLoading: false,
    token: '',

    // Login variables
    isAuthenticated: false,
    signInError: '',

    // Registration variables
    isRegistered: false,
    signUpError: '',  
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isAuthenticated: action.payload.success,
                signInError: action.payload.message,
                token: action.payload.token
            }
        case LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: false,
                signInError: '',
                token: ''
            }
        case REGISTER_USER:
            return {
                ...state,
                isRegistered: action.payload.success,
                signUpError: action.payload.message
            }    
        default:
            return state;
    } 
}