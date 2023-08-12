import React from "react";
import "./Navbar.css";
import Logo from "../ImagesAndIcones/Logo.jpg";
import { MdFileUpload } from 'react-icons/md';

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="navbar__logo">
        <img src={Logo} alt="nita logo" />
      </div>
      <div id="navbar___name">
        <h1>NITA EE 2024 ALBUM</h1>
      </div>
      <div id="navbar__upload">
      <a href="/upload"><MdFileUpload></MdFileUpload></a>
      </div>
      
    </div>
  );
};

export default Navbar;
