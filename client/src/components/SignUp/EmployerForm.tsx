import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../services/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { InputTextField } from '../InputTextField/InputTextField';
import { Button } from '../Button/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { EmployerUser } from '../../Interfaces/EmployerUser';
import { useNavigate } from 'react-router-dom';

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
      });
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <InputTextField
          name="companyName"
          placeholder="Company name"
          required
        />
        <InputTextField
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <InputTextField
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button variant="contained" text="Sign Up" />
      </form>
    </FormProvider>
  );
};

export default EmployerForm;
