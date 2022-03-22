import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { JobSeekerProfile } from '../../Interfaces/JobSeekerProfile'
import { Button } from '../Button/Button'
import { ProfileTabsNav } from '../TabsNav/TabsNav'
import { JobSeekerProfileExperience } from './JobSeekerProfileExperience'
import { JobSeekerProfileLookingFor } from './JobSeekerProfileLookingFor'
import { JobSeekerProfileSkills } from './JobSeekerProfileSkills'
import './CreateJobSeekerProfile.css'
import { NavBarTop } from '../NavBarTop/NavBarTop'

const CreateJobSeekerProfile: React.FC = () => {
  const methods = useForm<JobSeekerProfile>()

  const onSubmit = methods.handleSubmit((data) => {
    console.log(methods.getValues())
  })

  const tabs = [
    {name: 'Experience', endpoint:'/job-seeker-profile/edit/experience'},
    {name: 'Skills', endpoint:'/job-seeker-profile/edit/skills'},
    {name: 'Looking For', endpoint:'/job-seeker-profile/edit/looking-for'},
  ]
  
  return (
    <div>
      <NavBarTop />
      <ProfileTabsNav tabs={tabs}/>
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
