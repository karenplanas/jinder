import React from 'react'
import { JobSeeker } from '../../Interfaces/User'
import { Card } from '../Card/Card';
import { ImagePlaceHolder } from '../icons/ImagePlaceHolder';
import { ImageHolder } from '../ImageHolder/ImageHolder';
import './JobSeekerCard.css'

interface Props {
  jobSeeker: JobSeeker;
}

const JobSeekerCard: React.FC<Props> = ({ jobSeeker }) => {
  return (
    <Card>
      <div className="JobSeekerCard-content">
        <div className='JobSeekerCard-avatar-name'>
          <ImageHolder>
            <ImagePlaceHolder/>
          </ImageHolder>
          <h3>{jobSeeker.firstName} {jobSeeker.lastName}</h3>
        </div>
        <div className='JobSeekerCard-skills'>
          <h4>Skills:</h4>
          <p>{jobSeeker.jobSeekerProfile?.skills.join(', ')}</p>
        </div>
      </div>
    </Card>
  )
}

export { JobSeekerCard }