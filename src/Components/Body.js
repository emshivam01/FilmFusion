import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Card from "./Card";
import { account } from "./Appwrite/service";
import AppContext from "./AppContext";
import UserContext from "./UserContext";

const Body = ({ search, page, toast }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const { setUserDetails } = useContext(UserContext);

  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

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
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setPopularMovies(
          response.data.results.filter((item) => item.poster_path)
        );
      } catch (error) {
        console.log(error);
        console.log(error.message);
      }
    };
    fetchPopularMovies();
  }, [page]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=514d9b749a7a5c7aba15e6e5fe6b3c29`
        );
        setMovies(response.data.results.filter((item) => item.poster_path));
      } catch (error) {
        console.log(error);
        console.log(error.message);
      }
    };
    fetchMovies();
  }, [search]);

  return (
    <div className="">
      {search === "" && (
        <span className="text-3xl mx-auto block mt-4 underline underline-offset-4  text-center  lg:px-[90px]  text-white ">
          Popular Movies{" "}
        </span>
      )}

      <div className="my-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center align-content-start lg:px-20">
        {search === ""
          ? popularMovies.map((movie) => (
              <Card
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                rating={movie.vote_average}
                overview={movie.overview}
                release_date={movie.release_date}
              />
            ))
          : movies.map((movie) => (
              <Card
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                rating={movie.vote_average}
                overview={movie.overview}
                release_date={movie.release_date}
              />
            ))}
      </div>
    </div>
  );
};

export default Body;
