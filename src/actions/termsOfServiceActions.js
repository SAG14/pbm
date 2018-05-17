import { 
    DISPLAY_TOS_PAGE, 
    CLOSE_TOS_PAGE 
} from './types';

export const openTOSModal = () => dispatch => {
    dispatch({
        type: DISPLAY_TOS_PAGE,
    })
}

export const closeTOSModal = () => dispatch => {
    dispatch({
        type: CLOSE_TOS_PAGE,
    })
}
