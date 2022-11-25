import React from "react";
import "../Styles/Components/Menu.scss";
import logo from "../Images/logo.png";
import avatar from "../Images/avatarW.gif";
import experience from "../Images/xp.gif";
import work from "../Images/work.gif";
import mail from "../Images/mail.gif";
import doc from "../Images/document.gif";

const Menu = () => {
  return (
    <div className="menu">
      <a href="/">
        <img src={logo} alt="" className="logo" />
      </a>
      <ul>
        <img src={avatar} alt="" width={"50px"} />
        <li>
          <a href="#about">About</a>
        </li>
        <img src={experience} alt="" width={"50px"} />
        <li>
          <a href="#experience">Experience</a>
        </li>
        <img src={work} alt="" width={"50px"} />
        <li>
          <a href="#work">Work</a>
        </li>
        <img src={mail} alt="" width={"50px"} />
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a className="resumeBtn" href="/cv">
        <img src={doc} alt="" width={"40px"} />
        Resume
      </a>
    </div>
  );
};

export default Menu;
