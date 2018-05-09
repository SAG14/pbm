import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
// import fireworks from '../images/fireworks.jpg';
// import humananddog from '../images/humananddog.jpg';
// import { addImageToFrame } from '../actions/pageActions';

const Types = {
  IMAGE: 'IMAGE'
};

const VIEW_CALL_BACK_ENUMS = {
  ADD_IMAGE_TO_FRAME: 'ADD_IMAGE_TO_FRAME',
};

const imageTarget = {
  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return;
    }
    let imageURL = monitor.getItem().imageURL;
    let idPattern = /\d+/g;
    let parsedId = parseInt((props.value.id).match(idPattern));
    // props.addImageToPage(parsedId, imageURL);
    // props.addImageToPage(props.value.id, imageURL);
    props.callbackHandler(
      VIEW_CALL_BACK_ENUMS.ADD_IMAGE_TO_FRAME,
      {
        id: props.value.id,
        value: imageURL,
      },
    );
    return;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

class PageImage extends Component {
  render() {
    const { connectDropTarget, isOver, canDrop } = this.props;
    const style = JSON.parse(this.props.value.style);
    const image = this.props.value.source === null ? null : <img src={this.props.value.source} alt="img" />;

    return connectDropTarget(
      <div className="imageFrame" style={style}>
        {image}
      </div>
    )
  }
}

PageImage.propTypes = {
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages.pages
  };
}

PageImage = connect(mapStateToProps, {})(PageImage);
PageImage = DropTarget(Types.IMAGE, imageTarget, collect)(PageImage);

export default PageImage;
export { VIEW_CALL_BACK_ENUMS as CALL_BACK_ENUMS };