import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../..";
import Label from "../../atoms/Label";
import "./style.css";
const Nav = ({}) => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Label text="travware" />

        <div className="navItems">
          <Button text="Register" className="button_style"/>
          <Button text="Login" className="button_style"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
