import React from 'react'
import { ProfileTabsNav } from '../ProfileTabsNav/ProfileTabsNav'

const CreateJobSeekerProfile: React.FC = () => {

  return (
    <div>
      <ProfileTabsNav />
      <div className='CreateJobSeekerProfile-Experience'>
        <h3>Experience</h3>
        <input placeholder='Title'/>
        <input placeholder='Company Name'/>
        <input placeholder='Location'/>
        <input placeholder='Start Date'/>
        <input placeholder='End Date'/>
        <input placeholder='Job Description / Tasks performed'/>
        <button>Save</button>
      </div>
    </div>
  )
}

export { CreateJobSeekerProfile }