import {
    DISPLAY_TOS_PAGE,
    CLOSE_TOS_PAGE,
} from '../actions/types';

const initialState = {
    
    termsOfServiceIsOpen: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case DISPLAY_TOS_PAGE:
            return {
                ...state,
                termsOfServiceIsOpen: true,
            }
        case CLOSE_TOS_PAGE:
            return {
                ...state,
                termsOfServiceIsOpen: false,
            }
        default:
            return state;
    } 
}