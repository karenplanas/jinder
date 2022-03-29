import React, { useEffect, useState } from 'react';
import './ChatRoom.css';
import { BackButton } from '../icons/BackButton';
import { VideoIcon } from '../icons/VideoIcon';
import { Building } from '../icons/Building';
import { Link, useParams } from 'react-router-dom';
import { Chat } from '../../Interfaces/Chat';
import { useAuthenticatedApiClient } from '../../services/authenticated-api-client';
import { useUserContext } from '../../contexts/UserContext';
import clsx from 'clsx';
// import { Chat } from '../icons/Chat';

const ChatRoom: React.FC = () => {
  const [formValue, setFormValue] = useState('');
  const [chat, setChat] = useState<Chat>();
  const { id } = useParams();
  const { user } = useUserContext()
  const apiClient = useAuthenticatedApiClient();
  const getChat = () => apiClient.getChat(id!).then(setChat)

  useEffect(() => {
    getChat()

    // https://stackoverflow.com/questions/53090432/react-hooks-right-way-to-clear-timeouts-and-intervals
    const timer = setInterval(getChat, 5000)

    return () => clearTimeout(timer)
  }, []);

  const handleSubmit = (data: any) => {
    apiClient.postMessage(id!, data).then(setChat)
  };

  return (
    <div className="chat_room_container">
      <div className="chat_room_nav">
        <div className="back_button">
          <Link to={'/chatList'}>
            <BackButton />
          </Link>
        </div>

        <div className="chat_company_container">
          <div className="company_logo_favourites">
            <Building />
          </div>

          {chat?.employerUser.employerProfile.name}
        </div>
        <div className="video_icon">
          <VideoIcon />
        </div>
      </div>
      <div className="chatLog">
        { chat?.messages.map((message) => {
          const isCurrentUser = message.senderId === user!._id

          return (
            <div key={message._id} className={clsx('ChatMessage', { 'current-user': isCurrentUser })}>
              {message.content}
            </div>
          )
        })}
      </div>
      <div className="input_area">
        <form className="message_form" onSubmit={handleSubmit}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="enter message here..."
          />
          <input type="submit" className="submit_button" />
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
