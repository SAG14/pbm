import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../styles/Header.css';
import { logout } from '../../actions/userActions';
import { togglePreview } from '../../actions/previewActions';
import RaisedButton from 'material-ui/RaisedButton';
import { toExportPDFPage } from '../../actions/appNavigationActions';

class Header extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
        this.toExportPage = this.toExportPage.bind(this);
    }

     // Sign out function
     logout() {
        if (this.props.token) {
            const token = this.props.token;
            this.props.logout(token);
        } else {
            //TODO
        }
    }
    
    toExportPage() {
        this.props.toExportPDFPage();
    }

    render() {
        if (this.props.isAuthenticated) {
            return (
                <div className="appHeader">
                    <div className="navbarTitle">
                        <h1>Photobook Maker</h1>
                    </div>
                    <div className="navbarElement">
                        <RaisedButton type="button" backgroundColor="#A4C639" labelColor="#FFFFFF" onClick={this.logout} label="Logout"/>
                    </div>
                    <div className="navbarElement">
                        <p className="navbarText"> Hello, {this.props.currentUser.firstName}</p>
                    </div>
                    <div className="navbarOptions">
                        <div className="navbarOptionElement">
                            <RaisedButton 
                                type="button" 
                                backgroundColor="#0288D1" 
                                labelColor="#FFFFFF" 
                                label="Preview"
                                onClick={this.props.togglePreview}/>
                        </div>
                        <div className="navbarOptionElement">
                            <RaisedButton type="button" backgroundColor="#0288D1" labelColor="#FFFFFF" label="Order"/>
                        </div>
                        <div className="navbarOptionElement">
                            <RaisedButton type="button" backgroundColor="#0288D1" labelColor="#FFFFFF" label="Export" onClick={this.toExportPage}/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="appHeader">
                    <h1>Photobook Maker</h1>
                </div>
            );
        }
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    toExportPDFPage: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string,
    currentUser: PropTypes.object,
    isPreview: PropTypes.bool,
    togglePreview: PropTypes.func
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    token: state.user.token,
    currentUser: state.user.currentUser,
    isPreview: state.preview.isPreview,
    displayExportPDFPage: state.appNavigation.displayExportPDFPage,
})

export default connect(mapStateToProps, { logout, togglePreview, toExportPDFPage })(Header);
