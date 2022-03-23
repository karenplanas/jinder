import React from 'react'
import { PlusInCircle } from '../icons/PlusInCircle'
import { InputTextField } from '../InputTextField/InputTextField'

const JobOfferMainInfo: React.FC = () => {
  return (
    <div className='joboffermaininfo'>
      <div className='title-and-plus'>
        <h3>Job Offer description</h3>
        <PlusInCircle />
      </div>
      <InputTextField placeholder='Company Name' name='company-name' label='Company Name'/>
      <InputTextField placeholder='Company Size' name='company-size' label='Company Size'/>
			<InputTextField placeholder='Position' name='position' label='Position'/>
			<InputTextField placeholder='Bio' name='bio' label='Bio'/>
			<InputTextField placeholder='Role' name='role' label='Role'/>
			<InputTextField placeholder='Level' name='level' label='Level'/>
      <InputTextField placeholder='Description' name='description' label='Description' />
    </div>
  )
}

export { JobOfferMainInfo}