import React from "react";
import "./chatContainer.css";
import FavouritesDisplay from "../FavouritesDisplay/FavouritesDisplay";
import ChatDisplay from "../ChatDisplay/ChatDisplay";
import { NavBarTop } from "../NavBarTop/NavBarTop";
import { NavTabs } from "../NavTabs/NavTabs";

const ChatContainer: React.FC = () => {
  return (
    <>
      <NavBarTop />
      <div className="chat_container">
        <div>
          {" "}
          <NavTabs
            tabs={[
              { name: "Favourites", endpoint: "/favouriteList" },
              { name: "Chat", endpoint: "/chatlist" },
            ]}
          />{" "}
        </div>
        <FavouritesDisplay />
        <ChatDisplay />
      </div>
    </>
  );
};

export {ChatContainer};
