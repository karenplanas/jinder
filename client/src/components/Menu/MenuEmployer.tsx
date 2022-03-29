import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../contexts/UserContext'
import { ImagePlaceHolder } from '../icons/ImagePlaceHolder'
import { ImageHolder } from '../ImageHolder/ImageHolder'
import './Menu.css'

//https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks

const MenuEmployer: React.FC = () => {

  const menuRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const { logout, user } = useUserContext();


  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if ( menuRef.current !== null && !menuRef.current.contains(e.target as HTMLElement)) 
      {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);

  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <ImageHolder onClick={onClick} className="menu-trigger" size='big'>
        <ImagePlaceHolder />
      </ImageHolder>
      <nav
        onClick={onClick}
        ref={menuRef}
        className={`menu ${isActive ? 'active' : 'inactive'}`}
      >
        <ul>
          <Link to='/job-seeker-profile/edit'><li>My profile</li></Link>
          <Link to='/jobs'><li>Jobs</li></Link>
          <Link to='/settings'><li>Settings</li></Link>
          
          {
            user && 
              <li 
                className="clickable" 
                onClick={() => {
                  logout();
                  navigate('/');
                }}
              >
                Logout
              </li>
          }
        </ul>
      </nav>
    </div>
  )
}

export { MenuEmployer }