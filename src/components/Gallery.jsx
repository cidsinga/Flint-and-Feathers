import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import gathering from "./Assets/gathering.jpg";
import monroe from "./Assets/monroe2.jpg";
import group from "./Assets/peacockGroup.jpg";
import group2 from "./Assets/group2.jpg";
import ruby from "./Assets/ruby.jpg";
import everest from "./Assets/everest.jpg";
import emerald2 from "./Assets/emerald2.jpg";
import summer from "./Assets/SummerFlowers.jpg";

function Gallery() {
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
      <h1>Gallery</h1>
      <Row style={row}>
        <Col xs="auto" style={left}>
          <img style={photo} src={monroe} />
          <img style={photo} src={group2} />
          <img style={photo} src={ruby} />
          <img style={photo} src={summer} />
        </Col>
        <Col xs="auto" style={right}>
          <img style={photo} src={gathering} />
          <img style={photo} src={group} />
          <img style={photo} src={everest} />
          <img style={photo} src={emerald2} />
        </Col>
      </Row>
      <row></row>
    </Container>
  );
}
export default Gallery;
