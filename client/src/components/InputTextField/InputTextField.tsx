import React, { ChangeEvent } from 'react'
import clsx from 'clsx'
import { useFormContext } from 'react-hook-form';
import './InputTextField.css'

interface Props {
  label?: string;  
  placeholder?: string;
  name: string;
  className?: string;
  type?: string;
  rows?: number
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number
}

const InputTextField: React.FC<Props> = ({label, placeholder, name, className, rows, type='text', ...props}) => {
  const { register } = useFormContext();
  return (
    <div className={clsx(className, 'InputTextField')}>
      {label && <label htmlFor={name}>{label}</label>}
      { type === 'textarea' ? 
        <textarea 
          {...props} 
          rows={rows}
          placeholder={placeholder}
          {...register(name)}
        /> :
        <input 
          {...props} 
          placeholder={placeholder}
          type={type}
          {...register(name)}
        />
      }
    </div>
  )
}

export { InputTextField }