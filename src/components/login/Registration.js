import React, { Component } from 'react';
import 'whatwg-fetch';

class Registration extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isLoading: true,
            token: '',
    
            // Registration variables
            signUpError: '',
            signUpEmail: '',
            signUpFirstName: '',
            signUpLastName: '',
            signUpPassword: '',
            signUpConfirmPassword: '',
            signUpStudentNo: '',
    
        };

        // Binding form values to a variable
        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
        this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
        this.onTextboxChangeSignUpConfirmPassword = this.onTextboxChangeSignUpConfirmPassword.bind(this);
        this.onTextboxChangeSignUpStudentNo = this.onTextboxChangeSignUpStudentNo.bind(this);


        // Binding the function to submit a registration form
        this.onSignUp = this.onSignUp.bind(this);
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }

    onTextboxChangeSignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value
        });
    }

    onTextboxChangeSignUpFirstName(event) {
        this.setState({
            signUpFirstName: event.target.value
        });
    }

    onTextboxChangeSignUpLastName(event) {
        this.setState({
            signUpLastName: event.target.value
        });
    }

    onTextboxChangeSignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value
        });
    }

    onTextboxChangeSignUpConfirmPassword(event) {
        this.setState({
            signUpConfirmPassword: event.target.value
        });
    }

    onTextboxChangeSignUpStudentNo(event) {
        this.setState({
            signUpStudentNo: event.target.value
        });
    }

    // Registration function
    onSignUp() {
        // Grabs the state
        const {
            signUpEmail,
            signUpFirstName,
            signUpLastName,
            signUpPassword,
            signUpConfirmPassword,
            signUpStudentNo,
        } = this.state;

        //Checks if the two passwords match
        if (signUpPassword !== signUpConfirmPassword) {
            this.setState({
                signUpError: 'Error: Passwords do not match.'
            });
        } else {

            this.setState({
                isLoading: true
            });
            // Post request to backend
            fetch('http://localhost:3100/api/account/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: signUpFirstName,
                    lastName: signUpLastName,
                    email: signUpEmail,
                    password: signUpPassword,
                    studentNo: signUpStudentNo
                })
            })
            .then(res => res.json())
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signUpFirstName: '',
                        signUpLastName: '',
                        signUpEmail: '',
                        signUpPassword: '',
                        signUpStudentNo: '',
                        signUpConfirmPassword: '',
                    });
                    this.props.history.push('/');
                } else {
                    this.setState({
                        signUpError:json.message,
                        isLoading: false
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }
    
    render() {
        const {
            isLoading,
    
            // Registration variables
            signUpError,
            signUpEmail,
            signUpFirstName,
            signUpLastName,
            signUpPassword,
            signUpConfirmPassword,
            signUpStudentNo,
        } = this.state;

        if (isLoading) {
            return (<div><p>Loading...</p></div>);
        }

        return (
            <div>
                <div>
                    {
                        (signUpError) ? (
                            <p>{signUpError}</p>
                        ) : (null)
                    }
                    <p>Sign Up</p>
                    <input
                        type="email"
                        placeholder="Email"
                        value={signUpEmail}
                        onChange={this.onTextboxChangeSignUpEmail}
                    /><br/>
                    <input
                        type="password"
                        placeholder="Password"
                        value={signUpPassword}
                        onChange={this.onTextboxChangeSignUpPassword}
                    /><br/>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={signUpConfirmPassword}
                        onChange={this.onTextboxChangeSignUpConfirmPassword}
                    /><br/>
                        <input
                        type="text"
                        placeholder="First Name"
                        value={signUpFirstName}
                        onChange={this.onTextboxChangeSignUpFirstName}
                    /><br/>
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={signUpLastName}
                        onChange={this.onTextboxChangeSignUpLastName}
                    /><br/>   
                    <input
                        type="text"
                        placeholder="Student Number"
                        value={signUpStudentNo}
                        onChange={this.onTextboxChangeSignUpStudentNo}
                    /><br/>
                    <button onClick={this.onSignUp}>Sign Up</button>
                </div>
            </div>
        );

        // return (
        //     <div>
        //         <p>Signed in</p>
        //     </div>
        // );
    }
}
export default Registration;