import { FETCH_PRODUCTS, SELECT_PRODUCT } from './types';

export const fetchProducts = () => dispatch => {
  const products = [];
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products,
  })
}

export const selectProduct = () => dispatch => {
  const product = {
    name: "Photo Book 8.5 by 5.5 inches (24 pages)",
    price: 6.00,
    priceUnit: "CAD",
    pageNumber: 12,
  }
  dispatch({
    type: SELECT_PRODUCT,
    payload: product,
  })
}