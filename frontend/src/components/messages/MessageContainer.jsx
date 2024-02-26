import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { AiOutlineGateway, AiTwotoneMessage } from "react-icons/ai";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  // useEffect(() => {
  //   return () => setSelectedConversation(null);
  // }, [selectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {selectedConversation ? (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 flex justify-start">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold mx-4">
              {selectedConversation.fullname}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
  return;
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  // console.log(authUser);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p className="text-black">Welcome {authUser.fullName}</p>
        <p className="text-black">Select a chat to start messaging</p>
        <AiTwotoneMessage className="text-3xl md:text-6xl text-center text-black" />
      </div>
    </div>
  );
};
