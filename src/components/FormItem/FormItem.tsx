import React from "react";
import "./FormItem.scss";

type FormItemProps = {
  type?: string;
  id: string;
  name: string;
  placeholder: string;
  htmlFor: string;
  className: string;
  textarea: boolean;
  maxLength?: number;
};

const FormItem = ({
  id,
  name,
  placeholder,
  htmlFor,
  className,
  textarea,
  type,
  maxLength,
}: FormItemProps) => {
  return (
    <>
      {textarea ? (
        <textarea
          className={className}
          id={id}
          name={name}
          placeholder={placeholder}
          required
          maxLength={maxLength}
        />
      ) : (
        <>
          <label htmlFor={htmlFor}></label>
          <input
            type={type}
            className={className}
            id={id}
            name={name}
            aria-describedby="emailHelp"
            placeholder={placeholder}
            required
          />
        </>
      )}
    </>
  );
};

export default FormItem;
