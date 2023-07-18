import React from "react";
import GradeIcon from "@mui/icons-material/Grade";

const descLength = 400;

const MovieCard = ({ title, poster_path, release_date, rating, overview }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const description =
    overview.length >= descLength ? overview.slice(0, descLength) : overview;

  const handleMouse = () => {
    setIsHovered(!isHovered);
  };

  const year = release_date.slice(0, 4);

  return (
    <div
      className="max-w-xs mx-auto bg-white shadow-xl rounded-lg overflow-hidden  flex flex-col m-3"
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
    >
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          className="w-80 h-[420px] object-cover shadow-xl "
        />
        <div
          className={`${
            isHovered ? "opacity-50" : "opacity-0"
          } transition-opacity duration-300 absolute inset-0 bg-black flex items-center justify-center`}
        >
          <p className="text-white text-center p-4">{description}</p>
        </div>
      </div>
      <div className="px-4 py-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-base font-medium text-gray-600">{year}</p>
        <div className="flex items-center mt-2">
          <GradeIcon style={{ fontSize: 20 }} />
          <p className="font-medium text-lg">{rating.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
