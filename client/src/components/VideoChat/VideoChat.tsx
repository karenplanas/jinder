import { useContext } from "react";
import { Button } from "../Button/Button";
import { RoomContext } from "../../contexts/roomContext";
import { AppLayout } from "../AppLayout/AppLayout";
import "./VideoChat.css";

const VideoChat: React.FC = () => {
  const { ws } = useContext(RoomContext);
  const createRoom = () => {
    ws.emit("create-room");
  };
  return (
    <AppLayout title="Meeting room">
      <div className="video_chat_container">
        <Button text="start new meeting" onClick={createRoom}></Button>
        <Button text="join a meeting" className="join a meeting"></Button>
      </div>
    </AppLayout>
  );
};

export { VideoChat };
