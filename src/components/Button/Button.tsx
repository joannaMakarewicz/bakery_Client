import React from "react";
import { NavLink } from "react-router-dom";
import "../Button/Button.scss";

type ButtonProps = {
  value: string;
  href?: string;
  setInfo?: any;
};

const Button = ({ href = "/", value, setInfo }: ButtonProps) => {
  return (
    <div className="button">
      {value !== "Wycena" ? (
        <NavLink to={href} className="btn" id="button__icon">
          {value}
        </NavLink>
      ) : (
        <button onClick={setInfo} className="btn" id="button__icon">
          {value}
        </button>
      )}
    </div>
  );
};

export default Button;
