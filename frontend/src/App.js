import './App.css';
import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';

//Components
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Listings from './components/Listings';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const isLoggedIn = localStorage.getItem("token")
  return (
    <div className='App'>
      <nav>
        <h1>African Marketplace</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          {isLoggedIn && <Link to='/listings'>Listings</Link>}
          <Link to='/login'>Login page</Link>
          {isLoggedIn && <Link to='/logout'>Logout page</Link>}
        </div>
      </nav>




    <Switch>
      <Route path = '/login' component={Login} />
      <PrivateRoute path = '/logout' component={Logout} />
      <PrivateRoute exact path = '/listings' component={Listings} />
      <Route path = '/' component={Home} />
    </Switch>

    </div>
  );
}

export default App;
