import { TOGGLE_PREVIEW } from './types';

export const togglePreview = (toggleData) => (dispatch) => {
    dispatch({
        type: TOGGLE_PREVIEW,
        payload: toggleData
    });
}