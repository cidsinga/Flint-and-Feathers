import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


function Header() {

  const container = {
    display: 'grid',
    gridTemplateColumns: '300px 300px 300px',
  }

  const menu = {

  }

  const flint = {

  }
  return (
    <div style={container}>
    <h1 style={flint}>flint and feathers</h1>
      <div stlye={menu}>
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
