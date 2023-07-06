import data from "./LocalData/Data";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { useState } from "react";
import { Link } from "react-router-dom";
const descLength = 100;

const Card = () => {
  const shortDesc =
    data.results[0].overview.length > descLength
      ? data.results[0].overview.slice(0, descLength)
      : data.results[0].overview;

  const [isMarked, setIsMarked] = useState(false);

  return (
    <div className="w-72 border-2 max-w-lg shadow-xl p-3 rounded-xl flex flex-col  ">
      <div className="flex justify-center items-center">
        <img
          className="w-full h-80 shadow-lg rounded-md"
          src={`https://image.tmdb.org/t/p/original${data.results[0].poster_path}`}
          alt="Poster"
        />
      </div>
      <div className="flex justify-between items-center mt-4 ">
        <h2 className="font-bold">{data.results[0].title}</h2>
        <button onClick={() => setIsMarked(!isMarked)}>
          {isMarked ? <TurnedInIcon /> : <TurnedInNotIcon />}
        </button>
      </div>
      <p title={data.results[0].overview} className="mt-2">
        {shortDesc}
      </p>
    </div>
  );
};

export default Card;
