import React from 'react'
import './ProfileTabsNav.css'

const ProfileTabsNav: React.FC = () => {
  return (
    <div className='ProfileTabsNav-container'>
      <div><h3>Experience</h3></div>
      <div><h3>Skills</h3></div>
      <div><h3>Looking For</h3></div>
    </div>
  )
}

export { ProfileTabsNav }