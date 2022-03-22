import React from 'react'
import { PlusInCircle } from '../icons/PlusInCircle'
import { InputTextField } from '../InputTextField/InputTextField'

const JobSeekerProfileExperience: React.FC = () => {
  return (
    <div className='CreateJobSeekerProfile-Experience profile-sections'>
      <div className='title-and-plus'>
        <h3>Experience</h3>
        <PlusInCircle />
      </div>
      <InputTextField placeholder='Title' name='title' label='Title'/>
      <InputTextField placeholder='Company Name' name='company-name' label='Company Name'/>
      <InputTextField placeholder='Location' name='location' label='Location'/>
      <div className='dates'>
        <InputTextField placeholder='YYYY-MM' name='start-date' label='Start Date' />
        <InputTextField placeholder='YYYY-MM' name='end-date' label='End Date' />
      </div>
      <InputTextField placeholder='Description' name='description' label='Description' />
    </div>
  )
}

export { JobSeekerProfileExperience }