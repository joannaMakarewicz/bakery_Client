import React from "react";
import "../LoadingButton/LoadingButton.scss";

const LoadingButton = (props: any) => {
  const className = props.className || "loadingButton__icon";

  const buttonProps = { ...props };
  delete buttonProps.loading;
  return props.loading ? (
    <div className="loadingButton">
      <button className={`btn ${className}`} type="button" disabled>
        <span
          className="spinner-border spinner-border-sm me-2"
          role="status"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Loading...</span>
      </button>
    </div>
  ) : (
    <div className="loadingButton">
    <button {...buttonProps} className={`btn ${className}`}>
      {props.children}
    </button>
    </div>

  );
};

export default LoadingButton;
