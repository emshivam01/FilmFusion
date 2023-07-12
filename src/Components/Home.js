import Body from "./Body";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { useState } from "react";

const Home = ({ search, setSearch }) => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} />
      <Body search={search} page={page} />
      {search === "" && <Pagination page={page} setPage={setPage} />}
    </>
  );
};

export default Home;
