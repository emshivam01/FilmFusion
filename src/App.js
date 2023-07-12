import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App flex flex-col items-center">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home search={search} setSearch={setSearch} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
