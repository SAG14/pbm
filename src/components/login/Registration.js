import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
    register,
    toLogin,
} from '../../actions/userActions';
import { openTOSModal } from '../../actions/termsOfServiceActions';
import TermsOfService from '../../components/login/TermsOfService';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../../styles/Registration.css';
import { Link } from 'react-router-dom';


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
        let styles = {
          button: {
            marginTop: '30px'
          }
        }
        return (
            <div className="outerRegisterContainer">
                    <a className="loginBack" onClick={this.backToLogin}>&lt; Back</a>
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
                        <div className="termsOfService">
                            By clicking on the Sign Up button you are agreeing to the <Link to='#' onClick={this.props.openTOSModal}>Terms of Service</Link>.
                        </div>
                        {/* Terms of Service Modal */}
                        {
                            (this.props.termsOfServiceIsOpen) ? (<TermsOfService/>) : (null)
                        }
                        <div className="buttonsContainer">
                            <div className="button" style={styles.button}>
                                <RaisedButton type="submit" primary={true} label="Sign up" />
                            </div>
                        </div>
                        {/* Displaying error text */}
                        {
                            (this.props.signUpError) ? (
                                <div className={this.props.isRegistered ? '' : 'errorText'}> {this.props.signUpError} </div>
                            ) : (null)
                        }
                    </form>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}

Registration.propTypes = {
    register: PropTypes.func.isRequired,
    toLogin: PropTypes.func.isRequired,
    openTOSModal: PropTypes.func.isRequired,
    isRegistered: PropTypes.bool,
    signUpError: PropTypes.string,
    termsOfServiceIsOpen: PropTypes.bool,
};

const mapStateToProps = state => ({
    isRegistered: state.user.isRegistered,
    signUpError: state.user.signUpError,
    termsOfServiceIsOpen: state.termsOfService.termsOfServiceIsOpen,
});

export default connect(mapStateToProps, { register, toLogin, openTOSModal })(Registration);