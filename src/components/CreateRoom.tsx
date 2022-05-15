import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { myRoomAtom } from "../atoms";
import { useSockets } from "../context/socket.context";

function CreateRoom() {
  const setRoom = useSetRecoilState(myRoomAtom);
  const navigate = useNavigate();
  const { socket } = useSockets();
  const { register, handleSubmit } = useForm();

  const EnterRoom = () => {
    navigate("/room");
  };

  const onSubmit = (data) => {
    setRoom(data.room);
    socket.emit("enter_room", data.room, EnterRoom);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("room")} placeholder="Room Name" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateRoom;
