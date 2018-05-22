import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import { updateImagePosition } from '../actions/pageActions';
import '../styles/PageImage.css';

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
  constructor(props) {
    super(props);
    this.state = {
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      imageAspect: 0,
      elementAspect: 0,
      imageWidth: 0,
      imageHeight: 0,
      elementWidth: 0,
      elementHeight: 0,
      moveVertical: false,
      prevMouseOffset: 0,
    }
    
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  onMouseDown(e) {
    if(!this.props.value.source) return;

    let i = new Image();
    i.src = this.props.value.source;

    let imageWidth = i.width;
    let imageHeight = i.height;
    let elementWidth = e.target.clientWidth;
    let elementHeight = e.target.clientHeight;
    let imageAspect = i.width / i.height;
    let elementAspect = e.target.clientWidth / e.target.clientHeight;
    let multiplier = 1;
    let moveVertical = false;
    let imageBoundaryX = this.state.imageWidth - this.state.elementWidth;
    let imageBoundaryY = this.state.imageHeight - this.state.elementHeight;

    if (imageAspect < elementAspect) {  // calculate multiplier to get real image dimensions
      multiplier = imageWidth / elementWidth;
    } else {
      multiplier = imageHeight / elementHeight;
    }

    imageWidth /= multiplier;
    imageHeight /= multiplier;

    if (elementAspect > imageAspect) {
      moveVertical = true;
      this.setState({ offsetX: 0 });
    } else {
      this.setState({ offsetY: 0 });
    }

    this.setState({
      startX: e.pageX,
      startY: e.pageY,
      imageAspect: imageAspect,
      elementAspect: elementAspect,
      imageWidth: imageWidth,
      imageHeight: imageHeight,
      elementWidth: elementWidth,
      elementHeight: elementHeight,
      moveVertical: moveVertical,
      imageBoundaryX: imageBoundaryX,
      imageBoundaryY: imageBoundaryY
    });

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
    e.preventDefault();
  }

  onMouseMove(e) {
    let offsetX = this.state.offsetX;
    let offsetY = this.state.offsetY;
    let prevMouseOffset;

    if (this.state.moveVertical) {  // moving vertically
      offsetY = this.state.offsetY + ((this.state.prevMouseOffset - (e.pageY - this.state.startY)) * -1);

      if (offsetY === this.state.offsetY) return;  // no movement, skip to reduce setState calls

      if (offsetY >= this.state.offsetY) {  // moving down
        if (offsetY > 0) {  // image at top, set everything to 0
          offsetY = 0;
        }
      } else {
        if (offsetY < this.state.imageBoundaryY * -1) { // image reached bottom, set everything to boundary
          offsetY = Math.floor(this.state.imageBoundaryY) * -1;
        }
      }

      prevMouseOffset = e.pageY - this.state.startY;
      this.setState({ offsetY: offsetY, prevMouseOffset: prevMouseOffset });
    } 
    
    if (!this.state.moveVertical) { // moving horizontally
      offsetX = this.state.offsetX + ((this.state.prevMouseOffset - (e.pageX - this.state.startX)) * -1);

      if (offsetX === this.state.offsetX) return;  // no movement, skip to reduce setState calls

      if (offsetX >= this.state.offsetX) {  // moving right
        if (offsetX > 0) {  // image at left, set everything to 0
          offsetX = 0;
        }
      } else {
        if (offsetX < this.state.imageBoundaryX * -1) { // image reached right, set everything to boundary
          offsetX = Math.floor(this.state.imageBoundaryX) * -1;
        }
      }

      prevMouseOffset = e.pageX - this.state.startX;
      this.setState({ offsetX: offsetX, prevMouseOffset: prevMouseOffset });
    }

    this.props.updateImagePosition(this.props.value.id, offsetX, offsetY, this.props.index);

    e.preventDefault();
  }

  onMouseUp(e) {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    this.setState({prevMouseOffset: 0});
    e.preventDefault();
  }

  render() {
    const { connectDropTarget } = this.props;
    const style = JSON.parse(this.props.value.style);
    
    let imageStyle = {
      backgroundImage: "url(" + this.props.value.source + ")",
      backgroundPositionX: this.props.value.offset.offsetX + "px",
      backgroundPositionY: this.props.value.offset.offsetY + "px",
    }

    let imageClass = 'imageFrame';
    if (this.props.isPreview)
      imageClass = 'imageFramePreview';
    return connectDropTarget(
      <div className={imageClass} style={style}>
        <div className="imageContainer" style={imageStyle} onMouseDown={this.onMouseDown}>
        </div>
      </div>
    )
  }
}

PageImage.propTypes = {
  updateImagePosition: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages.pages,
    isPreview: state.preview.isPreview,
    updateImagePosition: state.pages.updateImagePosition,
    current: state.pages.current
  };
}

PageImage = connect(mapStateToProps, {updateImagePosition})(PageImage);
PageImage = DropTarget(Types.IMAGE, imageTarget, collect)(PageImage);

export default PageImage;
export { VIEW_CALL_BACK_ENUMS as CALL_BACK_ENUMS };