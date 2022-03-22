import React from 'react'
import { ImagePlaceHolder } from '../icons/ImagePlaceHolder'
import { Logo } from '../icons/Logo'
import { ImageHolder } from '../ImageHolder/ImageHolder'
import './NavBarTop.css'

const NavBarTop: React.FC = () => {
  return (
    <div className='NavBarTop'>
      <Logo />
      <div className='picture-name'>
        <ImageHolder>
          <ImagePlaceHolder />
        </ImageHolder>
        <p>Macarena</p>
      </div>
    </div>
  )
}

export { NavBarTop }