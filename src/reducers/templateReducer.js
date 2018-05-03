import { FETCH_TEMPLATES } from '../actions/types';

const initialState = {
  templates: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TEMPLATES:
      return {
        ...state,
        templates: action.payload,
      }
    default:
      return state;
  }
}