import clsx from 'clsx'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavTabs.css'

interface Props {
  tabs: {
    name: string,
    endpoint: string
  }[]
}

const NavTabs: React.FC<Props> = ({ tabs }) => {
  const { pathname } = useLocation()
  console.log('pathname', pathname)
  return (
    <div className='TabsNav-container'>
      {
        tabs.map((tab) => (
          <Link to={tab.endpoint} className={clsx({ selected: pathname.startsWith(tab.endpoint) })}>
            <div className='tabs tabs-separator'>
              <h3>{tab.name}</h3>
            </div>
          </Link>
        ))  
      }
    </div>
  )
}

export { NavTabs }