import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";


const Login = () => {

    const [user, setUser] = useState({
        credentials: {
            username: '',
            password: ''
        }
    });

    const handleChange = evt => {
        setUser({
            ...user,
            credentials: {
                ...user.credentials,
                [evt.target.name]: evt.target.value
            }
        })
    }

    const handleLogin = evt => {
        evt.preventDefault();
        axios.post('https://african-marketplace-dec-2021.herokuapp.com/api/auth/login', user.credentials)
            .then(res => {
                const { token, role } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("role", role);
                window.location.href='/listings'
            })
            .catch(err => {
                console.error(err);
            })
        };
    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={user.credentials.username}
                        onChange={handleChange}
                        placeholder="Enter a username"
                    />
                    <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={user.credentials.password}
                            onChange={handleChange}
                            placeholder="Enter a password"
                        />
                        <button id='login'>Log in</button>
            </form>
            <p>New Seller?</p> <Link to='/createuser'> Create a new account</Link>
        </div>
    );
};

export default Login;
