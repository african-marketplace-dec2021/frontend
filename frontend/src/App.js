import './App.css';
import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

//Components
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
  font-family: Fantasy; 
  font-weight: bold; 

  h1 {
    font-size: 4rem;
  }
  
  button {
    background-color: #C0392B;
    border-radius: 10px;
    color: #F7DC6F;
    font-family: Fantasy;
    border-color: #145A32;
    padding: 6%;
    width: 7rem;
    margin-left: 10px;
    font-weight: bold;

    &:hover {
      transform: scale(1.1);
    }
  }

  #login {
    padding: 1%;
  }
  
  .nav-links{
    display: flex;
    justify-content: center;
  }
  `


function App() {
  const isLoggedIn = localStorage.getItem("token")
  return (
    <StyledApp className='App'>
      <nav>
        <h1>African Marketplace</h1>
        <div className='nav-links'>
          <Link to='/'><button>Home</button></Link>
          {isLoggedIn && <Link to='/listings'><button>Listings</button></Link>}
          {!isLoggedIn && <Link to='/login'><button>Login page</button></Link>}
          {isLoggedIn && <Link to='/logout'><button>Logout page</button></Link>}
        </div>
      </nav>




    <Switch>
      <Route path = '/newlisting' component={NewListing} />
      <Route path = '/createuser' component={CreateUser} />
      <Route path = '/login' component={Login} />
      <PrivateRoute path = '/logout' component={Logout} />
      <PrivateRoute exact path = '/listings' component={Listings} />
      <Route path = '/' component={Home} />
    </Switch>

    </StyledApp>
  );
}

export default App;
