
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { JobSeekerProfile } from '../../Interfaces/JobSeekerProfile'
import { Button } from '../Button/Button'
import { Logo } from '../icons/Logo'
import { ProfileTabsNav } from '../ProfileTabsNav/ProfileTabsNav'
import { JobSeekerProfileExperience } from './JobSeekerProfileExperience'
import { JobSeekerProfileLookingFor } from './JobSeekerProfileLookingFor'
import { JobSeekerProfileSkills } from './JobSeekerProfileSkills'
import './CreateJobSeekerProfile.css'

const CreateJobSeekerProfile: React.FC = () => {
  const methods = useForm<JobSeekerProfile>()

  const onSubmit = methods.handleSubmit((data) => {
    console.log(methods.getValues())
  })
  
  return (
    <div>
      <Logo height={70} width={70} />
      <ProfileTabsNav />
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div>
            <JobSeekerProfileExperience />
            <JobSeekerProfileSkills />
            <JobSeekerProfileLookingFor />
            <Button className='outlined' text='Cancel' />
            <Button className='contained' text='Save' type='submit' />
           </div>
        </form>
      </FormProvider>

    </div>
  );
};

export { CreateJobSeekerProfile };
