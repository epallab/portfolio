import React from "react";
import { skils } from "../../utilities/Data";
import "./Home.css";

const Tech = () => {
  return (
    <>
      {skils?.map((item) => (
        <div className="skills-card" key={item?.url}>
          <img src={item.logo} alt="" />
          <p>{item?.label}</p>
        </div>
      ))}
    </>
  );
};

export default Tech;
