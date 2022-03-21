import clsx from 'clsx';
import React from 'react';
import './Button.css';

interface Props {
  text: string;
  className: 'outlined' | 'contained';
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode
}

const Button: React.FC<Props> = ({text, className, icon, ...props}) => {
  return (
    <button 
      {...props} 
      className={clsx(className, {'with-icon' : !!icon})}
    >
      {icon}{text}
    </button>
  )
}

export { Button }