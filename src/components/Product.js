import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../actions/productActions';
import {
  applyTemplate,
  addImageToFrame,
  addTextToPage,
} from '../actions/pageActions';
import PageImage from './PageImage';

import '../styles/Product.css';

const CALL_BACK_ENUMS = {
  ADD_TEXT_TO_PAGE: 'ADD_TEXT_TO_PAGE',
};

class Product extends Component {
  constructor(props) {
    super(props);
    this.addImageToPage = this.addImageToPage.bind(this);
  };

  componentWillMount() {
    this.props.selectProduct();
    this.props.applyTemplate(0);
    this.props.applyTemplate(2);
    this.props.applyTemplate(4);
    this.props.applyTemplate(6);
    this.props.applyTemplate(8);
    this.props.applyTemplate(10);
    this.props.applyTemplate(12);
    this.props.applyTemplate(14);
    this.props.applyTemplate(16);
    this.props.applyTemplate(18);
    this.props.applyTemplate(20);
    this.props.applyTemplate(22);
  }

  callbackHandler = (type, data) => {
    switch (type) {
      case CALL_BACK_ENUMS.ADD_TEXT_TO_PAGE:
        this.props.addTextToPage(data.id, data.value);
        break;
    }
  }

  addImageToPage(id, source) {
    this.props.addImageToFrame({ id: id, source: source });
  };

  renderSpread(i) {
    if (i == null)
      return;
    return (
      <Spread
        left={this.props.pages[i]}
        right={this.props.pages[i + 1]}
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

  renderPage(page, isRight) {
    return (
      <Page
        value={page}
        isRight={isRight}
        addImageToPage={this.props.addImageToPage}
        callbackHandler={this.callbackHandler}
      />
    )
  }

  render() {
    return (
      <div className="spread">
        {this.renderPage(this.props.left, false)}
        {this.renderPage(this.props.right, true)}
      </div>
    )
  }
}

class Page extends Component {
  callbackHandler = (type, data) => {
    switch (type) {
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
        addImageToPage={this.props.addImageToPage}
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
    const images = this.props.value.images.map((img, id) => {
      return (
        this.renderImage(id)
      );
    });

    const texts = this.props.value.texts.map((txt, id) => {
      return (
        this.renderText(id)
      );
    });

    const layout = {
      "gridTemplateRows":   `repeat(${this.props.value.rows-1}, 1fr 12px) 1fr`,
      "gridTemplateColumns": `repeat(${this.props.value.columns-1}, 1fr 12px) 1fr`,
      "gridTemplateAreas": this.props.value.area,
    };

    let className = 'bleed';
    if (this.props.isRight) {
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
    console.log(this.props.value.id);
    this.props.callbackHandler(
      CALL_BACK_ENUMS.ADD_TEXT_TO_PAGE,
      {
        id: this.props.value.id,
        value: e.target.value,
      },
    );
  }

  render() {
    const style = JSON.parse(this.props.value.style);

    return (
      <div className="textFrame" style={style}>
        <textarea value={this.props.value.value} onInput={(e) => this.inputChangeHandler(e)}></textarea>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.products.product,
  pages: state.pages.pages,
  current: state.pages.current,
});

export default connect(mapStateToProps, { selectProduct, applyTemplate, addImageToFrame, addTextToPage })(Product);