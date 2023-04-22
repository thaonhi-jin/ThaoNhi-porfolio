import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";

function HeaderSocial() {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/th%E1%BA%A3o-nhi-0a3b15194/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/thaonhi-jin" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/ThaoNhiFiNe" target="_blank">
        <GrFacebook />
      </a>
      <a href="https://www.instagram.com/thaonhi.jin/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeaderSocial;
