import React, { useState } from "react";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import GradeIcon from "@mui/icons-material/Grade";

const descLength = 400;
const titleLength = 30;

const Card = ({ title, poster_path, release_date, rating, overview }) => {
  const [isMarked, setIsMarked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = () => {
    setIsHovered((prevIsHovered) => !prevIsHovered);
  };

  const description =
    overview && overview.length >= descLength
      ? `${overview.slice(0, descLength)}...`
      : overview;
  const newTitle =
    title.length >= titleLength ? `${title.slice(0, titleLength)}...` : title;

  const toggleMarked = () => {
    setIsMarked((prevIsMarked) => !prevIsMarked);
  };

  return (
    <div
      className="max-w-[345px] w-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col m-3"
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
    >
      <div className="relative flex justify-center items-center">
        <img
          className="w-96 h-[420px] object-cover object-top shadow-xl"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={`${title} - Poster`}
        />
        {isHovered && (
          <div className="opacity-60 transition-opacity duration-300 absolute inset-0 bg-black flex items-center justify-center">
            <p className="text-white text-center p-4">{description}</p>
          </div>
        )}
      </div>
      <div className="flex justify-between p-2">
        <div>
          <h2 title={title} className="font-bold text-lg">
            {newTitle}
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex gap-1 items-center">
              <GradeIcon style={{ fontSize: 20 }} />
              <p className="font-medium text-lg">{rating.toFixed(1)}</p>
            </div>
            <span className="font-medium text-lg">
              {release_date.slice(0, 4)}
            </span>
          </div>
        </div>
        <button
          className="flex mt-[6px]"
          title="Add to watchlist"
          onClick={toggleMarked}
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

export default Card;
