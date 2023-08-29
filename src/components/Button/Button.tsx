import React from "react";
import "../Button/Button.scss";

type ButtonProps = {
    href:string;
    value:string;
}

const Button = ({href, value}:ButtonProps) => {
  return <div className="button">
    <a href={href} className="btn" id="button__icon">{value}</a>
  </div>;
};

export default Button;
