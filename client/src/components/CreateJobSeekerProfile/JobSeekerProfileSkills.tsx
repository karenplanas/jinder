import React from 'react'
import { Checkbox } from '../Checkbox/Checkbox'
import { PlusInCircle } from '../icons/PlusInCircle'
import { InputTextField } from '../InputTextField/InputTextField'

const JobSeekerProfileSkills: React.FC = () => {
  return (
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
      <InputTextField name='others-skills' placeholder='Type something here...' label='Other' />
    </div>
  )
}

export { JobSeekerProfileSkills }