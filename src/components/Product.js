import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../actions/productActions';
import { applyTemplate } from '../actions/pageActions';

import '../styles/Product.css';

class Product extends Component {
  componentWillMount() {
    this.props.selectProduct();
    this.props.applyTemplate(1);
  }

  renderPage(i) {
    if (i == null)
      return;
    return (
      <Page
        value={this.props.pages[i]}
      />
    )
  }

  render() {
    const current = 'page ' + this.props.current;
    return (
      <div id="product">
        <h1>Product</h1>
        <h2>{current}</h2>
        {this.renderPage(this.props.current)}
      </div>
    )
  }
}

class Page extends Component {
  renderImage(i) {
    return (
      <Image
        key={this.props.value.images[i].id}
        value={this.props.value.images[i]}
      />
    )
  }

  renderText(i) {
    return (
      <Text
        key={this.props.value.texts[i].id}
        value={this.props.value.texts[i]}
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
    };

    return (
      <div id="page" style={layout}>
        {images}
        {texts}
      </div>
    )
  }
}

class Image extends Component {
  render() {
    const style = {
      "gridArea": this.props.value.id,
    };

    const image = this.props.value.source === null ? null : <img src={this.props.value.source} alt="img" />;

    return (
      <div className="imagebox" style={style}>
        {image}
      </div>
    )
  }
}

class Text extends Component {
  render() {
    const style = {
      "gridArea": this.props.value.id,
    };

    return (
      <div className="textbox" style={style}>
        <textarea></textarea>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.products.product,
  pages: state.pages.pages,
  current: state.pages.current,
});

export default connect(mapStateToProps, { selectProduct, applyTemplate })(Product);