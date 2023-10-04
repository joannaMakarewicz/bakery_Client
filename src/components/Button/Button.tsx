import React from "react";
import { NavLink } from "react-router-dom";
import "../Button/Button.scss";

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
