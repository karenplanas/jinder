import React, { useEffect, useState } from "react";
import { Favourite } from "../../Interfaces/favourite";
import "./ChatRoom.css";
import { useLocation } from "react-router-dom";
import { BackButton } from "../icons/BackButton";
import { VideoIcon } from "../icons/VideoIcon";
import { Building } from "../icons/Building";
import { Link } from "react-router-dom";

const ChatRoom: React.FC = () => {
  const [formValue, setFormValue] = useState("");
  const [messages, setMessages] = useState([]);
  const propsy: any = useLocation();
  const chat: any = propsy.state.chat;

  useEffect(() => {
    setMessages(chat.messages);
  }, []);

  const handleSubmit = () => {};

  return (
    <div className="chat_room_container">
      <div className="chat_room_nav">
        <div className="back_button">
          <Link to={"/chatList"}>
            {" "}
            <BackButton />
          </Link>
        </div>

        <div className="chat_company_container">
          <div className="company_logo_favourites">
            {" "}
            <Building />
          </div>

          {chat.companyname}
        </div>
        <div className="video_icon">
          <VideoIcon />
        </div>
      </div>
      <div className="chatLog">
        {messages.map((message) => {
          <p>{message}</p>;
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
