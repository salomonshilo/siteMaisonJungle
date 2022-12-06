
import React from 'react'
import '../styles/Banner.css'
import logo from "../assets/logo.png";

function Banner() {
  return (
      <div className="lmj_banner">
          <img src={logo} alt = 'La maison jungle' className='lmj-logo' />
      <h1 className='lmj-title'>La maison jungle</h1>
    </div>
  );
}

export default Banner