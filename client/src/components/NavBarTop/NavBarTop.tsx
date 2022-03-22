import React from 'react'
import { ImagePlaceHolder } from '../icons/ImagePlaceHolder'
import { Logo } from '../icons/Logo'
import { ImageHolder } from '../ImageHolder/ImageHolder'
import './NavBarTop.css'

interface Props {
  title?: string
}

const NavBarTop: React.FC<Props> = ({title}) => {
  return (
    <div className='NavBarTop'>
      <Logo width={60} height={60}/>
      { title && <h2>{title}</h2>}
      <div className='picture-name'>
        <ImageHolder>
          <ImagePlaceHolder />
        </ImageHolder>
      </div>
    </div>
  )
}

export { NavBarTop }