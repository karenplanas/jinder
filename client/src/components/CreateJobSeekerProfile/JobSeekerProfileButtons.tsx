import React from 'react'
import { Button } from '../Button/Button'

const JobSeekerProfileButtons: React.FC = () => {
  return (
    <div className='buttons-container'>
      <Button variant='outlined' text='Cancel' />
      <Button variant='contained' text='Save' type='submit' />
    </div>
  )
}

export { JobSeekerProfileButtons }