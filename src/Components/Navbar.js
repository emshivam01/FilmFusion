import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white flex justify-between items-center py-4 px-5 md:px-10 md:py-8 lg:px-20 w-full">
      <div>
        <h1 className="text-2xl lg:text-3xl"> FilmFusion</h1>
      </div>
      <div className="flex gap-8 items-center">
        <Link to="/signup">
          <button className="flex gap-2 items-center text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg px-2 py-1 lg:px-4 lg:py-2">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
