import { useState } from "react";
import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SerchBar";

function App() {
  const [search, setSearch] = useState("ocean ");

  return (
    <div className="App flex flex-col items-center">
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} />
      <Body search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
