import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

function Header() {
  const container = {
    width: "100vw",
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
    fontSize: "10px"
  };

  const menu = {
    display: "inline-block",
    display: "flex",
    float: "right",
    width: "69%",
    marginLeft: "35px"
  };

  const title = {
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

  const space = {
    display: "inline-block",
    float: "right",
    width: "5%"
  };

  const HoverText = styled.h3`
    color: #000;
    :hover {
      color: gray;
      cursor: pointer;
    }
  `;

  const HoverTitle = styled.h1`
    color: #000;
    :hover {
      cursor: pointer;
      opacity: 0.5;
    }
  `;

  return (
    <Container style={container}>
      <Row>
        <Col xs="3">
          <Link to="/" style={{ textDecoration: "none" }}>
            <HoverTitle style={title}>FLINT & FEATHERS</HoverTitle>
          </Link>
        </Col>
        <Col xs="auto"></Col>
        <Col xs="3">
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
              <Link to="/gallery" style={{ textDecoration: "none" }}>
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
        </Col>
      </Row>
      <div style={space}> </div>
    </Container>
  );
}

export default Header;
