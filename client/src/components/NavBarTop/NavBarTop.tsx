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
  userName?: string | null
}

const NavBarTop: React.FC<Props> = ({ className, position, title, userName}) => {
  return (
    <div className={clsx('NavBarTop', className, { 'NavBarTop-fixed': position === 'fixed'})}>
      <div className='NavBarTop-content'>
        <Link to='/home'>
          <Logo width={60} height={60}/>
        </Link>
        <div className='NavBarTop-Salut-title'>
          { userName && <h2>Hello {userName}!</h2>}
          { title && <h2>{title}</h2>}
        </div>
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