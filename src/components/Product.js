import React, { Component } from 'react';

import '../styles/Product.css';

import fireworks from '../images/fireworks.jpg';
import humananddog from '../images/humananddog.jpg';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          id: "p0",
          width: 8.5,
          height: 5.5,
          rows: 4,
          columns: 12,
          areas: '"i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 . . i1 i1 i1 i1" "i0 i0 i0 i0 i0 i0 t0 t0 i1 i1 i1 i1"',
          images: [
            {
              id: "i0",
              source: fireworks,
            },
            {
              id: "i1",
              source: humananddog,
            },
          ],
          texts: [
            {
              id: "t0",
              value: "Hello world",
            }
          ],
        },
      ],
      name: "Photo Book 8.5 by 5.5 inches (24 pages)",
      current: 0,
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
        {this.renderPage(this.state.current)}
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
    const images = this.props.value.images.map((arr, id) => {
      return (
        this.renderImage(id)
      );
    });

    const texts = this.props.value.texts.map((arr, id) => {
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
      // "border": "solid 1px black",
    };

    return (
      <div style={style}>
        <img src={this.props.value.source} />
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
      <div className="txt"  style={style}>
        {this.props.value.value}
      </div>
    )
  }
}

export default Product;