import React from "react";
import LoadingButton from "../../helpers/LoadingButton/LoadingButton";
import "./Button.scss";

type ButtonProps = {
  value: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({ value, type }: ButtonProps) => {
  return (
    <div className="button">
      <LoadingButton className="button__icon" type={type}>
        {value}
      </LoadingButton>
    </div>
  );
};

export default Button;
