import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import balloons from "./Assets/balloons.jpg";
import cactus from "./Assets/Cactus.jpg";
import arrows from "./Assets/CupidsArrows.jpg";
import eggs from "./Assets/eggs.jpg";
import abstract from "./Assets/FirstAbstract.jpg";
import jasmine from "./Assets/Jasmine.jpg";
import mushroom from "./Assets/mushroom.jpg";
import shroom from "./Assets/whiteShroom.jpg";
import jewel from "./Assets/jewel.jpg";

function Fun() {
  const container = {
    width: "100%",
    height: "100%",
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
    width: "42.5%",
    textAlign: "center"
  };

  return (
    <Container style={container}>
      <h1>Fun</h1>
      <Row style={row}>
        <Col xs="auto" style={left}>
          <img style={photo} src={balloons} />
          <img style={photo} src={abstract} />
          <img style={photo} src={jasmine} />
          <img style={photo} src={eggs} />
        </Col>
        <Col xs="auto" style={right}>
          <img style={photo} src={jewel} />
          <img style={photo} src={shroom} />
          <img style={photo} src={mushroom} />
          <img style={photo} src={arrows} />
        </Col>
      </Row>
      <row></row>
      <Row></Row>
    </Container>
  );
}

export default Fun;
