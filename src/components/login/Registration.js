import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/userActions';

class Registration extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
    
            // Registration variables
            signUpEmail: '',
            signUpFirstName: '',
            signUpLastName: '',
            signUpPassword: '',
            signUpConfirmPassword: '',
            signUpStudentNo: '',
    
        };

        // Binding the functions on the registration form
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            firstName: this.state.signUpFirstName,
            lastName: this.state.signUpLastName,
            email: this.state.signUpEmail,
            password: this.state.signUpPassword,
            confirmPassword: this.state.signUpConfirmPassword,
            studentNo: this.state.signUpStudentNo                
        };
        
        // Register function in actions > reducer
        this.props.register(userData);
    }
    
    render() {
        if (!this.props.isRegistered) {
            return (
                <div>
                    <div>
                        {
                            (this.props.signUpError) ? (
                                <p>{this.props.signUpError}</p>
                            ) : (null)
                        }
                        <p>Sign Up</p>
                        <form onSubmit={this.onSubmit}>
                            <input
                                type="email"
                                placeholder="Email"
                                name="signUpEmail"
                                value={this.state.signUpEmail}
                                onChange={this.onChange}
                            /><br/>
                            <input
                                type="password"
                                placeholder="Password"
                                name="signUpPassword"
                                value={this.state.signUpPassword}
                                onChange={this.onChange}
                            /><br/>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="signUpConfirmPassword"
                                value={this.state.signUpConfirmPassword}
                                onChange={this.onChange}
                            /><br/>
                                <input
                                type="text"
                                placeholder="First Name"
                                name="signUpFirstName"
                                value={this.state.signUpFirstName}
                                onChange={this.onChange}
                            /><br/>
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="signUpLastName"
                                value={this.state.signUpLastName}
                                onChange={this.onChange}
                            /><br/>   
                            <input
                                type="text"
                                placeholder="Student Number"
                                name="signUpStudentNo"
                                value={this.state.signUpStudentNo}
                                onChange={this.onChange}
                            /><br/>
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <Redirect to="/"/>
            );
        }
    }
}

Registration.propTypes = {
    register: PropTypes.func.isRequired,
    isRegistered: PropTypes.bool,
    signUpError: PropTypes.string,
};

const mapStateToProps = state => ({
    isRegistered: state.user.isRegistered,
    signUpError: state.user.signUpError
});

export default connect(mapStateToProps, { register })(Registration);