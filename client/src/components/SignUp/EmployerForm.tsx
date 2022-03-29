import React, { useEffect } from 'react';
import { InputTextField } from '../InputTextField/InputTextField';
import { Button } from '../Button/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { User } from '../../Interfaces/User';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import './SignUp.css'

const EmployerForm: React.FC = () => {
  const methods = useForm<User & { companyName: string }>({
    defaultValues: {
      companyName: '',
      email: '',
      password: '',
    },
  });

  const { user, createEmployer } = useUserContext();
  const navigate = useNavigate();
  const { handleSubmit } = methods;

  useEffect(()=>{
    user && navigate('/home')
  }, [user, navigate])

  const onSubmit = handleSubmit(createEmployer);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <div className="SignUp-inputs">
          <InputTextField
            name="companyName"
            label= "Company Name"
            placeholder="Company name"
            required
          />
          <InputTextField
            name="email"
            type="email"
            label="Email"
            placeholder="Email"
            required
          />
          <InputTextField
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            required
          />
        </div>
        <Button text="Sign Up" />
      </form>
    </FormProvider>
  );
};

export { EmployerForm };
