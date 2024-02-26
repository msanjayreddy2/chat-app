import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";

const Conversations = () => {
  let { loading, conversations } = useGetConversations();
  const { searchUser } = useConversation();
  // console.log(conversations);
  if (searchUser !== "" && conversations.length > 0) {
    conversations = conversations.filter((item) => {
      return item.fullname.toLowerCase().includes(searchUser.toLowerCase());
    });
  }

  return (
    <div className="py-2 flex flex-col overflow-y-auto ">
      {loading && (
        <span className="loading loading-spinner mx-auto my-auto h-[450px]"></span>
      )}
      {conversations.map((cn, indx) => {
        return (
          <Conversation
            key={cn._id}
            data={cn}
            lst={indx === conversations.length - 1}
            profile={cn.profilePic}
          />
        );
      })}
    </div>
  );
};

export default Conversations;
