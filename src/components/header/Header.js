import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../styles/Header.css';
import { logout } from '../../actions/userActions';
import { togglePreview } from '../../actions/previewActions';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

     // Sign out function
     logout() {
        if (this.props.token) {
            const token = this.props.token;
            this.props.logout(token);
        } else {
            console.log("Token is missing inside the store.");
        }
    }

    render() {
        if (this.props.isAuthenticated) {
            let modeText = 'Preview';
            if (this.props.isPreview)
                modeText = 'Design';
            return (
                <div className="appHeader">
                    <div className="navbarTitle">
                        <h1>Mini-Mag Maker</h1>
                    </div>
                    <div className="navbarElement">
                        <RaisedButton type="button" 
                            labelColor="#999"
                            label="Logout" 
                            onClick={this.logout}/>
                    </div>
                    <div className="navbarElement">
                        <p className="navbarText"> Hello, {this.props.currentUser.firstName}</p>
                    </div>
                    <div className="navbarOptions">
                        <div className="navbarOptionElement">
                            <RaisedButton 
                                type="button" 
                                labelColor="#999" 
                                label={modeText}
                                onClick={this.props.togglePreview}/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="appHeader">
                    <h1>Mini-Mag Maker</h1>
                </div>
            );
        }
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    togglePreview: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string,
    currentUser: PropTypes.object,
    isPreview: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    token: state.user.token,
    currentUser: state.user.currentUser,
    isPreview: state.preview.isPreview,
})

export default connect(mapStateToProps, { logout, togglePreview })(Header);
