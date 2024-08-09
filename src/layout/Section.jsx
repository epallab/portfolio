import React from "react";
import PropTypes from "prop-types";

const Section = ({ id, children }) => {
  return (
    <section id={id} name={id}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Section;
