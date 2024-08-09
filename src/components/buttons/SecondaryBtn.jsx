import React from "react";
import PropTypes from "prop-types";
import "./buttons.css";

const SecondaryBtn = (props) => {
  return (
    <button
      style={{
        padding: props?.padding,
        backgroundColor: props?.bgColor,
        color: props?.color,
        border: props?.border,
      }}
      className="secondary-btn"
    >
      {props?.name}
      {props?.logo && <div className="btn-logo">{props?.logo}</div>}
    </button>
  );
};

SecondaryBtn.propTypes = {
  name: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
export default SecondaryBtn;
