import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import { FaEtsy } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  const container = {
    width: "100%",
    height: "20%",
    marginTop: "90%"
  };

  const left = {
    width: "50%",
    float: "left",
    textAlign: "left",
    marginLeft: "5%"
  };

  const icons = {
    float: "right",
    width: "50%",
    textAlign: "center",
    marginBottom: "5%"
  };

  const icon = {};

  return (
    <div style={container}>
      <h5 style={left}>Copyright Brandy Idsinga 2020</h5>
      <div style={icons}>
        <FaEtsy style={icon}></FaEtsy>
        <FaFacebookSquare style={icon}></FaFacebookSquare>
        <FaInstagram style={icon}></FaInstagram>
      </div>
    </div>
  );
}

export default Footer;
