import React from "react";
import PropTypes from "prop-types";
import "./buttons.css";

const PrimaryBtn = (props) => {
  return (
    <button
      onClick={props?.onClick}
      style={{
        padding: props?.padding,
        backgroundColor: props?.bgColor,
        color: props?.color,
        border: props?.border,
      }}
      className="primary-btn"
    >
      {props?.name}
      {props?.logo && <div className="btn-logo">{props?.logo}</div>}
    </button>
  );
};

PrimaryBtn.propTypes = {
  name: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default PrimaryBtn;
