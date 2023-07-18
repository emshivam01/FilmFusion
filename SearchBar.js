const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex items-center gap-2  mt-10 mb-6 ">
      <input
        value={search}
        placeholder="Enter movie name..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-80 md:w-96 lg:w-[600px] rounded-md h-12 p-3 text-center outline-none text-lg placeholder:text-lg placeholder:text-black placeholder:text-center"
      />
    </div>
  );
};

export default SearchBar;
