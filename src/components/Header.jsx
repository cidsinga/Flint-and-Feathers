import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";

function Header() {
  const container = {
    width: "100%",
    display: "inline-block",
    fontFamily: "'Oranienbaum', serif",
    color: "#2f2f2d"
  };

  const list = {
    listStyle: "none",
    display: "inline-block",
    float: "right",
    marginTop: "96px"
  };

  const menu = {
    display: "inline-block",
    display: "flex",
    flexDirection: "row",
    float: "right",
    width: "70%",
    marginLeft: "25px"
  };

  const flint = {
    float: "left",
    width: "30%",
    fontFamily: "'Oranienbaum,' serif",
    height: "200px",
    marginTop: "100px",
    textAlign: "left",
    marginLeft: "50px"
  };

  const h3 = {
    display: "inline",
    padding: "5px",
    textAlign: "center"
  };
  return (
    <div style={container}>
      <div>
        <h1 style={flint}>FLINT & FEATHERS</h1>
      </div>

      <div stlye={menu}>
        <li style={list}>
          <Link to="/">
            <h3 style={h3}>Shop</h3>
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
            <h3 style={h3}>Collections</h3>
          </Link>
        </li>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
