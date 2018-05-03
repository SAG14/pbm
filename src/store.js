import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const initialState = {};

const middleWare = [thunk, routerMiddleware(history)];

const store = createStore(
  rootReducer, 
  initialState, 
  applyMiddleware(...middleWare)
);

export default store;
