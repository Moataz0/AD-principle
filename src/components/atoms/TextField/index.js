import React from "react";
import "./style.css";
import PropTypes from "prop-types";

const TextField = ({ type, placeholder, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="textFieldStyle"
    />
  );
};

TextField.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
export default TextField;
