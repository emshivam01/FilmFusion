const Navbar = () => {
  return (
    <div className="text-white flex justify-around items-center p-4">
      <div>
        <h1 className="text-xl"> FilmFusion</h1>
      </div>
      <div className="flex gap-8 items-center">
        <h2 className="text-xl">Watchlist</h2>
        <button className="text-xl bg-slate-300 text-black rounded-lg shadow-lg px-2 py-1">
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
