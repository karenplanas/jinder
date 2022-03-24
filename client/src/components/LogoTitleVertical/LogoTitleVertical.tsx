import React from 'react'
import { Logo } from '../icons/Logo'
import './LogoTitleVertical.css'

const LogoTitleVertical: React.FC = () => {
  return (
    <div className='LogoTitleVertical-container'>
      <Logo />
      <h2>Jinder</h2>
    </div>
  )
}

export { LogoTitleVertical }