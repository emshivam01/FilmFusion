const Navbar = () => {
  return (
    <div className="text-white flex justify-between items-center py-4 px-5 w-full">
      <div>
        <h1 className="text-2xl"> FilmFusion</h1>
      </div>
      <div className="flex gap-8 items-center">
        <button className="flex gap-2 items-center text-lg bg-blue-600 text-white rounded-lg shadow-lg px-2 py-1">
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
