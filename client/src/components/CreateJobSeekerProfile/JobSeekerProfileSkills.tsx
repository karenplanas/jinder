import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Checkbox } from '../Checkbox/Checkbox'
import { PlusInCircle } from '../icons/PlusInCircle'
import { InputTextField } from '../InputTextField/InputTextField'
import { CreateJobSeekerProfileLayout } from './CreateJobSeekerProfileLayout'
import { JobSeekerProfileButtons } from './JobSeekerProfileButtons'
import './CreateJobSeekerProfile.css'
import { useAuthenticatedApiClient } from '../../services/authenticated-api-client'

const JobSeekerProfileSkills: React.FC = () => {
  const apiClient = useAuthenticatedApiClient()
  const methods = useForm()
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(apiClient.updateJobSeekerProfile);

  return (
    <CreateJobSeekerProfileLayout>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div className='CreateJobSeekerProfile-Skills profile-sections'>
            <div className='title-and-plus'>
              <h3>Skills</h3>
              <PlusInCircle />
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
    </CreateJobSeekerProfileLayout>
  )
}

export { JobSeekerProfileSkills }