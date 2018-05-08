import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Toolbar extends Component {

    render() {
        let style = {
            border: 'solid red thin',
            float: 'left',
            width: '10%'
        };
        return(
            <div style={style}>
            </div>
        );
    }


}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, null)(Toolbar);