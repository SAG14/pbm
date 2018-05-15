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
import SaveToPDF from './components/SaveToPDF';
import { fetchProducts } from './actions/productActions';
import Preview from './components/Preview';
import PreviewSidebar from './components/PreviewSidebar';
import TemplateManager from './components/TemplateManager';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchProducts();
  }

  render() {
    // Redirects to login page if not authenticated
    if (this.props.isAuthenticated) {
      return (
        <div>
          <div className="App">
            <ProductSelector />
            <div>
              {this.props.isPreview && <PreviewSidebar />}
              {!this.props.isPreview && <Sidebar />}
            </div>
            <div className="main">
              {this.props.isPreview && <Preview />}
              <Product />
              <TemplateManager />
              <Filmstrip />
            </div>
          </div>
          {
            (this.props.displayExportPDFPage) ? (
              <div>
                <SaveToPDF />
              </div>
            ) : (null)
          }
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
  isPreview: PropTypes.bool,
  displayExportPDFPage: PropTypes.bool,
  displayOrderPage: PropTypes.bool,
  displayPreviewPage: PropTypes.bool,
  fetchProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isPreview: state.preview.isPreview,
  displayExportPDFPage: state.appNavigation.displayExportPDFPage,
  displayOrderPage: state.appNavigation.displayOrderPage,
  displayPreviewPage: state.appNavigation.displayPreviewPage,
});

App = DragDropContext(HTML5Backend)(App);
App = connect(mapStateToProps, { addImageToFrame, fetchProducts, })(App);

export default App;
