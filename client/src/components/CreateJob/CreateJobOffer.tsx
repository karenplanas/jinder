import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { JobOffer } from '../../Interfaces/JobOffer';
import { postJobOffer } from '../../services/api-client';
import './CreateJobOffer.css';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import { NavBarTop } from '../NavBarTop/NavBarTop';

const CreateJobOffer: React.FC = () => {
  const methods = useForm<JobOffer>({
    defaultValues: {
      companyname: "",
      companysize: "",
      position: "",
      bio: "",
      role: "",
      level: "",
      description: "",
      languages: [],
      education: "",
      experience: "",
      location: "",
      contract: "",
      salary: "",
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit(async (data) => {
    // JSON.stringify(data.languages);
    await postJobOffer(data);
  });

  return (
    <div className="createjoboffer">
      <NavBarTop></NavBarTop>
      <div className="joboffercontent">
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <h2>Create new offer</h2>
            <div className="mainInfoContainer">
              <div className="firstInputRow">
                <InputTextField
                  id="companyname"
                  type="text"
                  label="Company name"
                  {...register("companyname")}
                />
                <InputTextField
                  id="companysize"
                  type="text"
                  label="Company size"
                  {...register("companysize")}
                />
              </div>
              <InputTextField
                type="text"
                label="Position"
                {...register("position")}
              />
              <div className="secondInputRow">
                <InputTextField
                  id="role"
                  type="text"
                  label="Role"
                  {...register("role")}
                />
                <InputTextField
                  id="level"
                  type="text"
                  label="Level"
                  {...register("level")}
                />
              </div>
              <InputTextField type="text" label="Bio" {...register('bio')} />
              <h5>Languages</h5>
              <div className="languagesform">
                <div className="firstcolumn">
                  <label>
                    <input
                      type="checkbox"
                      value="Javascript"
                      {...register("languages")}
                    />{" "}
                    Javascript
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="HTML"
                      {...register("languages")}
                    />{" "}
                    HTML
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="CSS"
                      {...register("languages")}
                    />{" "}
                    CSS
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="C#"
                      {...register("languages")}
                    />{" "}
                    C#
                  </label>
                </div>
                <div className="secondcolumn">
                  <label>
                    <input
                      type="checkbox"
                      value="Java"
                      {...register("languages")}
                    />{" "}
                    Java
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Python"
                      {...register("languages")}
                    />{" "}
                    Python
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="React"
                      {...register("languages")}
                    />{" "}
                    React
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Angular"
                      {...register("languages")}
                    />{" "}
                    Angular
                  </label>
                </div>
              </div>
							<div className='secondpartform'>
              <InputTextField
                type="text"
                label="Education"
                {...register('education')}
              />
              <InputTextField
                type="text"
                label="Experience"
                {...register('experience')}
              />
              <InputTextField
                type="text"
                label="Location"
                {...register('location')}
              />
              <InputTextField
                type="text"
                label="Contract"
                {...register('contract')}
              />
              <InputTextField
                type="text"
                label="Salary"
                {...register('salary')}
              />
              <label id="jobOfferDescription">
                <h5>Description</h5>
                <textarea {...register('description')} />
              </label>
							</div>
              <Button className="contained" text="Submit" type="submit" />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export { CreateJobOffer };
