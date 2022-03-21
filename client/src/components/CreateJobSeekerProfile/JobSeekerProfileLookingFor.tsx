import React from 'react'
import { Checkbox } from '../Checkbox/Checkbox'
import { PlusInCircle } from '../icons/PlusInCircle'
import { InputTextField } from '../InputTextField/InputTextField'

const JobSeekerProfileLookingFor: React.FC = () => {
  return (
    <div className='CreateJobSeekerProfile-LookingFor profile-sections'>
      <div className='title-and-plus'>
        <h3>Looking For</h3>
        <PlusInCircle />
      </div>
      <div className='checks'>

        <div className='checks-line'>
          <Checkbox name='skills' value='frontEnd' label='Front-end'/>
          <Checkbox name='skills' value='backEnd' label='Back-end'/>
          <Checkbox name='skills' value='fullStack' label='Full-stack'/>
        </div>

        <div className='checks-line'>
          <Checkbox name='skills' value='junior' label='Junior'/>
          <Checkbox name='skills' value='senior' label='Senior'/>
          <Checkbox name='skills' value='pm' label='Project Manager'/>
        </div>

        <div className='checks-line'>
          <Checkbox name='skills' value='remote' label='Remote'/>
          <Checkbox name='skills' value='fullTime' label='Full time'/>
          <Checkbox name='skills' value='partTime' label='Part time'/>
        </div>

      </div>
      <InputTextField name='others-looking-for' placeholder='Type something here...' label='Other' />
    </div>
  )
}

export { JobSeekerProfileLookingFor }