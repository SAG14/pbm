import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addImage } from '../actions/uploadActions';
import UploadImage from './UploadImage';
import store from '../store';

import '../styles/Manager.css';
import '../styles/ImageManager.css';
import { DragSource } from 'react-dnd';
import { compose } from 'redux'
import { addImageToFrame } from '../actions/pageActions';

const Types = {
    IMAGE: 'IMAGE'
};

const imageSource = {
    beginDrag(props, monitor, component) {
        const item = { imageURL: props.imageURL };
        return item;
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
          return;
        }
        const item = monitor.getItem();
      }

};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class PreviewImage extends Component {
  
  render() {
    const { imageURL } = this.props;
    const { isDragging, connectDragSource } = this.props;
    const imageStyle = {
     width: '15em',
    };
    const imageDragStyle = {
        opacity: 0.5,
        width: '15em',
        border: 'thin black solid'
    };

    return connectDragSource(
                <div>
                <img src= {imageURL} style={isDragging ? imageDragStyle :imageStyle}/>
                </div>
            );
  }
}

PreviewImage.propTypes = {
    images: PropTypes.array,
};
  
const mapStateToProps = state => ({
    images: state.uploads.images
});

PreviewImage = DragSource(Types.IMAGE, imageSource, collect)(PreviewImage);
PreviewImage = connect(mapStateToProps, {addImageToFrame})(PreviewImage);

export default PreviewImage;