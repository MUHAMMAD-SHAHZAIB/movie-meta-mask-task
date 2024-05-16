import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor,
  textColor = "text-white",
  className,
  ...props
}) => (
  <button
    className={` font-poppins font-medium text-[16px]  rounded-full outline-none ${bgColor} ${textColor} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
