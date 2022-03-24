import clsx from "clsx";
import React from "react";
import "./Button.css";

interface Props {
  text: string
  className?: string
  variant?: "outlined" | "contained" 
  size?: 'small' | 'medium'
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  icon?: React.ReactNode
}

const Button: React.FC<Props> = ({ text, className, variant = 'contained', size = 'medium', onClick, icon, ...props }) => {
  return (
    <button {...props} className={clsx(className, variant, size, { 'with-icon' : !!icon })} onClick={onClick}>
       {icon}{text}
    </button>
  );
};


export { Button };
