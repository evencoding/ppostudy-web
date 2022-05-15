import styled from "styled-components";
import { useRef } from "react";
import { useSockets } from "../context/socket.context";
import { useRecoilValue } from "recoil";
import { myRoomAtom } from "../atoms";

const Wrapper = styled.div``;
const Main = styled.div``;
const Timer = styled.div``;
const UserCam = styled.div``;
const Chat = styled.div``;

function Messages() {
  const { messages } = useSockets();
  return (
    <>
      {messages && (
        <div>
          {messages.map(({ message }, index: number) => {
            return <li key={index}>{message}</li>;
          })}
        </div>
      )}
    </>
  );
}

function Room() {
  const roomName = useRecoilValue(myRoomAtom);
  const { socket, messages, setMessages } = useSockets();
  // const mes: any = messages;
  const messageRef: any = useRef(null);
  console.log(messages);

  function handleClick() {
    const message = messageRef.current.value;
    if (!String(message).trim()) return;

    socket.emit("sendMessage", message);

    messageRef.current.value = "";
  }

  socket.on("responseMessage", (message) => {
    console.log(message);
    setMessages([...messages, message]);
    console.log(messages);
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
        <input type="text" ref={messageRef} placeholder="write message" />
        <button onClick={handleClick}>Send</button>
        <Messages />
      </Chat>
    </Wrapper>
  );
}

export default Room;
