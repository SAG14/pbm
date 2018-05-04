import { FETCH_PRODUCTS, SELECT_PRODUCT } from '../actions/types';

const initialState = {
  product: {},
  products: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    case SELECT_PRODUCT:
      return {
        ...state,
        product: action.payload,
      }
    default:
      return state;
  }
}