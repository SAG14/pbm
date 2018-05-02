import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import ImageManager from './components/ImageManager';
import Filmstrip from './components/Filmstrip';
import UploadImage from './components/UploadImage';
import Product from './components/Product';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ImageManager />
          <Filmstrip />
          <Product />
        </div>
      </Provider>
    );
  }
}

export default App;
