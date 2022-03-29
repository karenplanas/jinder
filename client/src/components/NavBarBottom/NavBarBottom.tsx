import React from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Square } from '../icons/Square';
import { ChatIcon } from '../icons/ChatIcon';
import { Pentagon } from '../icons/Pentagon';
import { Star } from '../icons/Star';
import './NavBarBottom.css';
import { IconWithLabel } from '../IconWithLabel/IconWithLabel';
import { useUserContext } from '../../contexts/UserContext';

const getItems = (type: string | undefined) => { 
  return [
    {
      path: '/home',
      label: 'Home',
      icon: <Square />,
    },
    {
      path: type === 'employer' ? '/employer-profile/edit' : '/job-seeker-profile/edit',
      label: 'Profile',
      icon: <Pentagon />,
    },
    type === 'employer' ? {
      path: '/job-position/edit',
      label: 'Jobs',
      icon: <Pentagon />,
    } : {
      path: '/favourites',
      label: 'Favourites',
      icon: <Star />,
    },
    {
      path: '/chatlist',
      label: 'Chat',
      icon: <ChatIcon />,
    },
  ]
};

const NavBarBottom: React.FC = () => {
  const { pathname } = useLocation();
  const { user } = useUserContext();

  return (
    <nav className="NavBarBottom">
      <div className="NavBarBottom-content">
        {getItems(user?.type).map((item) => (
          <Link
            to={item.path}
            className={clsx({ selected: pathname.startsWith(item.path) })}
            key={item.path}
          >
            <IconWithLabel icon={item.icon} label={item.label} />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export { NavBarBottom };
