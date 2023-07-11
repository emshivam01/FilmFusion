import { useState } from "react";

import { account } from "../Appwrite/service";

import { v4 as uuidv4 } from "uuid";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = async (e) => {
    e.preventDefault();

    const promise = account.create(uuidv4(), email, password);

    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <div className=" w-full flex justify-center items-center h-screen">
      <div className=" w-full p-4">
        <form onSubmit={signupUser} className="flex flex-col items-center">
          <input
            className="my-4 w-80 p-3 rounded-md outline-blue-600 bg-blue-800  text-white text-lg "
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="my-4 w-80 p-3 rounded-md outline-blue-600 bg-blue-800   text-white text-lg"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bg-blue-600 px-3 py-1 text-xl mt-4 text-white rounded"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
