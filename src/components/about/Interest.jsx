import React from "react";
import { BsInstagram, BsArrowRightShort } from "react-icons/bs";
import { FaGoodreads } from "react-icons/fa";
import { GoBookmark } from "react-icons/go";
import { RiRunLine } from "react-icons/ri";

function Interest() {
  return (
    <div className="interest_sections">
      <div className="journey_content">
        <div className="journey_data">
          <div>
            <h3 className="journey_title">Photography</h3>
            <a
              className="journey_subtitle"
              href="https://www.instagram.com/thaonhi.jin/"
              target="_blank"
            >
              <BsInstagram className="icon" />
              Instagram
              <BsArrowRightShort className="icon" />
            </a>
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
            <h3 className="journey_title">Philosophy, Psychology</h3>
            <a
              className="journey_subtitle"
              href="https://www.goodreads.com/user/show/149646101-th-o-nhi"
              target="_blank"
            >
              <FaGoodreads className="icon" />
              Goodreads
              <BsArrowRightShort className="icon" />
            </a>
            <a
              className="journey_subtitle"
              href="https://ybox.vn/profile/doan249dy5/posts"
              target="_blank"
            >
              <GoBookmark />
              Ybox Posts
              <BsArrowRightShort className="icon" />
            </a>
          </div>
        </div>

        <div className="journey_data">
          <div>
            <h3 className="journey_title">Walking</h3>
            <a
              className="journey_subtitle"
              href="https://runkeeper.com/user/3667824714/profile"
              target="_blank"
            >
              <RiRunLine className="icon" />
              RunKeeper
              <BsArrowRightShort className="icon" />
            </a>
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
            <h3 className="journey_title">Watching movies</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interest;
