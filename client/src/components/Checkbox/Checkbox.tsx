import React from 'react';
import clsx from 'clsx';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import './Checkbox.css';

interface Props extends RegisterOptions {
  label?: string;
  name: string;
  className?: string;
  value: string;
}

const Checkbox: React.FC<Props> = ({
  label,
  name,
  className,
  value,
  ...registerProps
}) => {
  const { register } = useFormContext();

  return (
    <div className={clsx(className, 'Checkbox')}>
      <input type="checkbox" value={value} {...register(name, registerProps)} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export { Checkbox };
