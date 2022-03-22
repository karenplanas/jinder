import React, { useState } from "react";
import { useLocation } from "react-router";
import Home from "../icons/Home";
import Chat from "../icons/Chat";
import Search from "../icons/Search";
import Favourite from "../icons/Favourites";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState("");
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/login" ? (
        <div></div>
      ) : (
        <nav>
          <a
            href="/home"
            onClick={() => setActiveNav("/home")}
            className={activeNav === "/home" ? "active" : ""}
          >
            <Home />
          </a>
          <a
            href="/home"
            onClick={() => setActiveNav("/search")}
            className={activeNav === "/search" ? "active" : ""}
          >
            <Search />
          </a>
          <a
            href="/home"
            onClick={() => setActiveNav("/favourites")}
            className={activeNav === "/favourites" ? "active" : ""}
          >
            <Favourite />
          </a>
          <a
            href="/home"
            onClick={() => setActiveNav("/chat")}
            className={activeNav === "/chat" ? "active" : ""}
          >
            <Chat />
          </a>
        </nav>
      )}
    </>
  );
};

export default Navbar;
