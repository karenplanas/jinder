import React, { useState, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { JobApplication } from "../../Interfaces/JobApplication";
import { Button } from "../Button/Button";
import { InputTextField } from "../InputTextField/InputTextField";
import emailjs from "@emailjs/browser";
import "./TempSendEmail.css";
import { Favourite } from "../../Interfaces/favourite";
import { addApplied } from "../../services/api-client";

interface Props {
  setState: (state: boolean) => void;
  setApply: (state: boolean) => void;
  data: Favourite;
}

const TempSendEmail: React.FC<Props> = ({ setState, setApply, data }) => {
  const methods = useForm<JobApplication>({
    defaultValues: {
      fullName: "",
      email: "",
      presentation: "",
    },
  });

  const { handleSubmit, register } = methods;
  const form: any = useRef();

  const onSubmit = handleSubmit(async () => {
    await emailjs
      .sendForm(
        "service_6dpyub7",
        "template_bynnpf4",
        form.current,
        "Gprq8Rn1ENhulWzq4"
      )
      .then(
        (result) => {
          setState(false);
          setApply(true);
          addApplied(data);

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  });

  return (
    <div className="popupForm">
      <FormProvider {...methods}>
        <h2 className="formTitle">Fill your application</h2>
        <form ref={form} onSubmit={onSubmit} className="formDiv">
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
  );
};

export { TempSendEmail };
