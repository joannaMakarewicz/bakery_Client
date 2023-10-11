import React from "react";
import { NavLink } from "react-router-dom";
import "../Button/Button.scss";

type ButtonProps = {
  href: string;
  value: string;
  setInfo?: any;
};

const Button = ({ href, value, setInfo }: ButtonProps) => {
  return (
    <div className="button">
      {value === "Wycena" ? (
        <button onClick={setInfo} className="btn" id="button__icon">{value}</button>
      ) : (
        <NavLink to={href} className="btn" id="button__icon">
          {value}
        </NavLink>
      )}
    </div>
  );
};

export default Button;
