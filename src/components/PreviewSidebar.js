import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';

class PreviewSidebar extends Component {

    render(){
        let style = {
            width: '20%',
            height: '100%',
            position: 'fixed',
            zIndex: 2,
            backgroundColor: '#3E3E3E'
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