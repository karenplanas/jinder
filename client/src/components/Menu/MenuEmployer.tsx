import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from './Menu'
import './Menu.css'

const MenuEmployer: React.FC = () => {
  return (
    <Menu >
      <Link to='/employer-profile/edit'><li>My profile</li></Link>
      <Link to='/jobs'><li>Jobs</li></Link>
      <Link to='/settings'><li>Settings</li></Link>
    </Menu>
  )
}

export { MenuEmployer }