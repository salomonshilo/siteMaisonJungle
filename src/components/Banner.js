
import React from 'react'
import '../styles/Banner.css'
import logo from "../assets/logo.png";

const title = 'la maison jungle'

function Banner() {
  return (
    <div className="lmj_banner">
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <h1 className="lmj-title">{title} </h1>
    </div>
  );
}

export default Banner