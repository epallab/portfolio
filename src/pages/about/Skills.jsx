import React, { useState } from "react";
import SkillRange from "./SkillRange";

const Skills = () => {
  const [tab, setTab] = useState(1);

  const handleClick = (id) => {
    setTab(id);
  };

  return (
    <>
      <div className="skills-btn-container">
        <button
          onClick={() => handleClick(1)}
          className={tab === 1 ? "skills-btn skills-btn-active" : "skills-btn"}
        >
          Main Skills
        </button>
        <button
          onClick={() => handleClick(2)}
          className={tab === 2 ? "skills-btn skills-btn-active" : "skills-btn"}
        >
          Awards
        </button>
        <button
          onClick={() => handleClick(3)}
          className={tab === 3 ? "skills-btn skills-btn-active" : "skills-btn"}
        >
          Education
        </button>
      </div>
      <div className="skills-details-container">
        {tab === 1 && (
          <div>
            <SkillRange value={90} label={"MERN Stack"} id={"mern"} />
            <SkillRange
              value={96}
              label={"React JS Frontend"}
              id={"react-frontend"}
            />
            <SkillRange
              value={80}
              label={"Node JS Backend"}
              id={"node-js-backend"}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Skills;
