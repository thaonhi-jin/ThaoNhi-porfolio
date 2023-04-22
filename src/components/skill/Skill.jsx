import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

import "./Skill.css";

function Skill() {
  return (
    <section id="skill">
      <h2>Skills</h2>
      {/* Skills */}
      <h5>What skills I have</h5>
      <div className="container skill_container">
        {/* UI/UX Design */}
        <div className="skill_design">
          <h3>UI/UX Design</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>Prototyping</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>Wireframing</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>Mockups</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>Figma tool</h4>
            </article>
          </div>
        </div>

        {/* Web Development */}
        <div className="skill_dev">
          <h3>Web Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>ReactJS</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>PHP, MySQL, AJAX</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>Restful Service, WebAPIs</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>Git/Github</h4>
            </article>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skill_soft">
          <h3>Soft skills</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>Agile/Scrum</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>Problem Solving</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>Presentation</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>Research</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>Time management</h4>
            </article>
            <article className="skill_details">
              <BsFillCheckCircleFill className="skill_details-icon" />
              <h4>English Reading</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
