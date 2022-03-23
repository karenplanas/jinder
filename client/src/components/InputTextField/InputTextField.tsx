import React from "react";
import clsx from "clsx";
import "./InputTextField.css";
// import { useFormContext } from 'react-hook-form';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  placeholder?: string;
  name?: string;
  className?: string;
  type?: string;
}

const InputTextField: React.FC<Props> = ({
  label,
  placeholder,
  name,
  className,
  type,
  ...props
}) => {
  // const { register } = useFormContext();
  return (
    <div className={clsx(className, "InputTextField")}>
      <label htmlFor={name}>{label}</label>
      <input {...props} placeholder={placeholder} name={name} type={type} />
    </div>
  );
};

export { InputTextField };
