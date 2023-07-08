import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Body = ({ search, setSearch }) => {
  const [response, setResponse] = useState();

  const fetchMovie = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=514d9b749a7a5c7aba15e6e5fe6b3c29`
      );
      setResponse(res.data);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [search]);

  return (
    <div className="mx-20   flex flex-wrap justify-start my-20 ">
      {console.log(response)}
    </div>
  );
};

export default Body;
