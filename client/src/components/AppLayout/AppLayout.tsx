import clsx from 'clsx';
import React from 'react'
import { NavBarBottom } from '../NavBarBottom/NavBarBottom'
import { NavBarTop } from '../NavBarTop/NavBarTop'
import './AppLayout.css'

interface Props {
  displayNavBarTop?: boolean;
  displayNavBarBottom?: boolean;
  title?: string;
  userName?: string | null;
}

const AppLayout: React.FC<Props> = ({children, displayNavBarTop = true, displayNavBarBottom = true, title, userName}) => {
  return (
    <div className={clsx('AppLayout', { 'with-bottom-nav': displayNavBarBottom, 'with-top-nav': displayNavBarTop })}>
      { displayNavBarTop && <NavBarTop position='fixed' title={title} userName={userName}/> }
      {children}
      { displayNavBarBottom && <NavBarBottom /> }
    </div>

  )
}

export { AppLayout }