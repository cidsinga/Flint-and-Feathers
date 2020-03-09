import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import flowers from "./Assets/flowersMock.jpg";

function Collections() {
  const container = {
    width: "100%",
    display: "inline-block",
    fontFamily: "'Julius Sans One', sans-serif",
    color: "#2f2f2d",
    fontSize: "20px"
  };

  const line = {
    width: "90%",
    marginTop: "2%",
    marginBottom: "2%"
  };

  const tagline = {
    fontSize: "24px",
    marginTop: "3%"
  };

  return (
    <div style={container}>
      <h1 style={tagline}>
        EXPLORING NATURE'S BEAUTY ONE BRUSH STROKE AT A TIME{" "}
      </h1>
      <hr style={line}></hr>
      <div>
        <h1 style={tagline}>COLLECTIONS</h1>
      </div>
      <div>
        <img src={flowers} />
      </div>
    </div>
  );
}

export default Collections;
