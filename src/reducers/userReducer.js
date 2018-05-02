import { REGISTER_USER, LOGIN_USER } from '../actions/types';

const initialState = {
    
    isLoading: false,
    token: '',

    isAuthenticated: false,

    // Registration variables
    signUpError: '',
    signUpEmail: '',
    signUpFirstName: '',
    signUpLastName: '',
    signUpPassword: '',
    signUpConfirmPassword: '',
    signUpStudentNo: '',    
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isAuthenticated: action.payload.success
            }
        default:
            return state;
    } 
}