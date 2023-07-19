import { Link, useNavigate } from "react-router-dom";
import { account } from "./Appwrite/service";
import { useContext } from "react";
import AppContext from "./AppContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const navigate = useNavigate();

  const logOutUser = async () => {
    try {
      const data = await account.deleteSession("current");

      // console.log(data);
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className="text-white flex justify-between items-center py-4 px-5 md:px-10 md:py-8 lg:px-20 w-full">
      <div>
        <Link to="/">
          <h1 className="text-2xl font-medium lg:text-3xl">FilmFusion</h1>
        </Link>
      </div>
      <div className="flex gap-8  items-center">
        <Link className="text-white text-xl" to="/watchlist">
          Watchlist
        </Link>

        {!isLoggedIn && (
          <Link to="/login">
            <button className="flex gap-2 items-center text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg px-2 py-1 lg:px-4 lg:py-2">
              Log in
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <button
            onClick={logOutUser}
            className="flex gap-2 items-center text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg px-2 py-1 lg:px-4 lg:py-2"
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
