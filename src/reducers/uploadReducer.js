import { ADD_IMAGE } from '../actions/types';

const initialState = {
  images: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_IMAGE:
      let newStateImages = [...state.images, ...action.payload];
      return {
        ...state,
        //images: [...state.images, action.payload]
        images: newStateImages
      }
    default:
      return state;
  }
}