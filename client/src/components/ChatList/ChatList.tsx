import React, { useEffect, useState } from 'react';
import './ChatList.css';
import { ChatItem } from '../ChatItem/ChatItem';
import { NavBarTop } from '../NavBarTop/NavBarTop';
import { NavTabs } from '../NavTabs/NavTabs';
import { Link } from 'react-router-dom';
import { useAuthenticatedApiClient } from '../../services/authenticated-api-client';
import { Chat } from '../../Interfaces/Chat';
import { AppLayout } from '../AppLayout/AppLayout';

const tabs = [
  { name: 'Favourites', endpoint: '/favourites' },
  { name: 'Chat', endpoint: '/chatlist' },
]

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>();
  const apiClient = useAuthenticatedApiClient();
  const getChats = () => apiClient.getChats().then(setChats);

  useEffect(() => {
    getChats();
  }, []);

  return (
    <AppLayout title='Messages'>
      <NavTabs tabs={tabs} />
      {chats?.map((chat) => {
        return (
          <Link to={`/chatRoom/${chat._id}`} className="chatLinks">
            <ChatItem chat={chat} />
          </Link>
        );
      })}
    </AppLayout>
  );
};

export { ChatList };
