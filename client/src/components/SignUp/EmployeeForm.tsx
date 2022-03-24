import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../services/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import { FormProvider, useForm } from 'react-hook-form';
import { User } from '../../Interfaces/User';
import { useNavigate } from 'react-router-dom';

const EmployeeForm: React.FC = () => {
  const methods = useForm<User>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });
  const navigate = useNavigate();
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      ).then((cred) => {
        const user = {
          firstName: data.firstName,
          lastName: data.lastName,
          initials:
            data.firstName[0].toUpperCase() + data.lastName[0].toUpperCase(),
          id: cred.user.uid,
        };
        setDoc(doc(db, 'users', user.id), user);
        navigate('/home');
      });
    } catch (error) {
      console.log(error);
    }
  });

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
        <Button variant="contained" text="Sign Up" />
      </form>
    </FormProvider>
  );
};

export default EmployeeForm;
