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
      rating: "",
    },
  });

  // const onSubmit = handleSubmit(async (data) => {
  //   await postJobOffer(data);
  // });
  return (
    <AppLayout title="Jobs">
      <FormProvider {...methods}>
        <form
        // onSubmit={onSubmit}
        >
          <div className="Inputs-Card">
            <div className="title">
              <h3>Company Profile</h3>
            </div>
            <div className="inputRow">
              <InputTextField name="companyname" label="Company name" />
              <InputTextField name="companysize" label="Company size" />
            </div>

            <InputTextField name="domain" label="Domain" />

            <div className="inputRow">
              <InputTextField name="description" label="Description" />
            </div>

            <InputTextField name="logo" label="Logo" />
            <InputTextField name="rating" label="Rating" />

            {/* <InputTextField name="bio" label="Bio" />
            <h5>Skills required</h5>
            <div className="skills-required">
              <div className="column">
                <Checkbox name="skills" value="js" label="JavaScript" />
                <Checkbox name="skills" value="html" label="HTML" />
                <Checkbox name="skills" value="css" label="CSS" />
                <Checkbox name="skills" value="c#" label="C#" />
              </div>

              <div className="column">
                <Checkbox name="skills" value="java" label="Java" />
                <Checkbox name="skills" value="python" label="Python" />
                <Checkbox name="skills" value="react" label="React" />
                <Checkbox name="skills" value="angular" label="Angular" />
              </div>
            </div>

            <InputTextField name="education" label="Education" />
            <InputTextField name="experience" label="Experience" />
            <InputTextField name="location" label="Location" />
            <InputTextField name="contract" label="Contract" />
            <InputTextField name="salary" label="Salary" />
            <InputTextField
              type="textarea"
              name="description"
              label="Description"
            /> */}

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
