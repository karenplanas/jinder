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
                <Checkbox name='skills' value='c++' label='C++'/>
                <Checkbox name='skills' value='js' label='JS'/>
                <Checkbox name='skills' value='ts' label='TS'/>
              </div>

              <div className='checks-line'>
                <Checkbox name='skills' value='react' label='React'/>
                <Checkbox name='skills' value='redux' label='Redux'/>
                <Checkbox name='skills' value='angular' label='Angular'/>
              </div>

              <div className='checks-line'>
                <Checkbox name='skills' value='mongodb' label='MongoDB'/>
                <Checkbox name='skills' value='mongoose' label='Mongoose'/>
                <Checkbox name='skills' value='postgres' label='Postgres'/>
              </div>
            </div>
            <InputTextField name='others-skills' placeholder='Type something here...' label='Others' />
            <JobSeekerProfileButtons />
          </div>
        </form>
      </FormProvider>
    </JobSeekerProfileLayout>
  )
}

export { JobSeekerProfileSkills }