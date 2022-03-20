import React from 'react'
import { ProfileTabsNav } from '../ProfileTabsNav/ProfileTabsNav'
import './CreateJobSeekerProfile.css'

const CreateJobSeekerProfile: React.FC = () => {

  return (
    <div>
      <ProfileTabsNav />
      <div>
        <div className='CreateJobSeekerProfile-Experience profile-sections'>
          <h3>Experience</h3>
          <input placeholder='Title'/>
          <input placeholder='Company Name'/>
          <input placeholder='Location'/>
          <input placeholder='Start Date'/>
          <input placeholder='End Date'/>
          <input placeholder='Job Description / Tasks performed'/>
        </div>
        <div className='CreateJobSeekerProfile-Skills profile-sections'>
          <h3>Skills</h3>
          <div className='Skills-checks'>
            <div>
              <input type="checkbox" name='C++'/>
              <label htmlFor='C++'>C++</label>
            </div>
            <div>
              <input type="checkbox" name='JS'/>
              <label htmlFor='C++'>JS</label>
            </div>
            <div>
              <input type="checkbox" name='TS'/>
              <label htmlFor='C++'>TS</label>
            </div>
          </div>
          <div className='others'>
            <label htmlFor='others'>Others</label>
            <input name='others' placeholder='Type something here...'/>
          </div>
        </div>
        <div className='CreateJobSeekerProfile-LookingFor profile-sections'>
          <h3>Looking For</h3>
          <div className='LookingFor-checks'>
            <div>
              <input type="checkbox" name='Front-end'/>
              <label htmlFor='Front-end'>Front-end</label>
            </div>
            <div>
              <input type="checkbox" name='Back-end'/>
              <label htmlFor='Back-end'>Back-end</label>
            </div>
            <div>
              <input type="checkbox" name='Full-stack'/>
              <label htmlFor='Full-stack'>Full-stack</label>
            </div>
          </div>
          <div className='others'>
            <label htmlFor='others'>Others</label>
            <input name='others' placeholder='Type something here...'/>
          </div>
        </div>
        <button>Save</button>
      </div>
    </div>
  )
}

export { CreateJobSeekerProfile }