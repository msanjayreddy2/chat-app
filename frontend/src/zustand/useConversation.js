import { create } from "zustand";

// const useConversation = create((set) => ({
//   selectedConversation: null,
//   setSelectedConversation: (selectedConversation) =>
//     set({ selectedConversation }),
//   messages: [],
//   setMessages: (messages) => set({ messages }),
// }));

// export default useConversation;
// import create from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null, // Initialize selectedConversation with null or appropriate default value
  setSelectedConversation: (conversation) =>
    set({ selectedConversation: conversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
  searchUser: "",
  setSearchUser: (searchUser) => set({ searchUser }),
}));

export default useConversation;
