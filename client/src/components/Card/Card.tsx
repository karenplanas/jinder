import clsx from "clsx";
import React from "react";
import "./Card.css";

interface Props {
  className?: string
  onClick?: (args: unknown) => unknown
}

const Card: React.FC<Props> = ({ className, children, onClick }) => {
  return (
    <div className={clsx("Card", className)} onClick={onClick} >
      { children }
    </div>
  );
};


export { Card };
