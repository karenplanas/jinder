import React from 'react'
import { Link } from 'react-router-dom'
import './TabsNav.css'

interface Props {
  tabs: {
    name: string,
    endpoint: string
  }[]
}

const ProfileTabsNav: React.FC<Props> = ({ tabs }) => {
  return (
    <div className='TabsNav-container'>
      {
        tabs.map((tab) => (
          <Link to={tab.endpoint}>
            <div className='tabs tabs-separator'>
              <h3>{tab.name}</h3>
            </div>
          </Link>
        ))  
      }
    </div>
  )
}

export { ProfileTabsNav }