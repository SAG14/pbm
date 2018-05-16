import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';
import { Page, Spread } from './Product';
import RaisedButton from 'material-ui/RaisedButton';
import { previousPage, nextPage } from '../actions/pageActions';

import '../styles/Preview.css';

class Preview extends Component {


    render() {
        const previewPages = this.props.pages.map((page, index) => {
            return (
                <Page
                    key={index}
                    value={this.props.pages[index]}
                    isPreview={this.props.isPreview}
                />
            );
        });

        return (
            <div className="preview">
                {/* <div className='preview-container'> */}
                {previewPages}
                {/* </div> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isPreview: state.preview.isPreview,
    current: state.pages.current,
    pages: state.pages.pages,

});

export default connect(mapStateToProps, { previousPage, nextPage })(Preview);