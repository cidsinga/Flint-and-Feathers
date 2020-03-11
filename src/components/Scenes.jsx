import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import gorge from "./Assets/gorge.jpg";
import everest from "./Assets/everest.jpg";

function Scenes() {
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
    width: "80%"
  };
  return (
    <div style={container}>
      <Container>
        <Row>
          <h1>Scenes</h1>
          <img style={photo} src={gorge} />
          <img style={photo} src={everest} />
        </Row>
      </Container>
    </div>
  );
}

export default Scenes;
