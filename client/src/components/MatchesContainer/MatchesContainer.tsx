import React from "react";
import "./MatchesContainer.css";
import FavouritesList from "../FavouritesList/FavouritesList";

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
        <FavouritesList />
      </div>
    </>
  );
};

export { ChatContainer };
