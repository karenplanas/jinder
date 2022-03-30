import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../../contexts/roomContext";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";

export const VideoRoom = () => {
  const { id } = useParams();
  const { ws, me, stream } = useContext(RoomContext);

  useEffect(() => {
    if (me) ws.emit("join-room", { roomId: id, peerId: me._id });
  }, [id, me, ws]);
  return (
    <>
      room id{id}
      <div>
        {" "}
        <VideoPlayer stream={stream} />{" "}
      </div>
    </>
  );
};
