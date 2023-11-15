import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-400",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`py-4 px-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
