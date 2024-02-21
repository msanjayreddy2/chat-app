import React from "react";

const Login = () => {
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
            />
          </div>

          <div>
            <button className="btn btn-block mt-2 ">Login</button>
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have account
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
