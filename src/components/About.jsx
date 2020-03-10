import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import brandy from "./Assets/brandy.jpg";

function About() {
  const container = {
    fontFamily: "'Julius Sans One', sans-serif",
    color: "#2f2f2d",
    width: "100%",
    height: "73vh"
  };

  const photo = {
    width: "50%",
    float: "right"
  };

  const title = {
    marginBottom: "5%"
  };

  const text = {
    float: "left",
    width: "40%",
    textAlign: "center",
    marginLeft: "5%"
  };

  return (
    <div style={container}>
      <h1 style={title}>About</h1>
      <img style={photo} src={brandy} />
      <p style={text}>
        Brandy is and amazing artist, and even more amazing person. She does
        everything better than you. I know. You're jealous. And you should be.
      </p>
    </div>
  );
}

export default About;
