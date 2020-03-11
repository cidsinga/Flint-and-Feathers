import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import smallP from "./Assets/BackPeacock.jpg";
import blue from "./Assets/blueJay.jpg";
import flicker from "./Assets/Flicker.jpg";
import guinea from "./Assets/Guinea.jpg";
import kestral from "./Assets/Kestral.jpg";
import mac from "./Assets/Macgregor.jpg";
import peacock from "./Assets/peacock.jpg";

function Feathers() {
  const container = {
    width: "100%",
    height: "77%",
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
    <Container style={container}>
      <h1>Feathers</h1>
      <Row style={row}>
        <Col xs="auto" style={left}>
          <img style={photo} src={peacock} />
          <img style={photo} src={blue} />
          <img style={photo} src={kestral} />
          <img style={photo} src={guinea} />
        </Col>
        <Col xs="auto" style={right}>
          <img style={photo} src={flicker} />
          <img style={photo} src={mac} />
          <img style={photo} src={smallP} />
        </Col>
      </Row>
      <row></row>
    </Container>
  );
}

export default Feathers;
