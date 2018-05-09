import {
    APPLY_TEMPLATE,
    JUMP_TO_PAGE,
    ADD_IMAGE_TO_FRAME,
    ADD_TEXT_TO_PAGE,
} from './types';

export const applyTemplate = (index) => dispatch => {
    const template = {
        id: "tp1",
        pages: [
            {
                rows: 4,
                columns: 5,
                area: '"i0 i0 i0 i0 i0 .  .  .  . "'
                    + '"i0 i0 i0 i0 i0 .  .  .  . "'
                    + '"i0 i0 i0 i0 i0 .  .  .  . "'
                    + '"i0 i0 i0 i0 i0 .  .  .  . "'
                    + '"i0 i0 i0 i0 i0 .  t0 .  . "'
                    + '"i0 i0 i0 i0 i0 .  t0 .  . "'
                    + '"i0 i0 i0 i0 i0 .  t0 .  . "',
                images: [
                    {
                        id: "i0",
                        source: null,
                        style: '{"margin":"36px 0 36px 36px", "gridArea":"i0"}',
                    },
                ],
                texts: [
                    {
                        id: "t0",
                        value: '',
                        style: '{"margin":"0 0 36px 0", "gridArea":"t0"}',
                    },
                ],
            },
            {
                rows: 4,
                columns: 5,
                area: '".  .  i1 i1 i1 i1 i1 i1 i1"'
                    + '".  .  i1 i1 i1 i1 i1 i1 i1"'
                    + '".  .  i1 i1 i1 i1 i1 i1 i1"'
                    + '".  .  i1 i1 i1 i1 i1 i1 i1"'
                    + '".  .  i1 i1 i1 i1 i1 i1 i1"'
                    + '".  .  .  .  .  .  .  .  . "'
                    + '".  .  .  .  .  .  t1 t1 t1"',
                images: [
                    {
                        id: "i1",
                        source: null,
                        style: '{"margin":"36px 36px 0 0", "gridArea":"i1"}',
                    },
                ],
                texts: [
                    {
                        id: "t1",
                        value: '',
                        style: '{"margin":"0 36px 36px 0", "gridArea":"t1"}',
                    },
                ],
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