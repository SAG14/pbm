import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
    signIn,
    toRegistration,
 } from '../../actions/userActions';
import TextField from 'material-ui/TextField';
import '../../styles/Login.css';
import { RaisedButton } from 'material-ui';
import Background from '../../images/Photos.jpeg';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {

            // Sign in variables
            signInEmail: '',
            signInPassword: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // Sign in function
    onSubmit(e) {
        e.preventDefault();

        const credentials = {
            email: this.state.signInEmail,
            password: this.state.signInPassword
        };

        // Sign in function in actions > reducer
        this.props.signIn(credentials);
    }

    render() {
         if (!this.props.isAuthenticated) {
            return (
                <div className="outerContainer">
                    <div className="loginContainer">
                        <img src="/minimagmaker-logo.png" id="logo-login" />
                        <h1>Sign In</h1>
                        <form onSubmit={this.onSubmit}>
                            <div>
                                <TextField
                                    type="email"
                                    hintText="Email"
                                    name="signInEmail"
                                    value={this.state.signInEmail}
                                    onChange={this.onChange}
                                /><br/>
                                <TextField
                                    type="password"
                                    hintText="Password"
                                    name="signInPassword"
                                    value={this.state.signInPassword}
                                    onChange={this.onChange}
                                /><br/>
                                {
                                    (this.props.signInError) ? (
                                        <div className="errorText">{this.props.signInError}</div>
                                    ) : (null)
                                }
                                <div className="button">
                                    <RaisedButton type="submit" primary={true} label="Sign In"/>
                                </div>
                            </div>
                        </form>
                        <div className="Register">
                            Don't have an account? <Link to="/registration" onClick={this.props.toRegistration}>Sign Up</Link>
                        </div>
                    </div>
                </div>
            );
        } else {
            // Redirects to main application
            return (
                <div>
                    <Redirect to="/home"/>
                </div>
            );
        }
    }
}

SignIn.propTypes = {
    signIn: PropTypes.func.isRequired,
    toRegistration: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    signInError: PropTypes.string,
    token: PropTypes.string, 
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    signInError: state.user.signInError,
    token: state.user.token,
  });

export default connect(mapStateToProps, { signIn, toRegistration })(SignIn);