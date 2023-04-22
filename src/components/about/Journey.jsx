import React from "react";
import { BsCalendar2Check } from "react-icons/bs";

function Journey() {
  return (
    <div className="journey_sections">
      <div className="journey_content">
        <div className="journey_data">
          <div>
            <h3 className="journey_title">
              Computer Science - HCM University of Technology
            </h3>
            <span className="journey_subtitle">Bachelor's Degree</span>
            <div className="journey_calendar">
              <BsCalendar2Check /> 2020 - Present
            </div>
          </div>
          <div>
            <span className="journey_rounder"></span>
            <span className="journey_line"></span>
          </div>
        </div>

        <div className="journey_data">
          <div></div>
          <div>
            <span className="journey_rounder"></span>
            <span className="journey_line"></span>
          </div>

          <div>
            <h3 className="journey_title">Big Data Club - HPC Lab</h3>
            <span className="journey_subtitle">Executive Board Member</span>
            <div className="journey_calendar">
              <BsCalendar2Check /> 2021 - Present
            </div>
          </div>
        </div>

        <div className="journey_data">
          <div>
            <h3 className="journey_title">Tam Ly Hoc Tuoi Tre - YBOX</h3>
            <span className="journey_subtitle">Translator</span>
            <div className="journey_calendar">
              <BsCalendar2Check /> 2023 - Present
            </div>
          </div>
          <div>
            <span className="journey_rounder"></span>
            <span className="journey_line"></span>
          </div>
        </div>

        <div className="journey_data">
          <div></div>
          <div>
            <span className="journey_rounder"></span>
            <span className="journey_line"></span>
          </div>

          <div>
            <h3 className="journey_title">Taekwondo UIT</h3>
            <span className="journey_subtitle">Member</span>
            <div className="journey_calendar">
              <BsCalendar2Check /> 2023 - Present
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
