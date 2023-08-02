import React from "react";
import LoadingButton from "../../helpers/LoadingButton/LoadingButton";
import "./Button.scss";


type ButtonProps = {
value:string,
type?: 'button' | 'submit' | 'reset';
}

const Button = ({value, type }:ButtonProps) => {
  return <LoadingButton className="button" type={type} >{value}</LoadingButton>;
};

export default Button;
