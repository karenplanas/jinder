import React from 'react';
import { Chat } from '../../Interfaces/Chat';
import { Favourite } from '../../Interfaces/favourite';
import { Building } from '../icons/Building';
import './ChatContainer.css';

interface Props {
  data: Chat;
  refresh: () => void;
}

const ChatContainer: React.FC<Props> = ({ data, refresh }) => {
  return (
    <div className=" chat_container_chat">
      <div className="company_logo_favourites">
        <Building />
      </div>
      <h6>{data.employerUser.employerProfile.name}</h6>
    </div>
  );
};

export { ChatContainer };
