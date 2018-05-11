import { 
    REGISTER_USER, 
    LOGIN_USER, 
    LOGOUT_USER,
    REDIRECT_TO_REGISTRATION,
    REDIRECT_TO_LOGIN,
} from '../actions/types';

const initialState = {
    
    token: '',

    // Login variables
    isAuthenticated: false,
    signInError: '',
    currentUser: { },

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
                token: action.payload.token,
                currentUser: action.payload.currentUser,
            }
        case LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: false,
                signInError: '',
                token: '',
                currentUser: { },
            }
        case REGISTER_USER:
            return {
                ...state,
                isRegistered: action.payload.success,
                signUpError: action.payload.message
            }
        case REDIRECT_TO_REGISTRATION:
            return {
                ...state,
                signInError: '',  
            }
        case REDIRECT_TO_LOGIN:
            return {
                ...state,
                isRegistered: false,
                signUpError: '',
            }
        default:
            return state;
    } 
}