import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useConversation from "../../zustand/useConversation";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastElementRef = useRef();
  // console.log(messages.length);
  useListenMessages();
  useEffect(() => {
    if (lastElementRef.current) {
      lastElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && (
        <>
          <div className="flex gap-4 items-center">
            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-end  ">
            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-end  ">
            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
        </>
      )}
      {!loading && messages.length === 0 && (
        <p className="text-center"> send a message to start conversation</p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((msg) => (
          <div key={msg._id} ref={lastElementRef}>
            <Message message={msg} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
