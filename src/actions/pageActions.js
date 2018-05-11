import {
    APPLY_TEMPLATE,
    APPLY_TEMPLATE_TO_FRONT,
    APPLY_TEMPLATE_TO_BACK,
    JUMP_TO_PAGE,
    ADD_IMAGE_TO_FRAME,
    ADD_TEXT_TO_FRAME,
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

export const applyTemplateToFront = (templateIndex) => dispatch => {
    let templates = store.getState().templates.templates;
    dispatch({
        type: APPLY_TEMPLATE_TO_FRONT,
        payload: templates[templateIndex],
    })
}

export const applyTemplateToBack = (templateIndex) => dispatch => {
    let templates = store.getState().templates.templates;
    dispatch({
        type: APPLY_TEMPLATE_TO_BACK,
        payload: templates[templateIndex],
    })
}

export const jumpToPage = (index) => dispatch => {
    dispatch({
        type: JUMP_TO_PAGE,
        payload: index,
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