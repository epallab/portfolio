import React from "react";
import PropTypes from "prop-types";
import "./buttons.css";

const PrimaryBtn = (props) => {
  return (
    <button style={{ padding: props?.padding }} className="primary-btn">
      {props?.name}
    </button>
  );
};

PrimaryBtn.propTypes = {
  name: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
};
export default PrimaryBtn;
