import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { applyTemplate } from '../actions/pageActions';

import store from '../store';

class TemplateManager extends Component {

  handleClick(i) {
    this.props.applyTemplate(this.props.current, i);
    this.props.applyTemplate(this.props.current + 1, i);
  }

  render() {
    const templates = this.props.templates.map((template, index) => {
      return (
        <li key={index}>
          <button onClick={() => this.handleClick(index)}>{index}</button>
        </li>
      )
    });

    return (
      <div className="manager-container">
        <ul>{templates}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  templates: state.templates.templates,
  current: state.pages.current,
});

export default connect(mapStateToProps, { applyTemplate, })(TemplateManager);