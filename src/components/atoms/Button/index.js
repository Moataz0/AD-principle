import React from "react";
import "./style.css";
import PropTypes from "prop-types";

const Button = ({ text, disabled, className, onClick }) => {
  return (
    <button
      className={`${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
