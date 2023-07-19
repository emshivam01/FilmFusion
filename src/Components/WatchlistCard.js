import React, { useState } from "react";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import GradeIcon from "@mui/icons-material/Grade";
import { databases } from "./Appwrite/service";

const WatchListCard = ({
  title,
  poster_path,
  release_date,
  rating,
  overview,
  id,
}) => {
  const [isMarked, setIsMarked] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = () => {
    setIsHovered((prevIsHovered) => !prevIsHovered);
  };

  const removeBookMark = async () => {
    try {
      const data = await databases.deleteDocument(
        "64af8ec9a356d65ce49f",
        "64af8ed0e06368474ca3",
        id
      );
      setIsMarked(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-xs w-full bg-white shadow-xl rounded-sm overflow-hidden flex flex-col m-3">
      <div
        className="relative flex justify-center items-center"
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        <img
          className="w-80 h-[400px] object-cover object-top shadow-xl"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={`${title} - Poster`}
        />
        {isHovered && (
          <div className="opacity-60 transition-opacity duration-300 absolute inset-0 bg-black flex items-center justify-center">
            <p className="text-white text-center p-4">{overview}</p>
          </div>
        )}
      </div>
      <div className="flex justify-between p-2">
        <div>
          <h2 title={title} className="font-bold text-lg">
            {title}
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex gap-1 items-center">
              <GradeIcon style={{ fontSize: 20 }} />
              <p className="font-medium text-lg">{rating}</p>
            </div>
            <span className="font-medium text-lg">{release_date}</span>
          </div>
        </div>
        <button
          onClick={removeBookMark}
          className="flex mt-[6px]"
          title="Add/Remove to watchlist"
        >
          {isMarked ? (
            <TurnedInIcon style={{ fontSize: 25 }} />
          ) : (
            <TurnedInNotIcon style={{ fontSize: 25 }} />
          )}
        </button>
      </div>
    </div>
  );
};

export default WatchListCard;
