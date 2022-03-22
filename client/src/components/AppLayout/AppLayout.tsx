import React from 'react'
import { NavBarBottom } from '../NavBarBottom/NavBarBottom'
import { NavBarTop } from '../NavBarTop/NavBarTop'
import './AppLayout.css'

interface Props {
  displayNavBarTop?: boolean;
  displayNavBarBottom?: boolean;
  title?: string;
}

const AppLayout: React.FC<Props> = ({children, displayNavBarTop = true, displayNavBarBottom = true, title}) => {
  return (
    <div className='AppLayout'>
      { displayNavBarTop && <NavBarTop title={title}/> }
      {children}
      { displayNavBarBottom && <NavBarBottom /> }
    </div>

  )
}

export { AppLayout }