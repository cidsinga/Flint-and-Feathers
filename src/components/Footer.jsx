import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";

function Footer() {
  const container = {
    width: "100%",
    height: "20%"
  };

  return (
    <div style={container}>
      <h5>Copyright Brandy Idsinga 2020</h5>
    </div>
  );
}

export default Footer;
