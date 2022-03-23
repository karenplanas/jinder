import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { JobOffer } from '../../Interfaces/JobOffer';
import { postJobOffer } from '../../services/api-client';
import { AppLayout } from '../AppLayout/AppLayout';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { InputTextField } from '../InputTextField/InputTextField';
import './CreateJobOffer.css';

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

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    await postJobOffer(data);
  });

  return (
    <AppLayout title='Jobs'>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <div className="Inputs-Card">
              <div className='title'>
                <h3>New position</h3>
              </div>
              <div className="inputRow">
                <InputTextField name="companyname" label="Company name" />
                <InputTextField name="companysize" label="Company size" />
              </div>

              <InputTextField name="position" label="Position"/>

              <div className="inputRow">
                <InputTextField name="role" label="Role" />
                <InputTextField name="level" label="Level"/>
              </div>

              <InputTextField name="bio" label="Bio" />
              <h5>Skills required</h5>
              <div className="skills-required">

                <div className="column">
                  <Checkbox name='skills' value='js' label='JavaScript'/>
                  <Checkbox name='skills' value='html' label='HTML'/>
                  <Checkbox name='skills' value='css' label='CSS'/>
                  <Checkbox name='skills' value='c#' label='C#'/>        
                </div>

                <div className="column">
                  <Checkbox name='skills' value='java' label='Java'/>
                  <Checkbox name='skills' value='python' label='Python'/>
                  <Checkbox name='skills' value='react' label='React'/>
                  <Checkbox name='skills' value='angular' label='Angular'/>
                </div>
              </div>

              <InputTextField name="education" label="Education" />
              <InputTextField name="experience" label="Experience" />
              <InputTextField name="location" label="Location" />
              <InputTextField name="contract" label="Contract" />
              <InputTextField name="salary" label="Salary" />
              <InputTextField type='textarea' name="description" label="Description" />
              
              <div>
                <Button className="contained" text="Submit" type="submit" />
              </div>

            </div>
          </form>
        </FormProvider>
    </AppLayout>  
  );
};

export { CreateJobOffer };