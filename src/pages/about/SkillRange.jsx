import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SkillRange = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = props?.value;
    const duration = 500;
    const increment = end / (duration / 10);

    const animate = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(animate);
      }
      setValue(Math.ceil(start));
    }, 10);

    return () => clearInterval(animate);
  }, [props?.value]);

  return (
    <div>
      <label
        style={{ color: "var(--primary-color)", fontWeight: 600 }}
        htmlFor={props?.id}
      >
        {props?.label}
      </label>
      <input
        className="skill-inp-range"
        type="range"
        name={props?.id}
        id={props?.id}
        min={1}
        value={value}
        max={100}
        readOnly
      />
    </div>
  );
};

SkillRange.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SkillRange;
