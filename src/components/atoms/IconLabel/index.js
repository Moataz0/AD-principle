import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconLabel = ({ text, className, icon }) => {
  return (
    <>
      <FontAwesomeIcon icon={icon} />
      <span className={className}>{text}</span>
    </>
  );
};

IconLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default IconLabel;
