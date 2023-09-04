import React from "react";
import "../Button/Button.scss";
import { NavLink } from "react-router-dom";

type ButtonProps = {
    href:string;
    value:string;
}

const Button = ({href, value}:ButtonProps) => {
  return <div className="button">
    <NavLink to={href} className="btn" id="button__icon">{value}</NavLink>
  </div>;
};

export default Button;
