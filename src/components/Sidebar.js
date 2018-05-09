import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImageManager from './ImageManager';
import TemplateManager from './TemplateManager';
import ToolBar from './Toolbar';

import '../styles/Sidebar.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {currentTool: 'images'};
        this.handleClick = this.handeClick.bind(this);
    }

    handeClick(param, e) {
        this.setState((prevState) => {
            return {currentTool: param};
        });
    }

    renderTool = () => {
        let currentTool = this.state.currentTool;
        
        if (currentTool === 'images'){
            return <ImageManager/>;
        } else if (currentTool == 'templates') {
            return <TemplateManager />;
        }
    }

    render() {
        return (
            <div ClassName="sidebar">
                <div ClassName="sidebar-menu">
                    <button  onClick={(e)=> this.handleClick('images', e)}>Images</button>
                    <button onClick={(e)=> this.handleClick('templates', e)}>Templates</button>
                </div>
                {this.renderTool()}
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, null)(Sidebar);