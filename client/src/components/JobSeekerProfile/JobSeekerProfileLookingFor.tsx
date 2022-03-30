import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Checkbox } from '../Checkbox/Checkbox'
import { PlusInCircle } from '../icons/PlusInCircle'
import { InputTextField } from '../InputTextField/InputTextField'
import { JobSeekerProfileLayout } from './JobSeekerProfileLayout'
import { JobSeekerProfileButtons } from './JobSeekerProfileButtons'
import { Button } from '../Button/Button'
import { useAuthenticatedApiClient } from '../../services/authenticated-api-client'
import './JobSeekerProfile.css'

const JobSeekerProfileLookingFor: React.FC = () => {

  const methods = useForm();
  const apiClient = useAuthenticatedApiClient()
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
          <div className='CreateJobSeekerProfile-LookingFor profile-sections'>
            <div className='title-and-plus'>
              <h3>Looking For</h3>
            </div>
            <div className='checks'>

              <div className='checks-line'>
                <Checkbox name='lookingFor.position' value='frontEnd' label='Front-end'/>
                <Checkbox name='lookingFor.position' value='backEnd' label='Back-end'/>
                <Checkbox name='lookingFor.position' value='fullStack' label='Full-stack'/>
              </div>

              <div className='checks-line'>
                <Checkbox name='lookingFor.seniority' value='junior' label='Junior'/>
                <Checkbox name='lookingFor.seniority' value='intermediate' label='Intermediate'/>
                <Checkbox name='lookingFor.seniority' value='senior' label='Senior'/>
              </div>

              <div className='checks-line'>
                <Checkbox name='lookingFor.location' value='remote' label='Remote'/>
                <Checkbox name='lookingFor.role' value='fullTime' label='Full time'/>
                <Checkbox name='lookingFor.role' value='partTime' label='Part time'/>
              </div>

            </div>
            <InputTextField name='lookingFor.others' placeholder='Type something here...' label='Others' />
            <Button variant='outlined' text='Upload CV'/>
            <JobSeekerProfileButtons />
          </div>
        </form>
      </FormProvider>
    </JobSeekerProfileLayout>
  )
}

export { JobSeekerProfileLookingFor }