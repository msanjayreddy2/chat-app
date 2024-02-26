import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();
  const handleGenderInput = (gender) => {
    // console.log(gender);
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(typeof inputs);
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-orange-300">
          Signup
          <span className="text-gray-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
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
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
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
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(E) =>
                setInputs({ ...inputs, password: E.target.value })
              }
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
              value={inputs.confirmpassword}
              onChange={(E) =>
                setInputs({ ...inputs, confirmpassword: E.target.value })
              }
            />
          </div>
          <GenderCheckbox
            ongender={handleGenderInput}
            selectedgender={inputs.gender}
          />

          <div>
            <button className="btn btn-block mt-2" type="submit">
              {loading ? (
                <span
                  className={`${loading ? "loading loading-spinner" : ""}`}
                />
              ) : (
                "Signup"
              )}
            </button>
          </div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            switch to login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
