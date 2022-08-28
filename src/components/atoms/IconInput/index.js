import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconInput = ({
  icon,
  iconStyle,
  type,
  placeholder,
  className,
  handleChange,
}) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} className={iconStyle} />
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={handleChange}
      />
    </div>
  );
};

export default IconInput;
