import './App.css';
import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';


import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Listings from './components/Listings';
import Login from './components/Login';
import Logout from './components/Logout';
import NewListing from './components/NewListing';
import CreateUser from './components/CreateUser';


const StyledApp = styled.div`
  background-color: #F7DC6F ;
  color: #145A32;
  font-family: Papyrus, Fantasy; 
  font-weight: bold;
  

  h1 {
    font-size: 4rem;
  }
  
  button {
    background-color: #C0392B;
    border-radius: 10px;
    color: #F7DC6F;
    font-family: Papyrus, Fantasy;
    border-color: #145A32;
    width: 7rem;
    margin-left: 10px;
    font-weight: bold;

    &:hover {
      transform: scale(1.1);
    }
  }

  #login {
    /* padding: 1%; */
  }
  
  .nav-links{
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
    margin-top: -2%;
  }
  `


function App() {
  const isLoggedIn = localStorage.getItem("token")
  return (
    <StyledApp className='App'>
      <nav>
        <h1>Sauti Africa</h1>
        <div className='nav-links'>
          {isLoggedIn && <Link to='/'><button>Home</button></Link>}
          {isLoggedIn && <Link to='/listings'><button>Listings</button></Link>}
          {!isLoggedIn && <Link to='/login'><button>Login</button></Link>}
          {isLoggedIn && <Link to='/logout'><button>Logout</button></Link>}
        </div>
      </nav>




      <PrivateRoute path = '/newlisting' component={NewListing} />
      <Route path = '/createuser' component={CreateUser} />
      <Route path = '/login' component={Login} />
      <PrivateRoute path = '/logout' component={Logout} />
      <PrivateRoute path = '/listings' component={Listings} />
      <Route exact path = '/' component={Home} />

    </StyledApp>
  );
}

export default App;
