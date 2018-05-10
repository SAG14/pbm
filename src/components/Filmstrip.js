import React, { Component } from 'react';
import { connect } from 'react-redux';
import { jumpToPage } from '../actions/pageActions';

import '../styles/Filmstrip.css';

class Filmstrip extends Component {

  handleClick(i) {
    this.props.jumpToPage(i);
  }

  render() {
    const strip = this.props.pages.map((page, index) => {
      if (index % 2 === 1) {
        return;
      }
      return (
        <li key={index}>
            <button className="frame" onClick={() => this.handleClick(index)}>{index}</button>
        </li>
      );
    });

    return (
      <div id="filmstrip">
        <ul>{strip}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pages: state.pages.pages,
  current: state.pages.current,
});

export default connect(mapStateToProps, { jumpToPage })(Filmstrip);