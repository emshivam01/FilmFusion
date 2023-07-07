import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SerchBar";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Navbar />
      <SearchBar />
      <Body />
    </div>
  );
}

export default App;
