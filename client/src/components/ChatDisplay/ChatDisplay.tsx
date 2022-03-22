import React from "react";
import "./ChatDisplay.css";
import Chat from "../Chat/Chat";
import ChatInput from "../ChatInput/ChatInput";

const ChatDisplay: React.FC = () => {
  return (
    <>
      <Chat />
      <ChatInput />
    </>
  );
};

export default ChatDisplay;
