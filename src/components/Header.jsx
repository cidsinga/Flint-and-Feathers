import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";

function Header() {
  const container = {
    display: "inline"
  };

  const menu = {
    display: "inline",
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    height: "50px"
  };

  const flint = {};

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
      <div></div>

      <div stlye={menu}>
        <div>
          <Link to="/">
            <h3 style={h3}>Collections</h3>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h3 style={h3}>About</h3>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h3 style={h3}>Gallery</h3>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h3 style={h3}>Shop</h3>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
