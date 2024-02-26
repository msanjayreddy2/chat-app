import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmpassword,
      gender,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmpassword,
          gender,
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
      setAuthUser(data);
      toast.success("Signup successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmpassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmpassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("Password and confirm password must be identical");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
};

export default useSignup;
