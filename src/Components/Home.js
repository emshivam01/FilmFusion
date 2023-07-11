import Body from "./Body";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Home = ({ search, setSearch }) => {
  return (
    <>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} />
      <Body search={search} setSearch={setSearch} />
    </>
  );
};

export default Home;
