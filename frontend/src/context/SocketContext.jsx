import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setonlineUsers] = useState([]);
  const { authUser } = useAuthContext();
  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:8000", {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        // console.log(users);
        setonlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  // console.log(onlineUsers);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
