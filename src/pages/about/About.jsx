import React from "react";
import "./About.css";
import "../home/Home.css";
import dp from "../../assets/dp.png";
import { personalDetails } from "../../utilities/Data";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-left">
        <img className="profile-img" src={dp} alt="" />
      </div>
      <div className="about-right">
        <p
          style={{
            color: "var(--secondary-color)",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          About Me
        </p>
        <h1 style={{ color: "var(--secondary-color)" }}>2 Year's Experience</h1>
        <h1 style={{ color: "var(--primary-color)", marginBottom: "20px" }}>
          on Full Stack Development
        </h1>
        <p style={{ color: "var(--primary-color)", marginBottom: "10px" }}>
          {personalDetails?.introB}
        </p>
        <Skills />
      </div>
    </div>
  );
};

export default About;
