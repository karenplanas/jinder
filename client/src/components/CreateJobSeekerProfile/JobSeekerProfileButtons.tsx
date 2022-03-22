import React from 'react'
import { Button } from '../Button/Button'

const JobSeekerProfileButtons: React.FC = () => {
  return (
    <div className='buttons-container'>
      <Button className='outlined' text='Cancel' />
      <Button className='contained' text='Save' type='submit' />
    </div>
  )
}

export { JobSeekerProfileButtons }