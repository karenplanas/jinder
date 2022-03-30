import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PeerState } from "../../contexts/peerReducer";
import { RoomContext } from "../../contexts/roomContext";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import { Button } from "../Button/Button";
import "./VideoRoom.css";
import { useNavigate } from "react-router-dom";

export const VideoRoom = () => {
  const { id } = useParams();
  const { ws, me, stream, peers } = useContext(RoomContext);
  const navigate = useNavigate();

  const endMeeting = () => {
    navigate("/videoChat");
  };

  useEffect(() => {
    if (me) ws.emit("join-room", { roomId: id, peerId: me._id });
  }, [id, me, ws]);
  return (
    <div className="video_player">
      <h6 className="room_id">Room id: {id}</h6>
      <VideoPlayer stream={stream} />{" "}
      {Object.values(peers as PeerState).map((peer) => {
        return <VideoPlayer stream={peer.stream} />;
      })}
      <div className="meeting_controls">
        <Button text="invite to meeting" />
        <Button text="end meeting" onClick={endMeeting} />
      </div>
    </div>
  );
};
