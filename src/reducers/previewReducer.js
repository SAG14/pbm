import { TOGGLE_PREVIEW } from '../actions/types';

const initialState = {
    isPreview: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_PREVIEW:
        let newPreview = !state.isPreview;
        return {
            ...state,
            isPreview: newPreview
        }
        default:
            return state;
    }
}