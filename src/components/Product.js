import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../actions/productActions';
import {
  applyTemplate,
  addImageToFrame,
  addTextToFrame,
} from '../actions/pageActions';
import PageImage, { CALL_BACK_ENUMS } from './PageImage';

import '../styles/Product.css';

const VIEW_CALL_BACK_ENUMS = {
  ...CALL_BACK_ENUMS,
  ADD_TEXT_TO_FRAME: 'ADD_TEXT_TO_FRAME',
};

class Product extends Component {
  constructor(props) {
    super(props);
    // this.addImageToPage = this.addImageToPage.bind(this);
  };

  // component() {
  //   // this.props.selectProduct();
  //   console.log("hi");
  //   for (let i = 0; i < this.props.pages.length; i += 2) {
  //     this.props.applyTemplate(i, this.props.templates[i / 2 % 5]);
  //     this.props.applyTemplate(i + 1, this.props.templates[i / 2 % 5]);
  //   }
  // }

  callbackHandler = (type, data) => {
    switch (type) {
      case VIEW_CALL_BACK_ENUMS.ADD_TEXT_TO_FRAME:
        this.props.addTextToFrame(data.id, data.value, data.index);
        break;
      case VIEW_CALL_BACK_ENUMS.ADD_IMAGE_TO_FRAME:
        this.props.addImageToFrame(data.id, data.value, data.index);
        break;
    }
  }

  // addImageToPage(id, source) {
  //   this.props.addImageToFrame({ id: id, source: source, });
  // };

  renderSpread(i) {
    if (i == null)
      return;
    return (
      <Spread
        pages={this.props.pages}
        index={i}
        addImageToPage={this.addImageToPage}
        callbackHandler={this.callbackHandler}
      />
    )
  }

  render() {
    return (
      <div className="product-view-design">
        <div id="product-detail">
          product information
        </div>
        <div className="product-view-design-container-wrapper">
          <div className="product-view-design-container">
            {this.renderSpread(this.props.current)}
          </div>
        </div>
      </div>
    )
  }
}

class Spread extends Component {
  callbackHandler = (type, data) => {
    switch (type) {
      default:
        // bubble up all other actions to parents
        this.props.callbackHandler(type, data);
    }
  }

  renderPage(i) {
    return (
      <Page
        index={i}
        value={this.props.pages[i]}
        addImageToPage={this.props.addImageToPage}
        callbackHandler={this.callbackHandler}
      />
    )
  }

  render() {
    return (
      <div className="spread">
        {this.renderPage(this.props.index)}
        {this.renderPage(this.props.index + 1)}
      </div>
    )
  }
}

class Page extends Component {
  callbackHandler = (type, data) => {
    switch (type) {
      case VIEW_CALL_BACK_ENUMS.ADD_TEXT_TO_FRAME:
        this.props.callbackHandler(type, { ...data, index: this.props.index, });
        break;
      case VIEW_CALL_BACK_ENUMS.ADD_IMAGE_TO_FRAME:
        this.props.callbackHandler(type, { ...data, index: this.props.index, });
      default:
        // bubble up all other actions to parents
        this.props.callbackHandler(type, data);
    }
  }

  renderImage(i) {
    return (
      <PageImage
        key={this.props.value.images[i].id}
        value={this.props.value.images[i]}
        callbackHandler={this.callbackHandler}
      />
    )
  }

  renderText(i) {
    return (
      <Text
        key={this.props.value.texts[i].id}
        value={this.props.value.texts[i]}
        callbackHandler={this.callbackHandler}
      />
    )
  }

  render() {
    const images = this.props.value.images.map((img, i) => {
      return (
        this.renderImage(i)
      );
    });

    const texts = this.props.value.texts.map((txt, i) => {
      return (
        this.renderText(i)
      );
    });

    const layout = {
      "gridTemplateRows": `repeat(${this.props.value.rows - 1}, 1fr 12px) 1fr`,
      "gridTemplateColumns": `repeat(${this.props.value.columns - 1}, 1fr 12px) 1fr`,
      "gridTemplateAreas": this.props.value.area,
    };

    let className = 'bleed';
    if (this.props.index % 2) {
      className += ' bleed-right';
    }

    return (
      <div className={className}>
        <div className="page" style={layout}>
          {images}
          {texts}
        </div>
      </div>
    )
  }
}

class Text extends Component {
  inputChangeHandler = (e) => {
    console.log(e.target.value);
    this.props.callbackHandler(
      VIEW_CALL_BACK_ENUMS.ADD_TEXT_TO_FRAME,
      {
        id: this.props.value.id,
        value: e.target.value,
      },
    );
  }

  render() {
    const style = JSON.parse(this.props.value.style);

    return (
      <div className="textFrame" 
        style={style} 
        onInput={(e) => this.inputChangeHandler(e)}
        contentEditable="true">
      {this.props.value.value}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.products.product,
  pages: state.pages.pages,
  current: state.pages.current,
  templates: state.templates.templates,
});

export default connect(mapStateToProps, { selectProduct, applyTemplate, addImageToFrame, addTextToFrame })(Product);