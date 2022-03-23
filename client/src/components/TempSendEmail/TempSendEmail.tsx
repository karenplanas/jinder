import React, { useState, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { JobApplication } from '../../Interfaces/JobApplication';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import emailjs from '@emailjs/browser';
import './TempSendEmail.css';

const TempSendEmail: React.FC = () => {


  const methods = useForm<JobApplication>({
    defaultValues: {
      fullName: '',
      email: '',
      presentation: '',
    },
  });

  const { handleSubmit, register } = methods;
  const form: any = useRef();

  const onSubmit = handleSubmit(async () => {
    await emailjs
      .sendForm(
        'service_6dpyub7',
        'template_bynnpf4',
        form.current,
        'Gprq8Rn1ENhulWzq4'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  });



  return (
        <div className="popupForm">
          <div className="formDiv">
            <FormProvider {...methods}>
              <h2 className="formTitle">Fill your application</h2>
              <form ref={form} onSubmit={onSubmit}>
                <InputTextField
                  label="Enter your full name"
                  name="fullName"
                ></InputTextField>
                <InputTextField
                  label="Enter your email here"
                  name="email"
                ></InputTextField>

                <InputTextField
                  name="presentation"
                  label="Tell us a bit more about yourself"
                  type="textarea"
                ></InputTextField>
                <Button type="submit" className="outlined" text="Submit" />
              </form>
            </FormProvider>
          </div>
        </div>
  );
};

export { TempSendEmail };
