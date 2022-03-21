import React from 'react'
import { Link } from 'react-router-dom'
import './ProfileTabsNav.css'

// interface Props {
//   tabNames?: string[]
//   tabName2?: string
//   endpoint1?: string
// }

//{tabs: [{name, endpoint}]}

const ProfileTabsNav: React.FC = () => {
  return (
    <div className='ProfileTabsNav-container'>
      <div className='tabs tabs-separator'><h3>Experience</h3></div>
      <Link to={'/job-seeker-profile/edit/skills'}><div className='tabs tabs-separator'><h3>Skills</h3></div></Link>
      <div className='tabs '><h3>Looking For</h3></div>
    </div>
  )
}

export { ProfileTabsNav }