import React from "react";
import "./button.scss";

export const Button = ({ type, color, children, ...rest }) => {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
};
