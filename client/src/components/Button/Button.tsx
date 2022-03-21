import clsx from 'clsx';
import React from 'react';
import './Button.css';

interface Props {
  text: string;
  className: 'outlined' | 'contained';
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({text, className, ...props}) => {
  return (
    <button {...props} className={clsx(className)}>{text}</button>
  )
}

export { Button }