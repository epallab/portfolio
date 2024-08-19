import React from "react";
import { skils } from "../../utilities/Data";
import "./Home.css";

const Tech = () => {
  return (
    <>
      {skils?.map((item) => (
        <div className="skills-card" key={item?.url}>
          <a href={item?.url} target="_blank" rel="noreferrer">
            <img src={item.logo} alt="" />
          </a>
          <p>{item?.label}</p>
        </div>
      ))}
    </>
  );
};

export default Tech;
