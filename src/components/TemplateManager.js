import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { applyTemplate } from '../actions/pageActions';

import store from '../store';

class TemplateManager extends Component {
  componentDidMount() {
    this.props.applyTemplate(0, 5);
  }

  handleClick(i) {
    if (this.props.current === 0 || this.props.current === this.props.max) {
      return;
    }

    const left = this.props.current * 2 - 1;
    const right = this.props.current * 2;

    this.props.applyTemplate(left, i);
    this.props.applyTemplate(right , i);
  }

  render() {
    const templates = this.props.templates.map((template, index) => {
      if (template.type !== "body") {
        return;
      }
      return (
        <li key={index}>
          <button onClick={() => this.handleClick(index)}>{index + 1}</button>
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
  max: Math.floor((state.pages.pages.length + 1) / 2),
});

export default connect(mapStateToProps, { applyTemplate, })(TemplateManager);