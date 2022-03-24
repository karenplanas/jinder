import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../services/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { InputTextField } from '../InputTextField/InputTextField';
import { Button } from '../Button/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { EmployerUser } from '../../Interfaces/EmployerUser';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'

const EmployerForm: React.FC = () => {
  const methods = useForm<EmployerUser>({
    defaultValues: {
      companyName: '',
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
        const company = {
          companyName: data.companyName,
          id: cred.user.uid,
        };
        setDoc(doc(db, 'companuies', company.id), company);
        navigate('/home');
      });
    } catch (error) {
      console.log(error);
    }
  });
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

export default EmployerForm;
