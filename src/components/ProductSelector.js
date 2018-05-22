import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProducts, selectProduct } from '../actions/productActions';
import '../styles/ProductSelector.css';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class ProductSelector extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { productIndex: -1, visible: true }
  }

  handleChange(e, v) {
    const index = this.props.products.findIndex((e) => e.pageNumber === v);
    this.setState({productIndex: index});
  }

  handleSubmit(e) {
    this.props.selectProduct(this.state.productIndex);
    this.setState({visible: false})
  }

  render() {
    if (!this.state.visible) return null;

    const buttons = this.props.products.map((prod, key) => {
      return (
          <RadioButton
            key={key + prod.pageNumber}
            value={prod.pageNumber}
            label={prod.pageNumber + " Pages"}
          />
      )
    })
    return (
      <div className="Modal-background">
        <div className="Modal-content">
          <h1>Pick A Book</h1>
          <div className="product-selector-radio">
            <RadioButtonGroup name="productSelection" onChange={this.handleChange}>
              {buttons}
            </RadioButtonGroup>
          </div>
          <RaisedButton
            primary={true}
            label="select"
            disabled={this.state.productIndex < 0}
            onClick={this.handleSubmit}
            className="customButton"
          />
        </div>
      </div>
    )
  }
}

ProductSelector.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  selectProduct: PropTypes.func.isRequired,
  products: PropTypes.array,
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps, { fetchProducts, selectProduct })(ProductSelector);

