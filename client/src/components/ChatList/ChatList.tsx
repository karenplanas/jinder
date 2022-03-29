import React, { useEffect, useState } from 'react';
import './ChatList.css';
import { getFavourites } from '../../services/api-client';
import { Favourite } from '../../Interfaces/favourite';
import { ChatContainer } from '../ChatContainer/ChatContainer';
import { NavBarTop } from '../NavBarTop/NavBarTop';
import { NavTabs } from '../NavTabs/NavTabs';
import { Link } from 'react-router-dom';
import {
  UserContextProvider,
  useUserContext,
} from '../../contexts/UserContext';
import { useAuthenticatedApiClient } from '../../services/authenticated-api-client';
import { Chat } from '../../Interfaces/Chat';

const ChatList: React.FC = () => {
  const [chatting, setChatting] = useState<Chat[]>();
  const { user } = useUserContext();
  const apiClient = useAuthenticatedApiClient();
  const getChats = () =>
    apiClient.getChats().then(({ data }) => setChatting(data));

  useEffect(() => {
    getChats();
  }, []);

  return (
    <>
      <NavBarTop />{' '}
      <NavTabs
        tabs={[
          { name: 'Favourites', endpoint: '/favourites' },
          { name: 'Chat', endpoint: '/chatlist' },
        ]}
      />{' '}
      {chatting?.map((chat) => {
        {
          console.log('this one', chatting);
        }
        return (
          <Link
            to={`/chatRoom/${chat._id}`}
            className="chatLinks"
            state={{ chat: chat, refresh: getChats() }}
          >
            {' '}
            <ChatContainer data={chat} refresh={getChats} />
          </Link>
        );
      })}
    </>
  );
};

export { ChatList };
