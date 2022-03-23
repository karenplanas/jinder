import clsx from "clsx";
import React from "react";
import "./Button.css";

interface Props {
  text: string;
  className: "outlined" | "contained" ;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  icon?: React.ReactNode
}

const Button: React.FC<Props> = ({ text, className, onClick, icon, ...props }) => {
  return (
    <button {...props} className={clsx(className, {'with-icon' : !!icon})} onClick={onClick}>
       {icon}{text}
    </button>
  );
};


export { Button };
