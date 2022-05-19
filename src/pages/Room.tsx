import styled from "styled-components";
import { useSockets } from "../context/socket.context";
import { useRecoilValue } from "recoil";
import { myRoomAtom } from "../atoms";
import { useForm } from "react-hook-form";
import { AddMessages } from "../utils/socketUtils";

const Wrapper = styled.div``;
const Main = styled.div``;
const Timer = styled.div``;
const UserCam = styled.div``;
const Chat = styled.div``;

function Room() {
  const roomName = useRecoilValue(myRoomAtom);
  const { socket, messages, setMessages } = useSockets();
  const { register, handleSubmit, setValue } = useForm();

  socket.on("welcome", (name) => {
    setMessages([...messages, `${name} Joined the Room!`]);
  });
  socket.on("bye", (name) => {
    setMessages([...messages, `${name} Leftㅠㅠ`]);
  });
  const onSubmit = (data) => {
    socket.emit("new_message", data.msg, roomName, () => {
      setMessages([...messages, `You: ${data.msg}`]);
    });
    setValue("msg", "");
  };
  socket.on("new_message", (msg) => {
    setMessages([...messages, msg]);
  });
  return (
    <Wrapper>
      <Main>
        <Timer>Room : {roomName}</Timer>
        <UserCam>
          <div></div>
        </UserCam>
      </Main>
      <Chat>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("msg")} placeholder="write message" />
          <button>Send</button>
        </form>
        <AddMessages msg={messages} />
      </Chat>
    </Wrapper>
  );
}

export default Room;
