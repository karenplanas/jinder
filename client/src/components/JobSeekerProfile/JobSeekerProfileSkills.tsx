import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Checkbox } from '../Checkbox/Checkbox'
import { InputTextField } from '../InputTextField/InputTextField'
import { JobSeekerProfileLayout } from './JobSeekerProfileLayout'
import { JobSeekerProfileButtons } from './JobSeekerProfileButtons'
import { useAuthenticatedApiClient } from '../../services/authenticated-api-client'
import './JobSeekerProfile.css'

const JobSeekerProfileSkills: React.FC = () => {
  const apiClient = useAuthenticatedApiClient()
  const methods = useForm()
  const { handleSubmit } = methods;

  const fetchJobseekerProfile = async () => {
    const jobSeekerProfile = await apiClient.getJobSeekerProfile();
    methods.reset(jobSeekerProfile)
  }

  useEffect(() => {
    fetchJobseekerProfile()
  }, [])

  const onSubmit = handleSubmit(apiClient.updateJobSeekerProfile);

  return (
    <JobSeekerProfileLayout>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div className='CreateJobSeekerProfile-Skills profile-sections'>
            <div className='title-and-plus'>
              <h3>Skills</h3>
            </div>
            <div className='checks'>
              <div className='checks-line'>
                <Checkbox name='skills.skill' value='C++' label='C++'/>
                <Checkbox name='skills.skill' value='JS' label='JS'/>
                <Checkbox name='skills.skill' value='TS' label='TS'/>
              </div>

              <div className='checks-line'>
                <Checkbox name='skills.skill' value='React' label='React'/>
                <Checkbox name='skills.skill' value='Redux' label='Redux'/>
                <Checkbox name='skills.skill' value='Angular' label='Angular'/>
              </div>

              <div className='checks-line'>
                <Checkbox name='skills.skill' value='Mongodb' label='MongoDB'/>
                <Checkbox name='skills.skill' value='Mongoose' label='Mongoose'/>
                <Checkbox name='skills.skill' value='Postgres' label='Postgres'/>
              </div>
            </div>
            <InputTextField name='skills.others' placeholder='Type something here...' label='Others' />
            <JobSeekerProfileButtons />
          </div>
        </form>
      </FormProvider>
    </JobSeekerProfileLayout>
  )
}

export { JobSeekerProfileSkills }