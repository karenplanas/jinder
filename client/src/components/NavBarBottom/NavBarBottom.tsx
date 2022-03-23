import React from "react";
import clsx from "clsx";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Home} from "../icons/Home";
import {Chat} from "../icons/Chat";
import {Search} from "../icons/Search";
import {Favourite} from "../icons/Favourites";
import "./NavBarBottom.css";

const NavBarBottom: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <div className='NavBarBottom-container'>
        <Link
          to="/home"
          className={clsx({ selected: pathname.startsWith('/home') })}
        >
          <Home />
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
        </Link>
      </div>
    </nav>
  );
};

export {NavBarBottom};
