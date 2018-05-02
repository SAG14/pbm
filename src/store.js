import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// waylon's dummy images
import fireworks from './images/fireworks.jpg';
import humananddog from './images/humananddog.jpg';

const initialState = {
  // seeding data
  pages: [
    {
      id: "p0",
      width: 8.5,
      height: 5.5,
      unit: "inches",
      rows: 4,
      columns: 12,
      areas: '"i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 t0 t0 i1 i1 i1 i1"',
      images: [
        {
          id: "i0",
          source: fireworks,
          // source: null,
        },
        {
          id: "i1",
          source: humananddog,
          // source: null,
        },
      ],
      texts: [
        {
          id: "t0",
          value: "Hello world",
        }
      ],
    },
  ],
  currentPage: 0,
  product: {
    name: "Photo Book 8.5 by 5.5 inches (24 pages)",
    price: 10.00,
    priceUnit: "CAD",
    pageNumber: 24,
  }
};

const middleWare = [thunk];

const store = createStore(
  rootReducer, 
  initialState, 
  applyMiddleware(...middleWare)
);

export default store;
