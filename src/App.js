import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import ImageManager from './components/ImageManager';
import Filmstrip from './components/Filmstrip';
import UploadImage from './components/UploadImage';
import Product from './components/Product';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { addImageToFrame } from './actions/pageActions';
import SaveToPDF from './components/SaveToPDF';

class App extends Component {

  render() {
    // Redirects to login page if not authenticated
    if (this.props.isAuthenticated) {
      return (
        <div>
          <div className="App">
            <ImageManager/>
            <Filmstrip/>
            <Product/>
          </div>
          {
              (this.props.displayExportPDFPage) ? (
                  <div>
                    <SaveToPDF/>
                  </div>
              ) : (null)
          }          
        </div>
      );
    } else {
      return (
        <div>
          <Redirect to="/"/>
        </div>
      );
    }
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  displayExportPDFPage: PropTypes.bool,
  displayOrderPage: PropTypes.bool,
  displayPreviewPage: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  displayExportPDFPage: state.appNavigation.displayExportPDFPage,
  displayOrderPage: state.appNavigation.displayOrderPage,
  displayPreviewPage: state.appNavigation.displayPreviewPage,
});

App = DragDropContext(HTML5Backend)(App);
App = connect(mapStateToProps, {addImageToFrame})(App);

export default App;
