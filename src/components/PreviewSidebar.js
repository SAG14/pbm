import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';

class PreviewSidebar extends Component {

    render(){
        let style = {
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: '#333333'
        };
        return (
            <div style={style}>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    preview: state.preview.isPreview
});

export default connect(mapStateToProps, null)(PreviewSidebar);