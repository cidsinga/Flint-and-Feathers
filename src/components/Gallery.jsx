import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";

function Gallery() {
  const container = {
    width: "100%",
    height: "77vh",
    display: "inline-block",
    fontFamily: "'Julius Sans One', sans-serif",
    color: "#2f2f2d"
  };

  const tagline = {
    marginTop: "2%"
  };

  return (
    <div style={container}>
      <div>
        <h1 style={tagline}>Gallery</h1>
      </div>
    </div>
  );
}
export default Gallery;
