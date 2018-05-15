import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTemplates } from '../actions/templateActions';
import { applyTemplate } from '../actions/pageActions';
import '../styles/TemplateManager.css';

import store from '../store';

class TemplateManager extends Component {
  componentWillMount() {
    this.props.fetchTemplates();
  }

  componentDidUpdate() {
    const frontTemplateIndex = this.props.templates.findIndex((t) => {
      return t.type === "front"
    });

    const backTemplateIndex = this.props.templates.findIndex((t) => {
      return t.type === "back"
    });

    this.props.applyTemplate(0, frontTemplateIndex);
    this.props.applyTemplate(this.props.pageSize - 1, backTemplateIndex);
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
    if (!this.props.current || this.props.current == 0 || this.props.current == this.props.max) return null;

    const templates = this.props.templates.map((template, index) => {
      if (template.type !== "body") {
        return;
      }
      return (
          <button onClick={() => this.handleClick(index)} className="template-button">
            <img className="template-thumbnail" src={`/template-${index+1}.png`} />
          </button>
      )
    });

    return (
      <div id="template-manager">
        <div id="template-manager-content">
          {templates}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  templates: state.templates.templates,
  current: state.pages.current,
  pageSize: state.pages.pages.length,
  max: Math.floor((state.pages.pages.length + 1) / 2),
});

export default connect(mapStateToProps, { fetchTemplates, applyTemplate, })(TemplateManager);