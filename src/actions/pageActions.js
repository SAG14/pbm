import { APPLY_TEMPLATE, JUMP_TO_PAGE } from './types';

// import fireworks from '../images/fireworks.jpg';
// import humananddog from '../images/humananddog.jpg';

export const applyTemplate = () => dispatch => {
    const template = {
        rows: 4,
        columns: 12,
        areas: '"i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 t0 t0 i1 i1 i1 i1"',
        images: [
            {
                id: "i0",
                // source: fireworks,
                source: null,
            },
            {
                id: "i1",
                // source: humananddog,
                source: null,
            },
        ],
        texts: [
            {
                id: "t0",
                value: '',
            }
        ],
    }
    const index = 0;

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