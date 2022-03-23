import React, { useState, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { JobApplication } from '../../Interfaces/JobApplication';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import emailjs from '@emailjs/browser';

const TempSendEmail: React.FC = () => {
  const [popupActive, setPopupActive] = useState(false);

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

  const toggleFunction = () => {
    if (popupActive === true) {
      setPopupActive(false);
    } else {
      setPopupActive(true);
    }
  };

  return (
    <div className="applyToJob">
      <Button
        className="outlined"
        text="Apply now"
        onClick={toggleFunction}
      ></Button>
      {popupActive ? (
        <div className="popupForm">
          <div className="formDiv">
            <FormProvider {...methods}>
              <h2 className="formTitle">Fill your application</h2>
              <form ref={form} onSubmit={onSubmit}>
                <label>Enter your full name</label>
                <InputTextField
                  type="text"
                  {...register('fullName')}
                ></InputTextField>
                <label>Enter your email here</label>
                <InputTextField
                  type="text"
                  {...register('email')}
                ></InputTextField>
                <label>Tell us a bit more about yourself</label>
                <textarea {...register('presentation')}></textarea>
                <input type="submit" value="Send"></input>
              </form>
            </FormProvider>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export { TempSendEmail };
