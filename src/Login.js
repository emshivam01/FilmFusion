import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { account } from "./Appwrite/service";
import AppContext from "./AppContext";

import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import UserContext from "./UserContext";

const Login = ({ toast }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLoggedIn } = useContext(AppContext);
  const { setUserDetails } = useContext(UserContext);

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();

    const promise = account.createEmailSession(email, password);

    promise.then(
      function (response) {
        setIsLoggedIn(true);
        setUserDetails(response);
        navigate("/");
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <div className=" w-full flex justify-center mt-20 md:mt-0 md:items-center h-screen">
      <div className="absolute top-10 left-10  ">
        <Link to="/">
          <button className=" bg-blue-600 shadow-lg rounded-full  text-white ">
            <div className="hover:-translate-x-1 transition duration-100 p-2">
              <NavigateBeforeRoundedIcon style={{ fontSize: 35 }} />
            </div>
          </button>
        </Link>
      </div>

      <div className=" p-10 rounded  w-auto  ">
        <h2 className="text-white text-2xl font-medium text-center mb-6">
          Login
        </h2>
        <form onSubmit={loginUser} className=" flex flex-col ">
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

          <div className="text-white mt-4">
            <span>Don't have an account yet ?</span>{" "}
            <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
