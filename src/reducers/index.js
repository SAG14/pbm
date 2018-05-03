import { combineReducers } from 'redux';
import uploadReducer from './uploadReducer';
import productReducer from './productReducer';
import templateReducer from './templateReducer';
import pageReducer from './pageReducer';

export default combineReducers({
  uploads: uploadReducer,
  products: productReducer,
  templates: templateReducer,
  pages: pageReducer,
});