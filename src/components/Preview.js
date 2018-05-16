import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';
import { Page, Spread } from './Product';
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
            overflowY: 'auto',
        };
        return (
            <div style={style}>
                {/* <div className='preview-container'> */}
            { this.props.pages.map((page, index) =>
                <div className='preview-page-container' key={index}>
                    <Page
                        value={this.props.pages[index]}
                        isPreview={this.props.isPreview}
                    />
                    {/* <div className='bleed-hider'></div> */}
                    </div>
                )} 
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

export default connect(mapStateToProps, {previousPage, nextPage})(Preview);