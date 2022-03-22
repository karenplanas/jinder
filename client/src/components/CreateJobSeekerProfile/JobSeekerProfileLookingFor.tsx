import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Checkbox } from '../Checkbox/Checkbox'
import { PlusInCircle } from '../icons/PlusInCircle'
import { InputTextField } from '../InputTextField/InputTextField'

const JobSeekerProfileLookingFor: React.FC = () => {

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <div className='CreateJobSeekerProfile-LookingFor profile-sections'>
          <div className='title-and-plus'>
            <h3>Looking For</h3>
            <PlusInCircle />
          </div>
          <div className='checks'>

            <div className='checks-line'>
              <Checkbox name='lookingFor' value='frontEnd' label='Front-end'/>
              <Checkbox name='lookingFor' value='backEnd' label='Back-end'/>
              <Checkbox name='lookingFor' value='fullStack' label='Full-stack'/>
            </div>

            <div className='checks-line'>
              <Checkbox name='lookingFor' value='junior' label='Junior'/>
              <Checkbox name='lookingFor' value='senior' label='Senior'/>
              <Checkbox name='lookingFor' value='pm' label='Project Manager'/>
            </div>

            <div className='checks-line'>
              <Checkbox name='lookingFor' value='remote' label='Remote'/>
              <Checkbox name='lookingFor' value='fullTime' label='Full time'/>
              <Checkbox name='lookingFor' value='partTime' label='Part time'/>
            </div>

          </div>
          <InputTextField name='others-looking-for' placeholder='Type something here...' label='Other' />
        </div>
      </form>
    </FormProvider>
  )
}

export { JobSeekerProfileLookingFor }