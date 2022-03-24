import React from 'react'
import { Building } from '../icons/Building'
import { People } from '../icons/People'
import { ImageHolder } from '../ImageHolder/ImageHolder'

interface HeaderProps {
  name: string
  size: string
}

const JobHeader: React.FC<HeaderProps> = ({ name, size }) =>{
  return (
    <div className="JobHeader">
      <ImageHolder>
        <Building />
      </ImageHolder>

      <div className="JobHeader-text">
        <h3>{name}</h3>
        <div className="JobHeader-company-size">
          <People />
          <p>{size}</p>
        </div>
      </div>
    </div>
  )
}

export { JobHeader }