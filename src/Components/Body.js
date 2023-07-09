import Card from "./Card";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const Body = ({ search, setSearch }) => {
  const [response, setResponse] = useState();

  const fetchMovie = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=514d9b749a7a5c7aba15e6e5fe6b3c29`
      );
      setResponse(res.data);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchMovie();
    };

    fetchData();
  }, [search, fetchMovie]);

  return (
    <div className="my-10 mx-5  flex flex-wrap  justify-start ">
      {response &&
        response?.results.map((item, index) => {
          return (
            <Card
              title={item.title}
              poster_path={item?.poster_path}
              rating={item?.vote_average}
              key={item.id}
              overview={item.overview}
              release_date={item.release_date}
            />
          );
        })}
    </div>
  );
};

export default Body;
