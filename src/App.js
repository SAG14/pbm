import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import ImageManager from './components/ImageManager';
import Filmstrip from './components/Filmstrip';
import UploadImage from './components/UploadImage';

class App extends Component {
  render() {

    // Redirects to login page if not authenticated
    if (this.props.isAuthenticated) {
      return (
        <div className="App">
          <ImageManager/>
          <Filmstrip/>
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

export default connect(mapStateToProps)(App);
