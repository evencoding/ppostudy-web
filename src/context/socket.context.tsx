import { useContext, createContext, useState } from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../config/default";

type Messages =
  | {
      message: string;
      username: string;
      time: string;
    }[]
  | any;

interface Context {
  socket: Socket;
  setUsername: Function;
  messages?: Messages;
  setMessages: Function;
}

const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({
  socket,
  setUsername: () => false,
  setMessages: () => false,
});

function SocketsProvier(props: any) {
  const [messages, setMessages] = useState([]);

  return (
    <SocketContext.Provider
      value={{ socket, messages, setMessages }}
      {...props}
    />
  );
}

export const useSockets = () => useContext(SocketContext);

export default SocketsProvier;
