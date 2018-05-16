import {
    APPLY_TEMPLATE,
    JUMP_TO_PAGE,
    ADD_IMAGE_TO_FRAME,
    ADD_TEXT_TO_FRAME,
    NEXT_PAGE,
    PREVIOUS_PAGE,
    SET_HAS_APPLIED_COVERS,
} from './types';
import store from '../store';

export const applyTemplate = (pageIndex, templateIndex) => dispatch => {
    let templates = store.getState().templates.templates;
    dispatch({
        type: APPLY_TEMPLATE,
        payload: templates[templateIndex],
        index: pageIndex,
    });
}

export const setHasAppliedCovers = () => dispatch => {
    dispatch({
        type: SET_HAS_APPLIED_COVERS,
    });
}

export const jumpToPage = (index) => dispatch => {
    dispatch({
        type: JUMP_TO_PAGE,
        payload: index,
    });
}

export const previousPage = () => dispatch => {
    dispatch({
        type: PREVIOUS_PAGE,
        payload: null,
    });
}

export const nextPage = () => dispatch => {
    dispatch({
        type: NEXT_PAGE,
        payload: null,
    });
}

export const addImageToFrame = (id, source, index) => dispatch => {
    dispatch({
        type: ADD_IMAGE_TO_FRAME,
        id: id,
        payload: source,
        index: index,
    });
}

export const addTextToFrame = (id, value, index) => dispatch => {
    dispatch({
        type: ADD_TEXT_TO_FRAME,
        id: id,
        payload: value,
        index: index,
    });
}