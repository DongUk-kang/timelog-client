import React, { useState, useEffect } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css"

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = e => {
        e.preventDefault()

        const userInput = {
            email,
            password
        }
        console.log(userInput)
    }

    return (
        <div>
            <span class="letter-spacing: -0.02em">Welcome </span>
            <h4> Sign in below </h4>
            <button>Sign In</button>
            <button>Sign Up</button>
        </div>
    )
};

export default Login;