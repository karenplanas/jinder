import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAuthenticatedApiClient } from "../../services/authenticated-api-client";
import { AppLayout } from "../AppLayout/AppLayout";
import { Button } from "../Button/Button";
import { Camera } from "../icons/Camera";
import { InputTextField } from "../InputTextField/InputTextField";
import './EmployerProfile.css'

const EmployerProfile: React.FC = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const apiClient = useAuthenticatedApiClient()

  const fetchEmployerProfile = async () => {
    const employerProfile = await apiClient.getEmployerProfile();
    methods.reset(employerProfile)
  }

  useEffect(()=>{
    fetchEmployerProfile();
  }, [])

  const onSubmit = handleSubmit(async (data) => {
    apiClient.postEmployerProfile(data);
  });

  return (
    <AppLayout title="My Profile">
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div className="EmployerProfile-card Inputs-Card">
            <div>
              <InputTextField name="companyName" label="Company Name*" />
            </div>
            <div className="inputRow">
              <InputTextField type="number" name="companySize.min" label="Size Min*" />
              <InputTextField type="number" name="companySize.max" label="Size Max*" />
            </div>
            <InputTextField name="domain" label="Domain*" />
            <InputTextField name="address.city" label="City" />
            <div className="inputRow">
              <InputTextField name="address.state" label="State" />
              <InputTextField name="address.country" label="Country" />
            </div>
            <InputTextField name="description" label="Description" type="textarea"/>
            <Button icon={<Camera />} text='Upload' variant="outlined"/>
            <div className='EmployerProfile-button'>
              <Button text="Submit" type="submit" />
            </div>
          </div>
        </form>
      </FormProvider>
    </AppLayout>
  );
};

export { EmployerProfile };
