import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";

function Header() {
  const container = {
    width: '100%',
    display: "inline-block",
    fontFamily: "'Oranienbaum,' serif",
  };

  const list = {
    listStyle: 'none',
    display: 'inline-block',
    float: 'left',

  };

  const menu = {
    display: "inline-block",
    display: "flex",
    flexDirection: "row",
    float: 'right',
    width: '70%',
    textAlign: 'right',

  };

  const flint = {
    float: 'left',
    width: '30%',
    fontFamily: "'Oranienbaum,' serif",
    height: '200px',
  };

  const h3 = {
    display: "inline",
    padding: "5px",
    textAlign: "center"
  };
  return (
    <div style={container}>
      <div>
        <h1 style={flint}>flint and feathers</h1>
      </div>

      <ul stlye={menu}>
        <li style={list}>
          <Link to="/">
            <h3 style={h3}>Collections</h3>
          </Link>
        </li>
        <li style={list}>
          <Link to="/">
            <h3 style={h3}>About</h3>
          </Link>
        </li>
        <li style={list}>
          <Link to="/">
            <h3 style={h3}>Gallery</h3>
          </Link>
        </li>
        <li style={list}>
          <Link to="/">
            <h3 style={h3}>Shop</h3>
          </Link>
        </li>
      </ul>
      <div></div>
    </div>
  );
}

export default Header;
