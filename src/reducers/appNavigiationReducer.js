import {
    REDIRECT_TO_EXPORT_PDF,
    REDIRECT_TO_ORDER_PAGE,
    REDIRECT_TO_PREVIEW,
    REDIRECT_TO_HOME,
    LOGOUT_USER,
} from '../actions/types';

const initialState = {
    
    displayExportPDFPage: false,
    displayOrderPage: false,
    displayPreviewPage: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case REDIRECT_TO_EXPORT_PDF:
            return {
                ...state,
                displayExportPDFPage: true,
                displayOrderPage: false,
                displayPreviewPage: false,
            }
        case REDIRECT_TO_ORDER_PAGE:
            return {
                ...state,
                displayExportPDFPage: false,
                displayOrderPage: true,
                displayPreviewPage: false,
            }
        case REDIRECT_TO_PREVIEW:
            return {
                ...state,
                displayExportPDFPage: false,
                displayOrderPage: false,
                displayPreviewPage: true,
            }
        case REDIRECT_TO_HOME:
            return {
                ...state,
                displayExportPDFPage: false,
                displayOrderPage: false,
                displayPreviewPage: false,
            }
        case LOGOUT_USER:
            return {
                ...state,
                displayExportPDFPage: false,
                displayOrderPage: false,
                displayPreviewPage: false,
            }
        default:
            return state;
    } 
}