import { useState } from "react";

import { account } from "../Appwrite/service";

import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signupUser = async (e) => {
    e.preventDefault();

    const promise = account.create(ID.unique(), email, password);

    promise.then(
      function (response) {
        console.log(response);
        navigate("/login");
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <div className=" w-full flex justify-center mt-20 md:mt-0 md:items-center h-screen">
      <div className=" p-10 rounded  w-auto  ">
        <h2 className="text-white text-2xl font-medium text-center mb-6">
          Sign Up
        </h2>
        <form onSubmit={signupUser} className=" flex flex-col ">
          <label className="text-white text-left" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="my-3 w-80 px-4 h-10 rounded outline-blue-600 bg-blue-800  text-white text-lg "
            type="text"
          />

          <label className="text-white text-left" htmlFor="email">
            Email
          </label>

          <input
            id="email"
            className="my-3 w-80 px-4 h-10 rounded outline-blue-600 bg-blue-800  text-white text-lg "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-white text-left" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="my-3 w-80 px-4 h-10 rounded outline-blue-600 bg-blue-800   text-white text-lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bg-blue-600 hover:bg-blue-500 h-10 text-xl font-medium mt-6 text-white rounded"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
