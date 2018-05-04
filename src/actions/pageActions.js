import { APPLY_TEMPLATE, JUMP_TO_PAGE, ADD_IMAGE_TO_FRAME } from './types';

import fireworks from '../images/fireworks.jpg';
import humananddog from '../images/humananddog.jpg';

export const applyTemplate = (index) => dispatch => {
    const template = {
        rows: 4,
        columns: 12,
        areas: '"i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 t0 t0 i1 i1 i1 i1"',
        images: [
            {
                id: "i0",
                source: fireworks,
                // source: null,
            },
            {
                id: "i1",
                source: humananddog,
                // source: null,
            },
        ],
        texts: [
            {
                id: "t0",
                value: '',
            }
        ],
    }

    dispatch({
        type: APPLY_TEMPLATE,
        payload: template,
        index: index,
    });
}

export const jumpToPage = (index) => dispatch => {
    dispatch({
        type: JUMP_TO_PAGE,
        payload: index,
    });
}

export const addImageToFrame = (data) => dispatch => {
    dispatch({
        type: ADD_IMAGE_TO_FRAME,
        payload: data
    });
}