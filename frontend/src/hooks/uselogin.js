import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import useLogout from "./useLogout";

const uselogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const { logout } = useLogout();
  const login = async ({ username, password }) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      // const res = await fetch("http://localhost:5000/api/");
      console.log(res);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error);
      }

      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("user-info", JSON.stringify(data));
      setTimeout(() => {
        localStorage.removeItem("user-info");
        logout();
      }, 24 * 60 * 60 * 1000);
      setAuthUser(data);
      toast.success("login successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default uselogin;
