import React, { useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { JobApplication } from "../../Interfaces/JobApplication";
import { Button } from "../Button/Button";
import { InputTextField } from "../InputTextField/InputTextField";
import emailjs from "@emailjs/browser";
import { Favourite } from "../../Interfaces/favourite";
import { addApplied } from "../../services/api-client";
import { useUserContext } from "../../contexts/UserContext";
import "./ApplyToJob.css";
import { useAuthenticatedApiClient } from "../../services/authenticated-api-client";

interface Props {
  setState: (state: boolean) => void;
  setApply: (state: boolean) => void;
  data: Favourite;
}

const ApplyToJob: React.FC<Props> = ({ setState, setApply, data }) => {
  const methods = useForm<JobApplication>({
    defaultValues: {
      fullName: "",
      email: "",
      presentation: "",
    },
  });
  const { user } = useUserContext();
  const apiClient = useAuthenticatedApiClient();

  const { handleSubmit } = methods;
  const form: any = useRef();

  const onSubmit = handleSubmit(async (formData) => {
    apiClient.postJobApplication(data._id, formData)
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
          addApplied(data, user);
        },
        (error) => {
          console.error(error.text);
        }
      );
  });

  return (
    <div className="popUpForm">
      <FormProvider {...methods}>
        <div className="popUpForm-close-icon"><p onClick={() => setState(false)}>X</p></div>
        <h2 className="formTitle">Fill your application</h2>
        <form ref={form} onSubmit={onSubmit} className="formDiv">
          <InputTextField
            label="Full Name"
            name="fullName"
          ></InputTextField>
          <InputTextField
            label="Email"
            name="email"
          ></InputTextField>

          <InputTextField
            name="presentation"
            label="Tell us a bit more about yourself"
            type="textarea"
          ></InputTextField>
          <Button type="submit" className="contained ApplyToJob-button" text="Submit" />
        </form>
      </FormProvider>
    </div>
  );
};

export { ApplyToJob };
