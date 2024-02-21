import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-orange-300">
          Signup
          <span className="text-gray-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="label-base label-text">
                <b>FullName</b>
              </span>
            </label>
            <input
              type="test"
              placeholder="Enter name"
              className="w-full input input-bordered h-12"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-base label-text">
                <b>userame</b>
              </span>
            </label>
            <input
              type="test"
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
            <label className="label">
              <span className="label-base label-text">
                <b>ConfirmPassword</b>
              </span>
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full input input-bordered h-12"
            />
          </div>
          <GenderCheckbox />

          <div>
            <button className="btn btn-block mt-2 ">Signup</button>
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            switch to login
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signup;
