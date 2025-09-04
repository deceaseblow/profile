import { useState } from "react";
import ShowCard from "../comp/ShowsCard";
import { useAppData } from "../context/AppDataContext";
const fontStyle = {
  fontFamily: "'antsValley', sans-serif"
};
const Shows = () => {
  const { data, loading } = useAppData();
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  if (loading) return <p className="text-center mt-4">Loading shows...</p>;
  if (!data?.shows || data.shows.length === 0)
    return <p className="text-center text-gray-400">No shows available.</p>;

  const fuzzyMatch = (str, query) => {
    if (!str || !query) return false;
    str = str.toLowerCase();
    query = query.toLowerCase();
    return [...query].every((char) => str.includes(char));
  };

  const filteredShows = searchTerm
    ? data.shows.filter((show) => show.title && fuzzyMatch(show.title, searchTerm))
    : data.shows;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="pb-10 px-4 md:px-10">
      <h2 className="text-center text-[30px] font-bold mb-2  capitalize text-black tracking-wider border-b-4 border-black pb-2 md:text-start md:text-[40px]" style={fontStyle}>
        Shows
      </h2>
      <div className="flex flex-col items-center ">

        <input
          type="text"
          placeholder="Search shows..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="my-6 w-72 sm:w-80 px-4 py-2 rounded-full border border-gray-400 bg-white text-black font-mono text-sm sm:text-base
             focus:outline-none focus:ring-2 focus:ring-black focus:border-black
             placeholder-gray-500 placeholder:italic transition-all duration-200"
        />
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredShows.slice(0, visibleCount).map((show, index) => (
            <ShowCard key={index} show={show} />
          ))}
        </div>
        {visibleCount < filteredShows.length && (
          <button
            onClick={handleLoadMore}
            className="mt-6 px-6 py-3 bg-black hover:bg-[#fff] text-white font-semibold rounded-lg shadow-md transition duration-300 cursor-pointer hover:text-black"
          >
            Load More
          </button>
        )}
      </div></div>
  );
};

export default Shows;
