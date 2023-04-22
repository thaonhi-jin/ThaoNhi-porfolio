import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsTelephoneFill,
  BsSend,
} from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qqyge6f",
        "template_kxrmsws",
        form.current,
        "tWWCDabZT_YQ6sQP_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h2>Contact me</h2>
      <h5>Get In Touch</h5>

      <div className="container contact_container">
        <div className="contact_info">
          <h3>Contact me here</h3>
          <div className="contact_info-items">
            <p>
              <GoLocation className="icon" />
              HCMC National University Dormitory Zone A
            </p>
            <p>
              <MdEmail className="icon" />
              nhi.doankhmt20@hcmut.edu.vn
            </p>
            <p>
              <FaUniversity className="icon" />
              HCM University of Technology - HCMUT
            </p>
            <p>
              <BsTelephoneFill className="icon" />
              0964175739
            </p>
          </div>
          <div className="contact_info-social">
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
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="enail" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send <BsSend />
          </button>
        </form>
      </div>

      <div className="footer"></div>
    </section>
  );
}

export default Contact;
