import { ADD_IMAGE } from '../actions/types';

const initialState = {
  images: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        images: action.payload
      }
    default:
      return state;
  }
}