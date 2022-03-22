import React from 'react'
import clsx from 'clsx'
import { useFormContext } from 'react-hook-form';
import './InputTextField.css'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;  
  placeholder?: string;
  name: string;
  className?: string;
  type?: string;
}

const InputTextField: React.FC<Props> = ({label, placeholder, name, className, type, ...props}) => {
  const { register } = useFormContext();
  return (
    <div className={clsx(className, 'InputTextField')}>
      {label && <label htmlFor={name}>{label}</label>}
      <input 
        {...props} 
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
    </div>
  )
}

export { InputTextField }