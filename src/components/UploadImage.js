import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addImage } from '../actions/uploadActions';

import '../styles/Manager.css';
import '../styles/UploadImage.css';

class UploadImage extends Component {
  
  fileChangedHandler = (e) => {
    e.preventDefault();
    let files = e.target.files;
    let filesAsURL = Array.from(files);
    let pending = files.length;
    for (let i = 0; i < files.length; i++){
      let reader = new FileReader();
      let currentFile = files[i];
      reader.readAsDataURL(currentFile);
      reader.onloadend = () => {
        filesAsURL[i] = {
          file: currentFile,
          imageURL: reader.result
        };
        if (pending == 0) {
          this.props.addImage(filesAsURL);
        }
      }
    }
      
    
  }

  render() {
    return (
      <div id="upload-image" className="manager-bottom">
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
