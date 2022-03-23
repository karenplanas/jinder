import React, { useState } from "react";
import "./ChatInput.css";

const ChatInput: React.FC = () => {
  const [textArea, setTextArea] = useState("");
  return (
    <div className="chat_input_container">
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="send_message"></button>
    </div>
  );
};

export default ChatInput;
