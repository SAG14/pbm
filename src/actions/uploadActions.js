import { ADD_IMAGE } from './types';

export const addImage = (imageData) => (dispatch) => {
  dispatch({
    type: ADD_IMAGE,
    payload: imageData
  });
}
