import React, { useEffect } from 'react';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import { FormProvider, useForm } from 'react-hook-form';
import { User } from '../../Interfaces/User';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';

const JobSeekerForm: React.FC = () => {
  const methods = useForm<User>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const { user, createJobSeeker } = useUserContext();
  const navigate = useNavigate();
  const { handleSubmit } = methods;

  useEffect(() => {
    user && navigate('/');
  }, [user, navigate])

  const onSubmit = handleSubmit(createJobSeeker);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <div className="SignUp-inputs Employee">
          <InputTextField 
            name="firstName"
            label="First Name" 
            placeholder="First name" 
            required
          />
          <InputTextField 
            name="lastName"
            label="Last Name" 
            placeholder="Last name" 
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

export { JobSeekerForm };
