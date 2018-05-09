import { 
    APPLY_TEMPLATE,
    JUMP_TO_PAGE,
    ADD_IMAGE_TO_FRAME,
    ADD_TEXT_TO_PAGE,
} from './types';

// import fireworks from '../images/fireworks.jpg';
// import humananddog from '../images/humananddog.jpg';

export const applyTemplate = (index) => dispatch => {
    const template = {
        rows: 4,
        columns: 10,
        areas: '"i0 i0 i0 .  .  .  i1 i1 i1 i1"'
             + '"i0 i0 i0 .  .  .  i1 i1 i1 i1"'
             + '"i0 i0 i0 t0 .  .  i1 i1 i1 i1"'
             + '"i0 i0 i0 t0 .  .  .  .  t1 t1"',
        images: [
            {
                id: "i0",
                source: null,
            },
            {
                id: "i1",
                source: null,
            },
        ],
        texts: [
            {
                id: "t0",
                value: '',
            },
            {
                id: "t1",
                value: '',
            },
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
        payload: data,
    });
}

export const addTextToPage = (id, value) => dispatch => {
    dispatch({
        type: ADD_TEXT_TO_PAGE,
        id: id,
        payload: value,
    });
}