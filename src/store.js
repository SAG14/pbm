import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory();

const initialState = {};

const middleWare = [thunk, routerMiddleware(history)];

const store = createStore(
  rootReducer, 
  initialState, 
  composeWithDevTools(
    applyMiddleware(...middleWare),
  )
);

export default store;
