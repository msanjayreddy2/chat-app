import React from "react";
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      {/* <button className="start"> */}
      <BiLogOut className="w-6 h-6 text-black cursor-pointer" />
      {/* </button> */}
    </div>
  );
};

export default LogoutButton;
