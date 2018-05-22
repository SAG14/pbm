import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import uploadReducer from './uploadReducer';
import productReducer from './productReducer';
import templateReducer from './templateReducer';
import pageReducer from './pageReducer';
import userReducer from './userReducer';
import previewReducer from './previewReducer';
import appNavigationReducer from './appNavigiationReducer';
import termsOfServiceReducer from './termsOfServiceReducer';

const appReducer = combineReducers({
  uploads: uploadReducer,
  products: productReducer,
  templates: templateReducer,
  pages: pageReducer,
  routing: routerReducer,
  user: userReducer,
  preview: previewReducer,
  appNavigation: appNavigationReducer,
  termsOfService: termsOfServiceReducer,
});

const rootReducer = (state, action) => {
  // Clears the store when user logs out
  if (action.type === 'LOGOUT_USER') {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;