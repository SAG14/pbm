import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addImage } from '../actions/uploadActions';

import '../styles/UploadImage.css';

class UploadImage extends Component {
  fileChangedHandler = (e) => {
    this.props.addImage(e.target.files);
  }

  render() {
    return (
      <div id="upload-image">
        <input 
          type="file"
          accept="image/jpeg"
          alt="Upload"
          onChange={this.fileChangedHandler} 
          multiple/>
      </div>
    )
  }
}

UploadImage.propTypes = {
  addImage: PropTypes.func.isRequired 
}

export default connect(null, { addImage })(UploadImage);
