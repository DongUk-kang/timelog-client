import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import check_out from "./pages/check_out";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    return (
        <Routes>
            <Route path="/" exact={true} component={Login} />
            <Route path="/register" exact={true} component={Register} />
            <Route path="/home" exact={true} component={Home} />
        
        </Routes>
    )
};

export default hot(module)(App);