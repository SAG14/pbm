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
// import store from '../store';

const CALL_BACK_ENUMS = {
  ADD_TEXT_TO_PAGE: 'ADD_TEXT_TO_PAGE',
};

class Product extends Component {
  constructor(props){
    super(props);
    this.addImageToPage = this.addImageToPage.bind(this);
  };
  componentWillMount() {
    this.props.selectProduct();
    this.props.applyTemplate(0);
    this.props.applyTemplate(1);
    this.props.applyTemplate(2);
    this.props.applyTemplate(3);
    this.props.applyTemplate(4);
    this.props.applyTemplate(5);
    this.props.applyTemplate(6);
    this.props.applyTemplate(7);
    this.props.applyTemplate(8);
    this.props.applyTemplate(9);
    this.props.applyTemplate(10);
    this.props.applyTemplate(11);
  }

  callbackHandler = (type, data) => {
    switch(type) {
      case CALL_BACK_ENUMS.ADD_TEXT_TO_PAGE:
        this.props.addTextToPage(data.id, data.value);
        break;
    }
  }

  addImageToPage(id, source) {
    this.props.addImageToFrame({id: id, source: source});
  };

  renderPage(i) {
    if (i == null)
      return;
    return (
      <Page
        value={this.props.pages[i]}
        addImageToPage={this.addImageToPage}
        callbackHandler={this.callbackHandler}
      />
    )
  }

  render() {
    return (
      <div id="product-view-design">
        <div id="product-detail">
          product information
        </div>
        <div id="product-view-design-container-wrapper">
          <div id="product-view-design-container">
            {this.renderPage(this.props.current)}
          </div>
        </div>
      </div>
    )
  }
}

class Page extends Component {

  viewCallbackHandler = (type, data) => {
    switch(type) {
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
        callbackHandler={this.viewCallbackHandler}
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
      "gridTemplateRows": `repeat(${this.props.value.rows}, 1fr)`,
      "gridTemplateColumns": `repeat(${this.props.value.columns}, 1fr)`,
      "gridTemplateAreas": this.props.value.areas,
      "gridRowGap": "12px",
      "gridColumnGap": "12px",
    };

    return (
      <div id="page" style={layout}>
        {images}
        {texts}
      </div>
    )
  }
}

class Text extends Component {
  inputChangeHandler = (e) => {
    this.props.callbackHandler(
      CALL_BACK_ENUMS.ADD_TEXT_TO_PAGE,
      {
        id: this.props.value.id,
        value: e.target.value,
      },
    );
  }

  render() {
    const style = {
      "gridArea": this.props.value.id,
    };

    return (
      <div className="textbox" style={style}>
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