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

  return (
    <div className='TabsNav-container'>
      {
        tabs.map((tab, i) => (
          <Link to={tab.endpoint} className={clsx({ selected: pathname.startsWith(tab.endpoint) })} key={i}>
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