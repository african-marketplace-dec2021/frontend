import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import styled from 'styled-components';

const StyledStuff = styled.div`
    display: flex;
    align-content: center;
    align-items:center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 1%;
    margin-bottom: 2%;
`
const StylishUsername = styled.div`
    margin-bottom: 20px;
`

const StylishPassword = styled.div`
    margin-bottom: 20px;
`


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
                <StyledStuff>
                <StylishUsername>
                <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={user.credentials.username}
                        onChange={handleChange}
                        placeholder="Enter a username"
                    />
                </StylishUsername>
                <StylishPassword>
                    <label>Password: </label>
                        <input
                            type="password"
                            name="password"
                            value={user.credentials.password}
                            onChange={handleChange}
                            placeholder="Enter a password"
                        />
                </StylishPassword>
                        <button id='login'>Log in</button>
                    </StyledStuff>
            </form>
            <h2>New User?</h2> 
            <Link to='/createuser'><button>Create a new account</button></Link>
        </div>
    );
};

export default Login;
