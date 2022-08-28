import React from "react";
import {Label,TextField} from "../../";
import "./style.css";
import PropTypes from "prop-types";


const LabelInput = ({label,placeholder}) => {
  return (
    <div className="labeled_input">
      <Label text={label} />
      <TextField value="" placeholder={placeholder} type="text" />
    </div>
  );
};

LabelInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
export default LabelInput;
