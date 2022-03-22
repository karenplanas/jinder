import React from "react";
import "./chatContainer.css";
import FavouritesDisplay from "../FavouritesDisplay/FavouritesDisplay";
import ChatDisplay from "../ChatDisplay/ChatDisplay";
import { NavBarTop } from "../NavBarTop/NavBarTop";

const ChatContainer: React.FC = () => {
  return (
    <>
      <NavBarTop />
      <div className="chat_container">
        <div>
          <button className="options">Favourites </button>
          <button className="options">Chat </button>
        </div>
        <FavouritesDisplay />
        <ChatDisplay />
      </div>
    </>
  );
};

export default ChatContainer;
