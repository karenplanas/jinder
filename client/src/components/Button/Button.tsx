import clsx from "clsx";
import React from "react";
import "./Button.css";

interface Props {
  text: string;
  className: "outlined" | "contained" | "list";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  className,
  onClick,
  icon,
  disabled = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(className, { "with-icon": !!icon })}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {text}
    </button>
  );
};

export { Button };
