import React from "react";
import "./About.css";
import "../home/Home.css";
import dp from "../../assets/dp.png";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-left">
        <img className="profile-img" src={dp} alt="" />
      </div>
      <div className="about-right"></div>
    </div>
  );
};

export default About;
