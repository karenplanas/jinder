import { useContext } from "react";
import { Button } from "../Button/Button";
import { RoomContext } from "../../contexts/roomContext";

const VideoChat: React.FC = () => {
  const { ws } = useContext(RoomContext);
  const createRoom = () => {
    ws.emit("create-room");
  };
  return (
    <div className="video_chat_container">
      {" "}
      <Button text="start new meeting" onClick={createRoom}></Button>
    </div>
  );
};

export { VideoChat };
