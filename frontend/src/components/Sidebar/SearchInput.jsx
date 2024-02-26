import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";

const SearchInput = () => {
  const { searchUser, setSearchUser } = useConversation();

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSearch}>
      <input
        type="test"
        placeholder="Search"
        className=" input input-bordered rounded-full"
        value={searchUser}
        onChange={(e) => {
          setSearchUser(e.target.value);
        }}
      />
      <button type="submit" className="btn btn-circle bg-blue-500 text-white">
        <MdOutlineSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
