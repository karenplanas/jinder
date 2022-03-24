import React from "react";
import clsx from "clsx";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Square} from "../icons/Square";
import {Chat} from "../icons/Chat";
import {Pentagon} from "../icons/Pentagon";
import {Star} from "../icons/Star";
import "./NavBarBottom.css";
import { IconWithLabel } from "../IconWithLabel/IconWithLabel";

const items = [
  {
    path: '/home',
    label: 'Home',
    icon: <Square />
  },
  {
    path: '/search',
    label: 'Search',
    icon: <Pentagon />
  },
  {
    path: '/favourites',
    label: 'Favourites',
    icon: <Star />
  },
  {
    path: '/chat',
    label: 'Chat',
    icon: <Chat />
  }
]

const NavBarBottom: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className='NavBarBottom'>
      <div className='NavBarBottom-content'>
        {
          items.map((item) => (
            <Link to={item.path} className={clsx({ selected: pathname.startsWith(item.path) })} key={item.path}>
              <IconWithLabel icon={item.icon} label={item.label} />
            </Link>
          ))  
        }
      </div>
    </nav>
  )
}

/* <Link
  to="/home"
  className={clsx({ selected: pathname.startsWith('/home') })}
>
  <IconWithLabel icon={<Square/>} label='Home' />
</Link>
<Link
  to="/search"
  className={clsx({ selected: pathname.startsWith('/search') })}
>
  <Search />
</Link>
<Link
  to="/favourites"
  className={clsx({ selected: pathname.startsWith('/favourites') })}
>
  <Favourite />
</Link>
<Link
  to="/chat"
  className={clsx({ selected: pathname.startsWith('/chat') })}
>
  <Chat />
</Link> */

export {NavBarBottom};
