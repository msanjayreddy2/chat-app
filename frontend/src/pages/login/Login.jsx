import React, { useState } from "react";
import { Link } from "react-router-dom";
import uselogin from "../../hooks/uselogin";

const Login = () => {
  const { loading, login } = uselogin();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-orange-300">
          Login
          <span className="text-gray-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label">
              <span className="label-base label-text">
                <b>Username</b>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-12"
              onChange={(e) => {
                setInputs({ ...inputs, username: e.target.value });
              }}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-base label-text">
                <b>Password</b>
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-12"
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
            />
          </div>

          <div>
            <button
              className="btn btn-block mt-5 "
              type="submit"
              onClick={handleSubmit}
            >
              {loading ? (
                <span
                  className={`${loading ? "loading loading-spinner" : ""}`}
                />
              ) : (
                "login"
              )}
            </button>
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have account ?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
