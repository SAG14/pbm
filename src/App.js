import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Sidebar from './components/Sidebar';
import ProductSelector from './components/ProductSelector';
import Filmstrip from './components/Filmstrip';
import UploadImage from './components/UploadImage';
import Product from './components/Product';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { addImageToFrame } from './actions/pageActions';
import { fetchTemplates } from './actions/templateActions';
import { fetchProducts } from './actions/productActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTemplates();
    this.props.fetchProducts();
  }
  render() {
    // Redirects to login page if not authenticated
    if (1) {//this.props.isAuthenticated) {
      return (
        <div className="App">
          <ProductSelector />
          <div>
            <Sidebar />
          </div>
          <div className="main">
            <Product />
            <Filmstrip />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Redirect to="/" />
        </div>
      );
    }
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  fetchProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

App = DragDropContext(HTML5Backend)(App);
App = connect(mapStateToProps, { addImageToFrame, fetchTemplates, fetchProducts, })(App);

export default App;
