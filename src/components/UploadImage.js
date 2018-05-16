import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addImage } from '../actions/uploadActions';
import RaisedButton from 'material-ui/RaisedButton';

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
        --pending;
        if (pending === 0) {
          this.props.addImage(filesAsURL);
        }
      }
    }
      
    
  }

  render() {
    const styles = {
      button: {
        margin: 12,
      },
      exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '60%',
        opacity: 0,
      },
      uploadImage: {
        width: '125px',
      }
    };

    return (
      <div id="upload-image" style={styles.uploadImage}>
        <RaisedButton type="submit" primary={true} label="Add Photos" labelPosition="before" containerElement='label' > 
          <input 
            style={styles.exampleImageInput}
            type="file"
            accept="image/jpeg"
            alt="Upload"
            onChange={this.fileChangedHandler} 
            multiple/>
        </RaisedButton>
      </div>
    )
  }
}

UploadImage.propTypes = {
  addImage: PropTypes.func.isRequired 
}

export default connect(null, { addImage })(UploadImage);
