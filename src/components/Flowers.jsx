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
    width: "90%"
  };

  const left = {
    display: "inline-block",
    float: "left",
    width: "50%"
  };

  const right = {
    display: "inline-block",
    float: "right",
    width: "50%"
  };

  const row = {
    width: "100%"
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
            <img style={photo} src={newBeginningsFlowers} />
          </Col>
        </Row>
        <row>
          <img style={photo} src={monroe} />
        </row>
        <Row></Row>
      </Container>
    </div>
  );
}

export default Flowers;
