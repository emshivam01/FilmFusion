import data from "./LocalData/Data";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import GradeIcon from "@mui/icons-material/Grade";
import { useState } from "react";
const descLength = 100;

const Card = () => {
  const shortDesc =
    data.results[0].overview.length > descLength
      ? data.results[0].overview.slice(0, descLength)
      : data.results[0].overview;

  const [isMarked, setIsMarked] = useState(false);

  return (
    <div className="bg-[#F9F5F6] w-[300px] max-w-lg shadow-xl p-[10px] rounded-lg flex flex-col m-3 ">
      <div className="flex justify-center items-center">
        <img
          className="w-full h-80 shadow-xl rounded-md"
          src={`https://image.tmdb.org/t/p/original${data.results[0].poster_path}`}
          alt="Poster"
        />
      </div>
      <div className="flex justify-between mt-2 ">
        <div>
          <h2 className="font-bold text-lg">{data.results[0].title}</h2>
          <div className="flex gap-8">
            <div className="flex gap-1 items-center">
              <GradeIcon style={{ fontSize: 20 }} />
              <p className="font-medium text-lg">
                {data.results[0].vote_average.toFixed(1)}
              </p>
            </div>
          </div>
        </div>
        <button
          className="flex mt-[6px]"
          title="Add to watchlist"
          onClick={() => setIsMarked(!isMarked)}
        >
          {isMarked ? (
            <TurnedInIcon style={{ fontSize: 25 }} />
          ) : (
            <TurnedInNotIcon style={{ fontSize: 25 }} />
          )}
        </button>
      </div>
      <p title={data.results[0].overview} className="mt-1">
        {shortDesc}
      </p>
    </div>
  );
};

export default Card;
