import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Service.css";

function Service() {
  return (
    <section id="services">
      {/* Services */}
      <h2>Services</h2>
      <h5>What I can do</h5>
      <div className="container services_container">
        {/* UI/UX Design */}
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Creating wireframes, prototypes, mockups, user flows.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Designing with Figma.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Knowledge of UX.</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Have worked with Javascript framework (Reactjs), libraries
                (Jquery), CSS framework (Bootstrap).
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Develop front-end web application using HTML, CSS and
                JavaScript, ReactJS (Projects in University).
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Basic knowledge of PHP, MySQL, AJAX, Restful Service, WebAPIs.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Have worked with a source version control - Git/Github.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Have worked with web debugging tools.</p>
            </li>
          </ul>
        </article>

        {/* Soft skills */}
        <article className="service">
          <div className="service_head">
            <h3>Soft skills</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Collaborate within an Agile/Scrum team structure.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Have problem solving, presentation, research, time management
                skill.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>English Reading skill: TOEIC Listening and Reading: 690.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Service;
