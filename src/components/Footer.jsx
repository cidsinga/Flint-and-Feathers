import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import { FaEtsy } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Container, Row, Col } from "reactstrap";

function Footer() {
  const container = {
    width: "100%",
    height: "20%",
    marginTop: "90%"
  };

  const left = {
    display: "inline-block",
    width: "50%",
    float: "left",
    textAlign: "left",
    marginLeft: "5%",
    opacity: "75%"
  };

  const icons = {
    display: "inline-block",
    float: "right",
    width: "40%",
    textAlign: "center",
    marginBottom: "10%",
    marginTop: "2%",
    marginLeft: "5%"
  };

  const icon = {
    height: "4%",
    width: "4%",
    padding: "3px"
  };

  return (
    <div classstyle={container}>
      <row style={{ marginBottom: "1%", marginTop: "5%" }}>
        <Col xs="3">
          <h5 style={left}>Copyright Brandy Idsinga 2020</h5>
        </Col>
        <Col xs="auto"></Col>
        <Col xs="3">
          <div style={icons}>
            <a href="https://www.etsy.com/shop/flintandfeathers/">
              <FaEtsy style={icon}></FaEtsy>
            </a>
            <a href="https://www.facebook.com/flintandfeathers/">
              <FaFacebookSquare style={icon}></FaFacebookSquare>
            </a>
            <a href="https://www.instagram.com/flintandfeathers/?hl=en">
              <FaInstagram style={icon}></FaInstagram>
            </a>
          </div>
        </Col>
      </row>
    </div>
  );
}

export default Footer;
