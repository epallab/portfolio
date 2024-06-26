import React from "react";
import PropTypes from "prop-types";

const PrimaryBtn = (props) => {
  return <button>{props?.name}</button>;
};

PrimaryBtn.propTypes = {
  name: PropTypes.string.isRequired,
};
export default PrimaryBtn;
