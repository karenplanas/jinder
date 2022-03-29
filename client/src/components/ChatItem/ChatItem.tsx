import React from 'react';
import { Chat } from '../../Interfaces/Chat';
import { Building } from '../icons/Building';
import { ImageHolder } from '../ImageHolder/ImageHolder';
import './ChatItem.css';

interface Props {
  chat: Chat;
}

const ChatItem: React.FC<Props> = ({ chat }) => {
  return (
    <div className=" chat_container_chat">
      <ImageHolder>
        <Building />
      </ImageHolder>
      <h6>{chat.employerUser.employerProfile.name}</h6>
    </div>
  );
};

export { ChatItem };
