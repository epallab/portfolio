import React from "react";
import dp from "../../assets/dp.png";
import "./Home.css";
import { personalDetails } from "../../utilities/Data";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import SecondaryBtn from "../../components/buttons/SecondaryBtn";
import { FiDownload } from "react-icons/fi";
import Tech from "./Tech";

const Home = () => {
  return (
    <>
      <div className="home-main">
        <div className="home-left">
          <div className="home-details">
            <h4 style={{ color: "var(--primary-color)", marginBottom: "10px" }}>
              Welcome to my Portfolio
            </h4>
            <h1 className="home-h1">Hi I'm</h1>
            <h1 className="home-h1" style={{ color: "var(--secondary-color)" }}>
              {personalDetails?.name} 👋
            </h1>
            <h1 className="home-h1">{personalDetails?.role}</h1>
            <h2 style={{ color: "var(--secondary-color)" }}>
              {personalDetails?.tech}
            </h2>
            <p style={{ color: "var(--text-color-gray)", marginTop: "10px" }}>
              {personalDetails?.intro}
            </p>
            <div className="home-btns">
              <PrimaryBtn
                name={"Hire Me"}
                padding={"8px 0px"}
                bgColor={"var(--secondary-color)"}
                color={"white"}
                border={"1.5px solid var(--secondary-color) "}
              />
              <SecondaryBtn
                name={"Download CV"}
                padding={"8px 0px"}
                bgColor={"var(--background-color)"}
                color={"var(--secondary-color)"}
                border={"1.5px solid var(--secondary-color) "}
                logo={<FiDownload />}
                onClick={() => window?.open("/files/resume.pdf", "_blank")}
              />
            </div>
          </div>
        </div>
        <div className="home-right">
          <img className="profile-img" src={dp} alt="" />
        </div>
      </div>
      <div className="skills-main">
        <p
          style={{
            textAlign: "center",
            color: "var(--secondary-color)",
            fontSize: "1em",
            fontWeight: "600",
          }}
        >
          Skills
        </p>
        <p style={{ textAlign: "center", color: "var(--text-color-gray)" }}>
          The skills, tools, and technologies I excel in
        </p>
        <div className="tech-container">
          <Tech />
        </div>
      </div>
    </>
  );
};

export default Home;
