import React, { Component } from 'react';

import '../styles/Product.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          id: "p0",
          width: 0,
          height: 0,
          rows: 4,
          columns: 12,
          images: [
            {
              id: "i0",
              startingPos: 0,
              rowspan: 4,
              colspan: 6,
            },
            {
              id: "i1",
              startingPos: 8,
              rowspan: 4,
              colspan: 4,
            },
          ],
          texts: [
            {
              id: "t0",
              startingPos: 42,
              rowspan: 1,
              colspan: 2,
            }
          ],
        },
      ],
    }
  }

  renderPage(i) {
    return (
      <Page
        value={this.state.pages[i]}
      />
    )
  }

  render() {
    return (
      <div id="product">
        <h1>Product</h1>
        {this.renderPage(0)}
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
    return (
      <div id="page">
        Page
        {this.renderImage(0)}
        {this.renderImage(1)}
        {this.renderText(0)}
      </div>
    )
  }
}

class Image extends Component {
  render() {
    return (
      <div>
        Image
        {this.props.value.id}
      </div>
    )
  }
}

class Text extends Component {
  render() {
    return (
      <div>
        Text
        {this.props.value.id}
      </div>
    )
  }
}

export default Product;