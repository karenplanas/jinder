import React, { useEffect, useState } from "react";
import "./ChatList.css";
import { getFavourites } from "../../services/api-client";
import { Favourite } from "../../Interfaces/favourite";
import { ChatContainer } from "../ChatContainer/ChatContainer";
import { NavBarTop } from "../NavBarTop/NavBarTop";
import { NavTabs } from "../NavTabs/NavTabs";

const ChatList: React.FC = () => {
  const [chatting, setChatting] = useState<Favourite[]>([]);

  useEffect(() => {
    getFavourites(setChatting);
  }, []);

  return (
    <>
      <NavBarTop />{" "}
      <NavTabs
        tabs={[
          { name: "Favourites", endpoint: "/favouriteList" },
          { name: "Chat", endpoint: "/chatlist" },
        ]}
      />{" "}
      {chatting.map((chat) => {
        return <ChatContainer data={chat} />;
      })}
    </>
  );
};

export { ChatList };
