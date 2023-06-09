import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/img4.png";
import HeaderSocial from "./HeaderSocial";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Thảo Nhi</h1>
        <h5 className="text-light">Frontend Intern</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
