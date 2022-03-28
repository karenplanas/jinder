import React, { useEffect, useState } from "react";
import "./ChatList.css";
import { getFavourites } from "../../services/api-client";
import { Favourite } from "../../Interfaces/favourite";
import { ChatContainer } from "../ChatContainer/chatContainer";
import { NavBarTop } from "../NavBarTop/NavBarTop";
import { NavTabs } from "../NavTabs/NavTabs";
import { Link } from "react-router-dom";
import {
  UserContextProvider,
  useUserContext,
} from "../../contexts/UserContext";

const ChatList: React.FC = () => {
  const [chatting, setChatting] = useState<Favourite[]>([]);
  const { user } = useUserContext();

  useEffect(() => {
    getFavourites(setChatting, user);
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
          <Link
            to={`/chatRoom/${chat._id}`}
            className="chatLinks"
            state={{ chat: chat }}
          >
            {" "}
            <ChatContainer data={chat} />
          </Link>
        );
      })}
    </>
  );
};

export { ChatList };
