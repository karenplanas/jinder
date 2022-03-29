import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from './Menu'
import './Menu.css'

const MenuJobSeeker: React.FC = () => {

  return (
    <Menu>
      <Link to='/job-seeker-profile/edit'><li>My profile</li></Link>
      <Link to='/settings'><li>Settings</li></Link>
    </Menu>
  )
}

export { MenuJobSeeker }