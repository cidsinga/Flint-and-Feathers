import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import flowers from "./Assets/flowersMock.jpg";
import ruby from "./Assets/ruby.jpg";
import gorge from "./Assets/gorge.jpg";
import peacock from "./Assets/peacock.jpg";
import jewel from "./Assets/jewel.jpg";

function Collections() {
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

  const line = {
    width: "90%",
    marginTop: "2%",
    marginBottom: "2%"
  };

  const photo = {
    display: "inline-block",
    width: "25%",
    marginTop: "3%",
    padding: "2.5%",
    float: "left",
    marginLeft: "3%"
  };

  const tagline = {
    fontSize: "24px",
    marginTop: "2%"
  };

  const pic = {
    display: "inline-block",
    width: "25%",
    marginTop: "3%",
    padding: "2.5%",
    float: "left"
  };

  const HoverText = styled.h3`
    color: #000;
    :hover {
      color: gray;
      cursor: pointer;
    }
  `;

  const HoverPic = styled.img`
    color: #000;
    :hover {
      color: gray;
      opacity: 80%;
      cursor: pointer;
    }
  `;

  const h3 = {};

  return (
    <div style={container}>
      <Container>
        <h1 style={tagline}>
          EXPLORING NATURE'S BEAUTY ONE BRUSH STROKE AT A TIME
        </h1>
        <hr style={line}></hr>
        <div>
          <h1 style={tagline}>COLLECTIONS</h1>
        </div>

        <Row>
          <Col>
            <Link to="/flowers" style={{ textDecoration: "none" }}>
              <img style={photo} src={flowers} />
            </Link>
          </Col>
          <Col>
            <Link to="/scenes" style={{ textDecoration: "none" }}>
              <img style={photo} src={gorge} />{" "}
            </Link>
          </Col>
          <Col>
            <Link to="/stones" style={{ textDecoration: "none" }}>
              <img style={photo} src={ruby} />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/Feathers" style={{ textDecoration: "none" }}>
              <img style={pic} src={peacock} />
            </Link>
          </Col>
          <Col>
            <Link to="/fun" style={{ textDecoration: "none" }}>
              <img style={pic} src={jewel} />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Collections;
