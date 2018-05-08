import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImageManager from './ImageManager';
import TemplateManager from './TemplateManager';
import ToolBar from './Toolbar';

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
        let sidebarStyle = {
            height: '100%',
            width: '20%',
            position: 'fixed'
        };

        let toolbarStyle = {
            border: 'solid red thin',
            width: '30%',
        };


        return (
        <div style={sidebarStyle}>
            <div style={toolbarStyle}>
                <button 
                    onClick={(e)=> this.handleClick('images', e)}
                >
                    Images 
                </button>
                <button
                onClick={(e)=> this.handleClick('templates', e)}
                > 
                    Templates
                </button>
            </div> 
            {this.renderTool()}
        </div>
        );
    }


}

const mapStateToProps = state => ({

});



export default connect(mapStateToProps, null)(Sidebar);