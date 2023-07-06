import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
