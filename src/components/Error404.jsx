import React from "react";
import { Link } from "react-router-dom";
import suarez from "./Assets/suarez.jpg";

function Error404() {
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
    width: "85%"
  };

  return (
    <div style={container}>
      <h2>The page you are looking for does not exist!</h2>
      <h3>
        Would you like to return <Link to="/">home</Link> instead?
      </h3>
      <img style={photo} src={suarez} />
    </div>
  );
}

export default Error404;
