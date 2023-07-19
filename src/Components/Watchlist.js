import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import AppContext from "./AppContext";
import { databases } from "./Appwrite/service";
import WatchListCard from "./WatchlistCard";
import { Query } from "appwrite";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import { account } from "./Appwrite/service";

const Watchlist = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const { userDetails, setUserDetails } = useContext(UserContext);

  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  const getBookmark = async () => {
    try {
      if (isLoggedIn && userDetails) {
        const data = await databases.listDocuments(
          "64af8ec9a356d65ce49f",
          "64af8ed0e06368474ca3",
          [Query.equal("userId", [userDetails.$id])]
        );
        setMovies(data.documents);
      } else {
        // console.log("Login First");
        navigate("/");
      }
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    const getUserDetails = () => {
      const data = account.get();

      data.then(
        function (response) {
          setUserDetails(response);
          setIsLoggedIn(true);
        },
        function (error) {}
      );
    };
    getUserDetails();
  }, []);

  useEffect(() => {
    getBookmark();
  }, [isLoggedIn, userDetails]);

  return (
    <>
      <Navbar />

      <div className="my-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center align-content-start lg:px-20">
        {movies.map((movie) => {
          return (
            <WatchListCard
              rating={movie.rating}
              poster_path={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              release_date={movie.release_date}
              id={movie.$id}
              key={movie.$id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Watchlist;
