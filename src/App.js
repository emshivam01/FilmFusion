import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Login from "./Components/Login";
import AppContext from "./Components/AppContext";
import Watchlist from "./Components/Watchlist";
import { UserProvider } from "./Components/UserContext";
import { ToastContainer } from "react-toastify";

function App() {
  const [search, setSearch] = useState("Thor");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App flex flex-col items-center">
      <UserProvider>
        <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Home search={search} setSearch={setSearch} />}
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
            <ToastContainer />
          </BrowserRouter>
        </AppContext.Provider>
      </UserProvider>
    </div>
  );
}

export default App;
