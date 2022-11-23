import React from "react";
import "../Styles/Components/Menu.scss";
import logo from '../Images/logo.png'

const Menu = () => {
  return (
    <div className="menu">
    <img src={logo} alt="" className="logo" />
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#"> Work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <a className="resumeBtn" href="#">Resume</a>
    </div>
  );
};

export default Menu;
