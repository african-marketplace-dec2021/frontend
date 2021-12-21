import React from "react";
import { Link } from 'react-router-dom';

import NewListing from '../components/NewListing';

function Listings (){
  // return(console.log('aaaaaaaa!'))
  return (
    <div>
      <p>Use axios to get current listings</p>
      <Link to='/newlisting'> Add new listing </Link>
  </div>
  )
}

export default Listings;