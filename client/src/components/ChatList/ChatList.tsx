import React, { useEffect, useState } from 'react';
import { ChatItem } from '../ChatItem/ChatItem';
import { NavTabs } from '../NavTabs/NavTabs';
import { Link } from 'react-router-dom';
import { useAuthenticatedApiClient } from '../../services/authenticated-api-client';
import { Chat } from '../../Interfaces/Chat';
import { AppLayout } from '../AppLayout/AppLayout';
import { useUserContext } from '../../contexts/UserContext';
import './ChatList.css';

const tabs = [
  { name: 'Favourites', endpoint: '/favourites' },
  { name: 'Chat', endpoint: '/chatlist' },
]

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>();
  const apiClient = useAuthenticatedApiClient();
  const getChats = () => apiClient.getChats().then(setChats);
  const { user } = useUserContext();

  useEffect(() => {
    getChats();
  }, []);

  return (
    <AppLayout title='Messages'>
      { user?.type === 'jobseeker' && <NavTabs tabs={tabs} />  }
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
