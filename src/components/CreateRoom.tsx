import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { usernameVar } from "../apollo";
import { myRoomAtom } from "../atoms";
import { useSockets } from "../context/socket.context";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.RoomListColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  form {
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
    input {
    }
  }
`;

function CreateRoom() {
  const setRoom = useSetRecoilState(myRoomAtom);
  const username = usernameVar();
  const navigate = useNavigate();
  const { socket } = useSockets();
  const { register, handleSubmit } = useForm();

  const EnterRoom = () => {
    navigate("/room");
  };

  const onSubmit = (data) => {
    setRoom(data.room);
    socket.emit("username", username);
    socket.emit("enter_room", data.room, EnterRoom);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("room")} placeholder="Room Name" />
        <input type="submit" />
      </form>
    </Wrapper>
  );
}

export default CreateRoom;
