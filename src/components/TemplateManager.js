import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addImage } from '../actions/uploadActions';
import UploadImage from './UploadImage';
import store from '../store';
import ImageManager from './ImageManager';
import '../styles/Manager.css';
import '../styles/ImageManager.css';
import PreviewImage from './PreviewImage'

class TemplateManager extends Component {
  
  render() {
    const processImages = this.props.images.map((image, key) => {
      return (
        <div key = {key + image.file.lastModified}>
          <PreviewImage imageURL = {image.imageURL}/>
        </div>
      );
    });
    return (
      <div id="image-manager" className="manager-container">
        <div className="manager-top">
          <h1 className="title">Templates</h1>

        </div>
      </div>
    );
  }
}

ImageManager.propTypes = {
  images: PropTypes.array,
}

const mapStateToProps = state => ({
  images: state.uploads.images
});
export default connect(mapStateToProps, null)(TemplateManager);