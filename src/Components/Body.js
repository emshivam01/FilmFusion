import axios from "axios";
import { useEffect, useState } from "react";

const Body = () => {
  const [rawName, setRawName] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(rawName);
    console.log(name);

    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=514d9b749a7a5c7aba15e6e5fe6b3c29`
      );
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInput = (e) => {
    const formattedName = rawName.replace(/\s+/g, "+");
    setName(formattedName);
    setRawName(e.target.value);
  };

  return (
    <div className="bg-white w-96 rounded-md shadow-lg p-2  ">
      <form onSubmit={handleSubmit} className="flex gap-8 flex-col p-4 ">
        <input
          className="p-3 border-2 border-blue-200 shadow-lg rounded-md focus:border-2 focus:border-blue-600 placeholder:text-lg text-lg"
          value={rawName}
          onChange={handleInput}
          placeholder="Enter Movie or TV Show name..."
        />
        <button className="bg-blue-600 text-white shadow-lg p-2 rounded-md">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Body;
