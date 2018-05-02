import React, { Component } from 'react';

import {
    //setInStorage,
    getFromStorage,
    //clearLocalStorage
} from '../../utils/storage';

import {
    Redirect
} from 'react-router';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn } from '../../actions/userActions';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            token: '',

            // Sign in variables
            signInError: '',
            signInEmail: '',
            signInPassword: '',
        };

        // this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
        // this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //this.onSignIn = this.onSignIn.bind(this);
        // this.logout = this.logout.bind(this);
    }
    
    componentDidMount() {
        this.setState({
            isLoading: false
        });
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            // Verify token
            fetch('http://localhost:3100/api/account/verify?token=' + token)
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        token: '',
                        isLoading: false
                    });
                } else {
                    this.setState({
                        isLoading: false
                    });
                }
            });
        } else {
            this.setState({
                isLoading: false
            });
        }
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // onTextboxChangeSignInEmail(event) {
    //     this.setState({
    //         signInEmail: event.target.value
    //     });
    // }

    // onTextboxChangeSignInPassword(event) {
    //     this.setState({
    //         signInPassword: event.target.value
    //     });
    // }

    onSubmit(e) {
        e.preventDefault();

        const credentials = {
            email: this.state.signInEmail,
            password: this.state.signInPassword
        }

        this.props.signIn(credentials);
    }

    // Sign in function
    onSignIn() {
        // Grab State
        const {
            signInEmail,
            signInPassword
        } = this.state;

        this.setState({
            isLoading: true
        });

        const credentials = {
            email: this.state.signInEmail,
            password: this.state.signInPassword
        }

        this.props.signIn(credentials);
        // Post request to backend
        // fetch('http://localhost:3100/api/account/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(credentials)
        // }).then(res => res.json())
        // .then(json => {
        //     console.log('json', json);
        //     if (json.success) {
        //         // Sets the token into local storage
        //         setInStorage('the_main_app', {token: json.token});
        //         this.setState({
        //             signInError: '',
        //             isLoading: false,
        //             signInPassword: '',
        //             signInEmail: '',
        //             token: json.token
        //         });
        //     } else {
        //         this.setState({
        //             signInError: json.message,
        //             isLoading: false
        //         });
        //     }
        // });
    }

    // Sign out function
    // logout() {
    //     this.setState({
    //         isLoading: true
    //     });
    //     const obj = getFromStorage('the_main_app');
    //     if (obj && obj.token) {
    //         const { token } = obj;
    //         fetch('http://localhost:3100/api/account/logout?token=' + token)
    //         .then(res => res.json())
    //         .then(json => {
    //             if (json.success) {
    //                 this.setState({
    //                     token: '',
    //                     isLoading: false
    //                 });
    //                 // clears the local storage
    //                 clearLocalStorage("the_main_app");
    //                 this.props.history.push('/');
    //             } else {
    //                 this.setState({
    //                     isLoading: false
    //                 });
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     } else {
    //         this.setState({
    //             isLoading: false
    //         });
    //     }
    // }

    render() {
        // if (isLoading) {
        //     return (
        //         <div><p>Loading...</p></div>
        //     );  
        // }

         if (!this.props.isAuthenticated) {
            return (
                <div>
                    <div>
                        {
                            (this.state.signInError) ? (
                                <p>{this.state.signInError}</p>
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

        // return (
        //     <div>
        //         <p>Account</p>
        //         <button onClick={this.logout}>Logout</button>
        //     </div>
        // );
    }
}

SignIn.propTypes = {
    signIn: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.object 
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated
  });

export default connect(mapStateToProps, { signIn }) (SignIn);