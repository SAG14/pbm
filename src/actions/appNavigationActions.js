import {
    REDIRECT_TO_EXPORT_PDF,
    REDIRECT_TO_ORDER_PAGE,
    REDIRECT_TO_PREVIEW,
    REDIRECT_TO_HOME,
} from './types';

export const toExportPDFPage = () => dispatch => {
    dispatch({
        type: REDIRECT_TO_EXPORT_PDF,
    })
}

export const toOrderPage = () => dispatch => {
    dispatch({
        type: REDIRECT_TO_ORDER_PAGE,
    })
}

export const toPreviewPage = () => dispatch => {
    dispatch({
        type: REDIRECT_TO_PREVIEW,
    })
}

export const toHomePage = () => dispatch => {
    dispatch({
        type: REDIRECT_TO_HOME,
    })
}