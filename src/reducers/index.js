import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import uploadReducer from './uploadReducer';
import productReducer from './productReducer';
import templateReducer from './templateReducer';
import pageReducer from './pageReducer';
import userReducer from './userReducer';
import previewReducer from './previewReducer';

export default combineReducers({
  uploads: uploadReducer,
  products: productReducer,
  templates: templateReducer,
  pages: pageReducer,
  uploads: uploadReducer,
  routing: routerReducer,
  user: userReducer,
  preview: previewReducer,
});