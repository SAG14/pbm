import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';
import RaisedButton from 'material-ui/RaisedButton';
import { previousPage, nextPage } from '../actions/pageActions';
class Preview extends Component {

    render(){
        let style = {
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: '#3E3E3E',
            zIndex: 3,
        };
        return (
            <div style={style}>
                <Product />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    preview: state.preview.isPreview,
    current: state.pages.current,
    pages: state.pages.pages,

});

export default connect(mapStateToProps, {previousPage, nextPage})(Preview);