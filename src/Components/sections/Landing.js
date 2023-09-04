import React from "react";
import Button from "react-bootstrap/esm/Button";
import ViewOnScroll from "../motion";

export default function Landing() {
  return (
    <>
    <ViewOnScroll>
      <div className="landing">
        <div className="overlay"></div>
        <div className="landingText">
          <h1>NASA TEAM</h1>
          <p>
            Lorem Ipsum is containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsu
          </p>
          <button className="butn btn-1 hover-filled-slide-up">
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </ViewOnScroll>
    </>
  );
}
