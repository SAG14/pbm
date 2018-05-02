import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addImage } from '../actions/uploadActions';
import UploadImage from './UploadImage';
import store from '../store';

import '../styles/Manager.css';
import '../styles/ImageManager.css';

class ImageManager extends Component {
  render() {
    /*
    const sheldonImages = Object.keys(this.props.images).map(key => {
      let image = this.props.images[key];
        return (
          <div key={image.lastModified}>
            {image.name}
          </div>
      );
    });
    */
    const viewImages = Object.keys(this.props.images).map((key) => {
      let image = this.props.images[key];
      return (
        <div key = {key + image.file.lastModified}>
          <img src= {image.imageURL} width= "100pt"/>
        </div>
      );
    });
    return (
      <div id="image-manager" className="manager-container">
        <div className="manager-top">
          <h1 className="title">ImageManager</h1>
          {viewImages}
        </div>
        <UploadImage />
      </div>
    )
  }
}

ImageManager.propTypes = {
  images: PropTypes.array,
  addImage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  images: state.uploads.images
});

export default connect(mapStateToProps, { addImage })(ImageManager);
