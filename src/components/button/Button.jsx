import React from "react";
import "./Button.scss";

export const Button = ({ children, variant, ...rest }) => {
  return (
    <button
      {...rest}
      className={`button ${variant === "outlined" ? "outlined" : ""}`}
    >
      {children}
    </button>
  );
};
