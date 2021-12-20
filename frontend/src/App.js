import './App.css';
import React from 'react';
import Home from './components/Home';
import Listings from './components/Listings';
import Login from './components/Login';
import { Route, Switch, Link, useHistory } from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <nav>
        <h1>African Marketplace</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/listings'>Listings</Link>
          <Link to='/login'>Login page</Link>
        </div>
      </nav>




    <Switch>
      <Route path = '/login' component={Login} />
      <Route path = '/listings'>
        <Listings />
      </Route>
      <Route path = '/'>
        <Home />
      </Route>
    </Switch>

    </div>
  );
}

export default App;
