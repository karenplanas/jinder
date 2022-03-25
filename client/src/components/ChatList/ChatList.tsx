import React, { useEffect, useState } from "react";
import "./ChatList.css";
import { getFavourites } from "../../services/api-client";
import { Favourite } from "../../Interfaces/favourite";
import { ChatContainer } from "../ChatContainer/ChatContainer";
import { NavBarTop } from "../NavBarTop/NavBarTop";
import { NavTabs } from "../NavTabs/NavTabs";
import { Link } from "react-router-dom";

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
          { name: "Favourites", endpoint: "/favourites" },
          { name: "Chat", endpoint: "/chatlist" },
        ]}
      />{" "}
      {chatting.map((chat) => {
        return (
          <Link to={"/chatRoom"} className="chatLinks">
            <ChatContainer data={chat} />
          </Link>
        );
      })}
    </>
  );
};

export { ChatList };
