import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn } from '../../actions/userActions';

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

    componentDidMount() {
        
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
                <div>
                    <div>
                        {
                            (this.props.signInError) ? (
                                <p>{this.props.signInError}</p>
                            ) : (null)
                        }
                        <p>Sign In</p>
                        <form onSubmit={this.onSubmit}>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="signInEmail"
                                    value={this.state.signInEmail}
                                    onChange={this.onChange}
                                /><br/>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="signInPassword"
                                    value={this.state.signInPassword}
                                    onChange={this.onChange}
                                /><br/>
                                <button type="submit">Sign In</button>
                            </div>
                        </form>
                        <div>
                            <Link to="/registration">Register</Link>
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
    isAuthenticated: PropTypes.bool,
    signInError: PropTypes.string,
    token: PropTypes.string, 
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    signInError: state.user.signInError,
    token: state.user.token,
  });

export default connect(mapStateToProps, { signIn })(SignIn);