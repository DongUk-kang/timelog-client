/* eslint-disable no-undef */
import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router,  Route, Switch, Link, BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from "./pages/Register";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={() => <Login />} />
                <Route path="/home" component={() => <Home />}/>
                <Route path="register" component={() => <Register />}/>
            </Switch>
        </BrowserRouter>
    )
};

export default hot(module)(App);