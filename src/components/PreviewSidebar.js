import React, { Component } from 'react';
import { connect } from 'react-redux';

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