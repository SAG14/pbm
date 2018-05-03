import { combineReducers } from 'redux';
import uploadReducer from './uploadReducer';
import userReducer from './userReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  uploads: uploadReducer,
  routing: routerReducer,
  user: userReducer,
});