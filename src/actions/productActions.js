import { FETCH_PRODUCTS, SELECT_PRODUCT } from './types';

export const fetchProducts = () => dispatch => {
  const products = [
    {
      type: "Photo Book",
      size: "8.5 by 5.5 inches",
      price: 6.00,
      priceUnit: "CAD",
      pageNumber: 16,
    },
    {
      type: "Photo Book",
      size: "8.5 by 5.5 inches",
      price: 8.00,
      priceUnit: "CAD",
      pageNumber: 24,
    },
    {
      type: "Photo Book",
      size: "8.5 by 5.5 inches",
      price: 10.00,
      priceUnit: "CAD",
      pageNumber: 32,
    }
  ];
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
    pageNumber: 24,
  }
  dispatch({
    type: SELECT_PRODUCT,
    payload: product,
  })
}