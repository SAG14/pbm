import React, { Component } from 'react';

import {
    getFromStorage,
    clearLocalStorage
} from '../../utils/storage';

import {
    Redirect
} from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: getFromStorage("the_main_app")
        }

        this.logout = this.logout.bind(this);
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

     // Sign out function
     logout() {
        this.setState({
            isLoading: true
        });
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            fetch('http://localhost:3100/api/account/logout?token=' + token)
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        token: '',
                        isLoading: false
                    });
                    // clears the local storage
                    clearLocalStorage("the_main_app");
                } else {
                    this.setState({
                        isLoading: false
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
        } else {
            this.setState({
                isLoading: false
            });
        }
    }   

    render() {
        const {
            token,
        } = this.state;

        if (token) {
            return (
                <div>
                    <p>PhotoBook Maker</p>
                    <button onClick={this.logout}>Logout</button>
                </div>
            );
        } else {
            //return <Redirect to={"/"}/>
            return (
                <div>
                    <p>PhotoBook Maker</p>
                </div>
            );
        }
    }
}

export default Header;