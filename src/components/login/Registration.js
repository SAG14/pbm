import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
    register,
    toLogin,
} from '../../actions/userActions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../../styles/Registration.css';

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
        this.backToLogin = this.backToLogin.bind(this);
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

    backToLogin() {
        this.props.toLogin();
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div className="outerRegisterContainer">
                <div className="registerContainer">
                    <h1>Sign Up</h1>
                    <form onSubmit={this.onSubmit}>
                        <TextField
                            type="email"
                            placeholder="Email (...@my.bcit.ca)"
                            name="signUpEmail"
                            value={this.state.signUpEmail}
                            onChange={this.onChange}
                        /><br/>
                        <TextField
                            type="password"
                            placeholder="Password"
                            name="signUpPassword"
                            value={this.state.signUpPassword}
                            onChange={this.onChange}
                        /><br/>
                        <TextField
                            type="password"
                            placeholder="Confirm Password"
                            name="signUpConfirmPassword"
                            value={this.state.signUpConfirmPassword}
                            onChange={this.onChange}
                        /><br/>
                        <TextField
                            type="text"
                            placeholder="First Name"
                            name="signUpFirstName"
                            value={this.state.signUpFirstName}
                            onChange={this.onChange}
                        /><br/>
                        <TextField
                            type="text"
                            placeholder="Last Name"
                            name="signUpLastName"
                            value={this.state.signUpLastName}
                            onChange={this.onChange}
                        /><br/>   
                        <TextField
                            type="text"
                            placeholder="Student Number (A00123456)"
                            name="signUpStudentNo"
                            value={this.state.signUpStudentNo}
                            onChange={this.onChange}
                        /><br/>
                        <div className="buttonsContainer">
                            <div className="registerButton">
                                <RaisedButton type="submit" primary={true} label="Sign up" />
                            </div>
                            <div className="secondButton">
                                <RaisedButton type="button" backgroundColor="#a4c639" labelColor="#FFFFFF" label="Back" onClick={this.backToLogin}/>
                            </div>
                        </div>
                    </form>
                    <br/>
                    <br/>
                    <br/>
                    {/* {
                        (this.props.signUpError && !this.props.isRegistered) ? (
                            <div className="errorText">{this.props.signUpError}</div>
                        ) : (null)
                    } */}
                    {
                        (this.props.signUpError) ? (
                            <div className={this.props.isRegistered ? '' : 'errorText'}> {this.props.signUpError} </div>
                        ) : (null)
                    }
                </div>
            </div>
        );
    }
}

Registration.propTypes = {
    register: PropTypes.func.isRequired,
    toLogin: PropTypes.func.isRequired,
    isRegistered: PropTypes.bool,
    signUpError: PropTypes.string,
};

const mapStateToProps = state => ({
    isRegistered: state.user.isRegistered,
    signUpError: state.user.signUpError,
});

export default connect(mapStateToProps, { register, toLogin })(Registration);