import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import alexandrite from "./Assets/Alexandrite.jpg";
import amethyst from "./Assets/Amethyst.jpg";
import aqua from "./Assets/aquamarine.jpg";
import citrine from "./Assets/Citrine.jpg";
import emerald from "./Assets/emerald.jpg";
import garnet from "./Assets/Garnet.jpg";
import tanzanite from "./Assets/Tanzanite.jpg";
import ruby from "./Assets/ruby.jpg";

function Stones() {
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
      <h1>Stones</h1>
      <Row style={row}>
        <Col xs="auto" style={left}>
          <img style={photo} src={ruby} />
          <img style={photo} src={alexandrite} />
          <img style={photo} src={citrine} />
          <img style={photo} src={tanzanite} />
        </Col>
        <Col xs="auto" style={right}>
          <img style={photo} src={amethyst} />
          <img style={photo} src={emerald} />
          <img style={photo} src={aqua} />
          <img style={photo} src={garnet} />
        </Col>
      </Row>
      <row></row>
    </Container>
  );
}

export default Stones;
