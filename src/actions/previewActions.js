import { TOGGLE_PREVIEW } from './types';

export const togglePreview = () => (dispatch) => {
    dispatch({
        type: TOGGLE_PREVIEW,
        payload: null
    });
}