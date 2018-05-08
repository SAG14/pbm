import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Sidebar from './components/Sidebar';
import Filmstrip from './components/Filmstrip';
import UploadImage from './components/UploadImage';
import Product from './components/Product';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { addImageToFrame } from './actions/pageActions';

class App extends Component {

  render() {
    // Redirects to login page if not authenticated
    if (this.props.isAuthenticated) {
      return (
        <div className="App">
          <Sidebar />
          <Filmstrip/>
          <Product/>
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
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

App = DragDropContext(HTML5Backend)(App);
App = connect(mapStateToProps, {addImageToFrame})(App);

export default App;
