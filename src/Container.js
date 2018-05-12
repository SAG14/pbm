import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/Header';
import Login from './components/login/SignIn';
import Registration from './components/login/Registration';
import App from './App';

const Container = () => (
    <div>
        <Header/>
        <main>
            <Route exact path="/" component={App}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/home" component={App}/>
        </main>
    </div>
);

export default Container;