import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AppLayout } from "../AppLayout/AppLayout";
import { Button } from "../Button/Button";
import { InputTextField } from "../InputTextField/InputTextField";

const EmployerProfile: React.FC = () => {
  const methods = useForm({
    defaultValues: {
      companyname: "",
      companysize: "",
      domain: "",
      description: "",
      logo: "",
      // rating: "",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data); //TODO create Employer Profile
  });

  return (
    <AppLayout title="My Profile">
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div className="Inputs-Card">
            <div className="title">
              <h3>Company Profile</h3>
            </div>
            <div className="inputRow">
              <InputTextField name="companyname" label="Company Name*" />
              <InputTextField type="number" name="companysize" label="Size*" />
            </div>
            <InputTextField name="domain" label="Domain*" />
            <div className="inputRow">
              <InputTextField name="city" label="City" />
              <InputTextField name="state" label="State" />
              <InputTextField name="country" label="Country" />
            </div>
            <InputTextField name="description" label="Description" />
            <InputTextField name="logo" label="Logo" />
            {/* <div className="inputRow">
              <InputTextField name="rating" label="Rating" />
            </div> */}
            <div>
              <Button text="Submit" type="submit" />
            </div>
          </div>
        </form>
      </FormProvider>
    </AppLayout>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default EmployerProfile;
