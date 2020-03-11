import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import styled from "styled-components";

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
    width: "80%"
  };
  return (
    <div style={container}>
      <h1>Flowers</h1>
    </div>
  );
}

export default Flowers;
