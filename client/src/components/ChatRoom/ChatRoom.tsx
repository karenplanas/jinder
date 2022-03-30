import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { BackButton } from "../icons/BackButton";
import { VideoIcon } from "../icons/VideoIcon";
import { Building } from "../icons/Building";
import { Link, useParams } from "react-router-dom";
import { Chat } from "../../Interfaces/Chat";
import { useAuthenticatedApiClient } from "../../services/authenticated-api-client";
import { useUserContext } from "../../contexts/UserContext";
import { FormProvider, useForm } from "react-hook-form";
import { Message } from "../../Interfaces/Message";
import { InputTextField } from "../InputTextField/InputTextField";
import { Button } from "../Button/Button";
import { ImageHolder } from "../ImageHolder/ImageHolder";
import "./ChatRoom.css";

const ChatRoom: React.FC = () => {
  const [chat, setChat] = useState<Chat>();
  const { id } = useParams();
  const { user } = useUserContext();
  const apiClient = useAuthenticatedApiClient();
  const getChat = () => apiClient.getChat(id!).then(setChat);

  useEffect(() => {
    getChat();
  }, []);

  const methods = useForm<Message>({
    defaultValues: {
      senderId: "",
      content: "",
      sentAt: "",
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
          <Link to={"/chatlist"}>
            <ImageHolder>
              <BackButton />
            </ImageHolder>
          </Link>
        </div>

        <div className="chat_company_container">
          <h3>{chat?.employerUser.employerProfile?.name}</h3>
          <Building />
        </div>
        <div className="video_icon">
          <Link to={"/videoChat"}>
            <VideoIcon />
          </Link>
        </div>
      </div>
      <div className="chatLog">
        {chat?.messages.map((message) => {
          const isCurrentUser = message.senderId === user!._id;
          return (
            <div
              key={message._id}
              className={clsx("ChatMessage", { "current-user": isCurrentUser })}
            >
              {message.content}
            </div>
          );
        })}
      </div>
      <div className="input_area">
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <div className="ChatRoom-Input-Send">
              <div className="ChatRoom-Input">
                <InputTextField name="content"></InputTextField>
              </div>
              <div>
                <Button text="Send" type="submit" variant="outlined"></Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export { ChatRoom };
