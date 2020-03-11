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
import gathering from "./Assets/gathering.jpg";

function Collections() {
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

  const line = {
    width: "90%",
    marginTop: "4%",
    marginBottom: "4%"
  };

  const photo = {
    display: "inline-block",
    width: "25%",
    padding: "2.5%",
    float: "left",
    marginTop: "3%"
    // marginLeft: "3%"
  };

  const tagline = {
    fontSize: "24px",
    marginTop: "2%"
  };

  const pic = {
    width: "25%",
    marginTop: "3%",
    padding: "2.5%",
    float: "left"
  };

  const topRow = {
    width: "100%",
    marginLeft: "5%",
    marginRight: "auto"
  };

  const bottomRow = {
    display: "inline-block",
    width: "100%",
    flost: "left",
    marginLeft: "20%",
    marginRight: "auto"
  };

  const HoverPic = styled.img`
    :hover {
      opacity: 80%;
      cursor: pointer;
    }
  `;

  return (
    <Container style={container}>
      <h1 style={tagline}>
        EXPLORING NATURE'S BEAUTY ONE BRUSH STROKE AT A TIME
      </h1>
      <hr style={line}></hr>
      <div>
        <h1 style={tagline}>COLLECTIONS</h1>
      </div>

      <Row style={topRow}>
        <Link to="/flowers" style={{ textDecoration: "none" }}>
          <img style={photo} src={flowers} />
        </Link>
        <Link to="/scenes" style={{ textDecoration: "none" }}>
          <img style={photo} src={gorge} />
        </Link>
        <Link to="/stones" style={{ textDecoration: "none" }}>
          <img style={photo} src={ruby} />
        </Link>
      </Row>
      <br />
      <div style={bottomRow}>
        <Link to="/Feathers" style={{ textDecoration: "none" }}>
          <img style={pic} src={gathering} />
        </Link>

        <Link to="/fun" style={{ textDecoration: "none" }}>
          <img style={pic} src={jewel} />
        </Link>
      </div>
    </Container>
  );
}

export default Collections;
