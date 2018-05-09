import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store';
import { fetchProducts, selectProduct } from '../actions/productActions';

import '../styles/ProductSelector.css';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class ProductSelector extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.products);
  }

  componentWillReceiveProps() {
    console.log(this.props.products);
  }

  render() {
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
          <h1>Select Product</h1>
          <RadioButtonGroup name="productSelection" defaultSelected={16}>
            {buttons}
          </RadioButtonGroup>
          <FlatButton label="select"/>
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

