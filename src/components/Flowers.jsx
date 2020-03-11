import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import flowers from "./Assets/flowersMock.jpg";
import monroe from "./Assets/Monroe.jpg";
import newBeginningsFlowers from "./Assets/NewBeginningsFlowers.jpg";
import grey from "./Assets/PaynesGreyFloral.jpg";
import poppies from "./Assets/Poppies.jpg";
import spring from "./Assets/SpringFlowers.jpg";
import summer from "./Assets/SummerFlowers.jpg";

function Flowers() {
  const container = {
    width: "100%",
    height: "77vh",
    display: "inline-block",
    fontFamily: "'Julius Sans One', sans-serif",
    color: "#2f2f2d",
    fontSize: "20px",
    marginBottom: "20%",
    textAlign: "center"
  };

  const photo = {
    width: "100%",
    marginTop: "2.5%",
    marginBottom: "2.5%"
  };

  const left = {
    display: "inline-block",
    float: "left",
    width: "42.5%",
    marginRight: "2.5%",
    marginLeft: "5%"
  };

  const right = {
    display: "inline-block",
    float: "right",
    width: "42.5%",
    marginLeft: "2.5%",
    marginRight: "5%"
  };

  const row = {
    width: "100%"
  };

  const center = {
    width: "50%",
    textAlign: "center"
  };

  return (
    <div style={container}>
      <Container>
        <h1>Flowers</h1>
        <Row style={row}>
          <Col xs="auto" style={left}>
            <img style={photo} src={flowers} />
            <img style={photo} src={spring} />
            <img style={photo} src={grey} />
          </Col>
          <Col xs="auto" style={right}>
            <img style={photo} src={summer} />
            <img style={photo} src={poppies} />
            <img style={photo} src={monroe} />
          </Col>
        </Row>
        <row>
          <img style={center} src={newBeginningsFlowers} />
        </row>
        <Row></Row>
      </Container>
    </div>
  );
}

export default Flowers;
