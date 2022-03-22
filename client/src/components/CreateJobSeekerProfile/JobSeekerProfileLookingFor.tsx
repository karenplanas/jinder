import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Checkbox } from '../Checkbox/Checkbox'
import { PlusInCircle } from '../icons/PlusInCircle'
import { InputTextField } from '../InputTextField/InputTextField'
import { CreateJobSeekerProfileLayout } from './CreateJobSeekerProfileLayout'
import './CreateJobSeekerProfile.css'
import { JobSeekerProfileButtons } from './JobSeekerProfileButtons'

const JobSeekerProfileLookingFor: React.FC = () => {

  const methods = useForm();

  return (
    <CreateJobSeekerProfileLayout>
      <FormProvider {...methods}>
        <form>
          <div className='CreateJobSeekerProfile-LookingFor profile-sections'>
            <div className='title-and-plus'>
              <h3>Looking For</h3>
              <PlusInCircle />
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
            <InputTextField name='others-looking-for' placeholder='Type something here...' label='Other' />
            <JobSeekerProfileButtons />
          </div>
        </form>
      </FormProvider>
    </CreateJobSeekerProfileLayout>
  )
}

export { JobSeekerProfileLookingFor }