import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImageManager from './ImageManager';

import '../styles/Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ImageManager />
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, null)(Sidebar);