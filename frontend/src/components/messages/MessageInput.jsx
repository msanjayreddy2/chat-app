import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import useConversation from "../../zustand/useConversation";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim() !== "") {
      await sendMessage(message.trim());
      setMessage("");
    }
  };
  console.log();
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-red"
          type="submit"
        >
          {loading ? <span className="loading loading-spinner" /> : <BsSend />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
