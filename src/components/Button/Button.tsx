import React from "react";
import ReactButton from "react-bootstrap/Button";
import "./Button.scss";


type ButtonProps = {
buttonName:string,
type?: 'button' | 'submit' | 'reset';
}

const Button = ({buttonName, type }:ButtonProps) => {
  return <ReactButton className="button" type={type} >{buttonName}</ReactButton>;
};

export default Button;
