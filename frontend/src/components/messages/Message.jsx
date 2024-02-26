import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";
import useListenMessages from "../../hooks/useListenMessages";

const Message = (props) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  // console.log(props.message);
  const dir = props.message.senderId === authUser._id;

  // console.log(authUser, selectedConversation);
  // console.log(dir);
  let imgUrl;
  if (dir) {
    imgUrl = authUser.profilePic;
  } else {
    imgUrl = selectedConversation.profilePic;
  }
  const chatcolour = dir ? "bg-green" : "bg-blue-500";
  return (
    <div className={`chat ${dir ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={imgUrl} />
        </div>
      </div>

      <div className={`chat-bubble ${chatcolour} `}>
        {props.message.message}
      </div>
      <div className="chat-footer opacity-50 text-black">
        {extractTime(props.message.createdAt)}
      </div>
    </div>
  );
};

export default Message;
