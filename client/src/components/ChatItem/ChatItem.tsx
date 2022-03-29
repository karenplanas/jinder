import React from 'react';
import { Chat } from '../../Interfaces/Chat';
import { Building } from '../icons/Building';
import './ChatItem.css';

interface Props {
  chat: Chat;
}

const ChatItem: React.FC<Props> = ({ chat }) => {
  return (
    <div className=" chat_container_chat">
      <div className="company_logo_favourites">
        <Building />
      </div>
      <h6>{chat.employerUser.employerProfile.name}</h6>
    </div>
  );
};

export { ChatItem };
