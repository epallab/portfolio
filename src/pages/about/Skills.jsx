import React, { useState } from "react";

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
        <div>
          <label
            style={{ color: "var(--primary-color)", fontWeight: 600 }}
            htmlFor="mern"
          >
            MERN Stack
          </label>
          <input
            className="skill-inp-range"
            type="range"
            name="mern"
            id=""
            min={1}
            value={90}
            max={100}
          />
          <label
            style={{ color: "var(--primary-color)", fontWeight: 600 }}
            htmlFor="mern"
          >
            React JS Frontend
          </label>
          <input
            className="skill-inp-range"
            type="range"
            name="mern"
            id=""
            min={1}
            value={96}
            max={100}
          />
          <label
            style={{ color: "var(--primary-color)", fontWeight: 600 }}
            htmlFor="mern"
          >
            Node JS Backend
          </label>
          <input
            className="skill-inp-range"
            type="range"
            name="mern"
            id=""
            min={1}
            value={80}
            max={100}
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
