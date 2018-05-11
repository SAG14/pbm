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
import Preview from './components/Preview';
import PreviewSidebar from './components/PreviewSidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTemplates();
    this.props.fetchProducts();
  }
  render() {
    // Redirects to login page if not authenticated
    if (this.props.isAuthenticated) {
      return (
        <div className="App">
          
          <ProductSelector />
          <div>
            {this.props.isPreview && <PreviewSidebar/>}
            <Sidebar />
          </div>
          <div className="main">
          {this.props.isPreview && <Preview/>}
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
  fetchProducts: PropTypes.func.isRequired,
  isPreview: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isPreview: state.preview.isPreview,
});

App = DragDropContext(HTML5Backend)(App);
App = connect(mapStateToProps, { addImageToFrame, fetchTemplates, fetchProducts, })(App);

export default App;
