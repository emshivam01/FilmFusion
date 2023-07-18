import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useEffect } from "react";

const Pagination = ({ page, setPage }) => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    goToTop();
  }, [page]);

  return (
    <div className=" text-white flex items-center gap-8 mt-4 mb-10 ">
      <div>
        <button
          onClick={prevPage}
          className=" bg-blue-600 shadow-lg rounded-full  "
        >
          <div className="hover:-translate-x-1 transition duration-100 p-3">
            <NavigateBeforeIcon />
          </div>
        </button>
      </div>

      <div>
        <span className="text-xl">{`${page} of  50`}</span>
      </div>
      <div>
        <button
          onClick={nextPage}
          className=" bg-blue-600 shadow-lg rounded-full  "
        >
          <div className="hover:translate-x-1 transition duration-100 p-3">
            <NavigateNextIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
