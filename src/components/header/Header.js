import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/userActions';

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
            //TODO
        }
    }   

    render() {
        if (this.props.isAuthenticated) {
            return (
                <div>
                    <p>PhotoBook Maker</p>
                    <button onClick={this.logout}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <p>PhotoBook Maker</p>
                </div>
            );
        }
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string,
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    token: state.user.token,
})

export default connect(mapStateToProps, { logout })(Header);