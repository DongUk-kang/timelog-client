import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <h1>Hello, World</h1>
        </div>
    )
};

export default hot(module)(App);