import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = (props) => {
  const { selectedConversation, setSelectedConversation, setSearchUser } =
    useConversation();
  const isSelected = selectedConversation?._id == props.data._id;
  const { onlineUsers } = useSocketContext();
  let active = onlineUsers.includes(props.data._id);

  return (
    <>
      <div
        className={`flex gap-4 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-purple-500" : ""
        }`}
        onClick={() => {
          setSelectedConversation(props.data);
          setSearchUser("");
        }}
      >
        <div className={`avatar${active ? " online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={props.profile} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-grey-200">{props.data.fullname}</p>
          </div>
        </div>
      </div>
      {!props.lst && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
