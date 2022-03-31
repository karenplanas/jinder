import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import { Chat } from '../../Interfaces/Chat';
import { Building } from '../icons/Building';
import { ImageHolder } from '../ImageHolder/ImageHolder';
import './ChatItem.css';

interface Props {
  chat: Chat;
}

const ChatItem: React.FC<Props> = ({ chat }) => {
  const { user } = useUserContext();
  return (
    <div className=" chat_container_chat">
      <ImageHolder>
        <Building />
      </ImageHolder>
      {
        user?.type === 'jobseeker' ?
        <h6>{chat.employerUser.employerProfile?.name ? 
          chat.employerUser.employerProfile?.name :
          'Good Tech Co'
        }
        </h6> :
        <h6>{chat.jobSeekerUser?.firstName} {chat.jobSeekerUser?.lastName}</h6>
      }
    </div>
  );
};

export { ChatItem };
