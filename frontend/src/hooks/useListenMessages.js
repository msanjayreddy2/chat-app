import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notification from "../sound/notification.mp3";
import { useAuthContext } from "../context/AuthContext";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { selectedConversation } = useConversation();
  const { messages, setMessages } = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (msg) => {
      const sound = new Audio(notification);
      //   console.log(id, msg, selectedConversation);
      if (msg.senderId === selectedConversation?._id) {
        sound.play();
        setMessages([...messages, msg]);
      }
    });

    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
