import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Card from "./Card";

const Body = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=514d9b749a7a5c7aba15e6e5fe6b3c29"
      );
      setPopularMovies(response.data.results);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=514d9b749a7a5c7aba15e6e5fe6b3c29`
      );
      setMovies(response.data.results.filter((item) => item.poster_path));
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  }, [search]);

  useEffect(() => {
    fetchPopularMovies();
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="my-10  grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
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
  );
};

export default Body;
