import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";

function Header() {
  const container = {
    display: "inline-block",
    gridTemplateColumns: "1fr 1.5fr 1.5fr",
    padding: "3%"
  };

  const menu = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridGap: "5px"
  };

  const flint = {};
  return (
    <div style={container}>
      <div>
        <h1 style={flint}>flint and feathers</h1>
      </div>
      <div></div>

      <div stlye={menu}>
        <div>
          <Link to="/">
            <h3>Collections</h3>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h3>About</h3>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h3>Gallery</h3>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h3>Shop</h3>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
