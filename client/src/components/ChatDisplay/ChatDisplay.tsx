import React from "react";
import "./ChatDisplay.css";
import ChatRoom from "../ChatRoom/ChatRoom";
import ChatInput from "../ChatInput/ChatInput";

const ChatDisplay: React.FC = () => {
  return (
    <>
      <ChatRoom />
      <ChatInput />
    </>
  );
};

export default ChatDisplay;
