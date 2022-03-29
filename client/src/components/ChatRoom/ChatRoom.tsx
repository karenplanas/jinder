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
import { FormProvider, useForm } from 'react-hook-form';
import { Message } from '../../Interfaces/Message';
import { InputTextField } from '../InputTextField/InputTextField';
import { Button } from '../Button/Button';
// import { Chat } from '../icons/Chat';

const ChatRoom: React.FC = () => {
  const [chat, setChat] = useState<Chat>();
  const { id } = useParams();
  const { user } = useUserContext();
  const apiClient = useAuthenticatedApiClient();
  const getChat = () => apiClient.getChat(id!).then(setChat);

  useEffect(() => {
    console.log(id);
    getChat();

    // https://stackoverflow.com/questions/53090432/react-hooks-right-way-to-clear-timeouts-and-intervals
    // const timer = setInterval(getChat, 5000);

    // return () => clearTimeout(timer);
  }, []);

  const methods = useForm<Message>({
    defaultValues: {
      senderId: '',
      content: '',
      sentAt: '',
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit((data: any) => {
    apiClient.postMessage(id!, data).then((res) => {
      setChat((prevState) => {
        if (!prevState) return undefined;
        reset();
        return { ...prevState, messages: res.messages };
      });
    });
  });

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
        {chat?.messages.map((message) => {
          const isCurrentUser = message.senderId === user!._id;

          return (
            <div
              key={message._id}
              className={clsx('ChatMessage', { 'current-user': isCurrentUser })}
            >
              {message.content}
            </div>
          );
        })}
      </div>
      <div className="input_area">
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <InputTextField name="content"></InputTextField>
            <div>
              <Button text="Send message" type="submit"></Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ChatRoom;
