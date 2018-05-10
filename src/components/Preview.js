import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Preview extends Component {

    render(){
        let style = {
            width: '100%',
            height: '80%',
            position: 'absolute'
        };
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    preview: state.preview.isPreview
});

export default connect(mapStateToProps, null)(Preview);