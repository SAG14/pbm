import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
// import fireworks from '../images/fireworks.jpg';
// import humananddog from '../images/humananddog.jpg';
// import { addImageToFrame } from '../actions/pageActions';
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
  constructor(props) {
    super(props);
    this.state = {
      startX: 0,
      startY: 0,
      imageWidth: 0,
      imageHeight: 0,
      elementWidth: 0,
      elementHeight: 0,
      verticalImage: null,
      verticalElement: null,
      offsetX: 0,
      offsetY: 0
    }
    
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }
  onMouseDown(e) {
    console.log(e);
    console.log(e.pageX, e.pageY);

    let i = new Image();
    i.src = this.props.value.source;

    this.setState({
      startX: e.pageX,
      startY: e.pageY,
      imageWidth: i.width,
      imageHeight: i.height,
      elementWidth: e.target.clientWidth,
      elementHeight: e.target.clientHeight,
      verticalImage: i.width < i.height,
      verticalElement: e.target.clientWidth < e.target.clientHeight
    })
    console.log(i.width + " x " + i.height, "imagedimension");
    console.log(e.target.clientWidth + " x " + e.target.clientHeight, "elemntdimension");

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
    e.preventDefault();
  }

  onMouseMove(e) {
    console.log(e.pageX, e.pageY);

    let offsetX = e.pageX - this.state.startX;
    let offsetY = e.pageY - this.state.startY;

    this.setState({
      offsetX: e.pageX - this.state.startX,
      offsetY: e.pageY - this.state.startY
    });

    e.preventDefault();
  }

  onMouseUp(e) {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    e.preventDefault();
  }

  render() {
    const { connectDropTarget, isOver, canDrop } = this.props;
    const style = JSON.parse(this.props.value.style);
    
    let imageStyle = {
      backgroundImage: "url(" + this.props.value.source + ")",
      backgroundPositionY: this.state.offsetY + "px",
      backgroundPositionX: this.state.offsetX + "px"
    }

    return connectDropTarget(
      <div className="imageFrame" style={style}>
        <div className="imageContainer" style={imageStyle} onMouseDown={this.onMouseDown}>
          {/* {image} */}
        </div>
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