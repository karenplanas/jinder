import clsx from 'clsx'
import React from 'react'
import { ImagePlaceHolder } from '../icons/ImagePlaceHolder'
import { Logo } from '../icons/Logo'
import { ImageHolder } from '../ImageHolder/ImageHolder'
import './NavBarTop.css'

interface Props {
  className?: string
  title?: string
}

const NavBarTop: React.FC<Props> = ({ className, title}) => {
  return (
    <div className={clsx('NavBarTop', className)}>
      <Logo width={60} height={60}/>
      { title && <h2>{title}</h2>}
      <div className='NavBarTop-picture'>
        <ImageHolder>
          <ImagePlaceHolder />
        </ImageHolder>
      </div>
    </div>
  )
}

export { NavBarTop }