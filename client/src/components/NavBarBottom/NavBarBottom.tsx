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

const items = [
  {
    path: '/home',
    label: 'Home',
    icon: <Square />,
  },
  {
    path: '/job-position/edit',
    label: 'Jobs',
    icon: <Pentagon />,
  },
  {
    path: '/favourites',
    label: 'Favourites',
    icon: <Star />,
  },
  {
    path: '/chatList',
    label: 'Chat',
    icon: <ChatIcon />,
  },
];

const NavBarBottom: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="NavBarBottom">
      <div className="NavBarBottom-content">
        {items.map((item) => (
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
