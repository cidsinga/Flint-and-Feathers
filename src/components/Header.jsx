import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


function Header() {
  return (
    <div>
    <h1>flint and feathers</h1>
      <div>
      <Link to='/'><h3>Collections</h3></Link>
      <Link to='/'><h3>About</h3></Link>
      <Link to='/'><h3>Gallery</h3></Link>
      <Link to='/'><h3>Shop</h3></Link>
      </div>
    <div>
    </div>


    </div>
  );

}


export default Header;
