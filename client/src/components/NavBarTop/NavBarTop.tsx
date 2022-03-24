import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import { ImagePlaceHolder } from '../icons/ImagePlaceHolder'
import { Logo } from '../icons/Logo'
import { ImageHolder } from '../ImageHolder/ImageHolder'
import './NavBarTop.css'

interface Props {
  className?: string
  position?: string
  title?: string
}

const NavBarTop: React.FC<Props> = ({ className, position, title}) => {
  return (
    <div className={clsx('NavBarTop', className, { 'NavBarTop-fixed': position === 'fixed'})}>
      <div className='NavBarTop-content'>
        <Link to='/home'>
          <Logo width={60} height={60}/>
        </Link>
        { title && <h2>{title}</h2>}
        <div className='NavBarTop-picture'>
          <Link to='/job-seeker-profile/edit'>
            <ImageHolder size='big'>
              <ImagePlaceHolder />
            </ImageHolder>
          </Link>
        </div>
      </div>
    </div>
  )
}

export { NavBarTop }