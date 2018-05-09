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
import { fetchTemplates } from './actions/templateActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTemplates();
  }
  render() {
    // Redirects to login page if not authenticated
    if (this.props.isAuthenticated) {
      return (
        <div className="App">
          <div>
            <Sidebar />
          </div>
          <div className="main">
            <Product/>
            <Filmstrip/>
          </div>
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
App = connect(mapStateToProps, {addImageToFrame, fetchTemplates,})(App);

export default App;
