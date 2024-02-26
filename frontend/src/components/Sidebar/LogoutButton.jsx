import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
// import useConversation from "../../zustand/useConversation";

const LogoutButton = () => {
  // const { selectedConversation, setSelectedConversation } = useConversation();
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-black cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner" />
      )}
    </div>
  );
};

export default LogoutButton;
