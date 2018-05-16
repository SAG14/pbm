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
      let pageIndex = index + " / " + (index + 1);
      if (index === 0) {
        pageIndex = 'FRONT';
      }
      else if (index === this.props.pages.length - 1) {
        pageIndex = "BACK";
      }
      else if (index % 2 === 1) {
        return null;
      }
      
      const spreadIndex = Math.floor((index + 1) / 2);

      let style = "frame";
      if (spreadIndex === this.props.current)
        style += " active";

      return (
        <li key={index}>
          <button className={style} onClick={() => this.handleClick(spreadIndex)}>{pageIndex}</button>
        </li>
      );
    });

    return (
      <div id="filmstrip">
        <ul>
          {strip}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pages: state.pages.pages,
  current: state.pages.current,
});

export default connect(mapStateToProps, { jumpToPage })(Filmstrip);