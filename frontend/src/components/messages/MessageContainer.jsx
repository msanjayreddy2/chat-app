import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { AiTwotoneMessage } from "react-icons/ai";

const MessageContainer = () => {
  const chatselected = false;

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {chatselected ? (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold">Sanjay</span>
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
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p className="text-black">Welcome Sanjay</p>
        <p className="text-black">Select a chat to start messaging</p>
        <AiTwotoneMessage className="text-3xl md:text-6xl text-center text-black" />
      </div>
    </div>
  );
};
