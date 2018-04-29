import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/ImageManager.css';
import { addImage } from '../actions/uploadActions';

class ImageManager extends Component {
  render() {
    return (
      <div id="image-manager">
        <h1 className="title">ImageManager</h1>
        {
          Object.keys(this.props.images).map(key => {
            let image = this.props.images[key];

            return (
              <div key={image["lastModified"]}>
                {image["name"]}
              </div>
            )
          })
        }
      </div>
    )
  }
}

ImageManager.propTypes = {
  images: PropTypes.object,
  addImage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  images: state.uploads.images
});

export default connect(mapStateToProps, { addImage })(ImageManager);
