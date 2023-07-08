import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex items-center gap-2  mt-14 ">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-72 rounded-md h-12 p-3 outline-none text-lg placeholder:text-lg "
      />
      <button className="text-white h-12 p-3 bg-blue-600 rounded-md">
        <SearchIcon style={{ fontSize: "30px" }} />
      </button>
    </div>
  );
};

export default SearchBar;
