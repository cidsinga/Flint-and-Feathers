import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const container = {
    width: "100%",
    display: "inline-block",
    fontFamily: "'Julius Sans One', sans-serif",
    color: "#2f2f2d",
    height: "23vh"
  };

  const list = {
    listStyle: "none",
    textDecoration: "none",
    display: "inline-block",
    float: "right",
    marginTop: "96px",
    fontSize: "14px"
  };

  const menu = {
    display: "inline-block",
    display: "flex",
    flexDirection: "row",
    float: "right",
    width: "70%",
    marginLeft: "35px"
  };

  const flint = {
    float: "left",
    width: "30%",
    fontFamily: "'Julius Sans One', sans-serif",
    height: "200px",
    marginTop: "100px",
    textAlign: "left",
    marginLeft: "50px",
    fontSize: "38px"
  };

  const h3 = {
    display: "inline",
    padding: "5px",
    textAlign: "center"
  };

  const HoverText = styled.h3`
    color: #000;
    :hover {
      color: gray;
      cursor: pointer;
    }
  `;
  return (
    <div style={container}>
      <div>
        <h1 style={flint}>FLINT & FEATHERS</h1>
      </div>

      <div stlye={menu}>
        <li style={list}>
          <a
            href="https://www.etsy.com/shop/flintandfeathers/"
            style={{ textDecoration: "none" }}
          >
            <HoverText style={h3}>Shop</HoverText>
          </a>
        </li>
        <li style={list}>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <HoverText style={h3}>About</HoverText>
          </Link>
        </li>
        <li style={list}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <HoverText style={h3}>Gallery</HoverText>
          </Link>
        </li>
        <li style={list}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <HoverText style={h3}>Collections</HoverText>
          </Link>
        </li>
        <style jsx>{`
          a:visited {
            color: #2f2f2d;
          }
        `}</style>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
