import { useState } from "react";
import ShowCard from "../comp/ShowsCard";
import { useAppData } from "../context/AppDataContext";

const Shows = () => {
  const { data, loading } = useAppData();
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  if (loading) return <p className="text-center mt-4">Loading shows...</p>;
  if (!data?.shows || data.shows.length === 0)
    return <p className="text-center text-gray-400">No shows available.</p>;

  // Fuzzy match function: letters in any order
  const fuzzyMatch = (str, query) => {
    if (!str || !query) return false;
    str = str.toLowerCase();
    query = query.toLowerCase();
    return [...query].every((char) => str.includes(char));
  };

  // Show all if searchTerm is empty, otherwise filter using fuzzy match
  const filteredShows = searchTerm
    ? data.shows.filter((show) => show.title && fuzzyMatch(show.title, searchTerm))
    : data.shows;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="flex flex-col items-center pb-10 px-4 md:px-10">
      <h1 className="text-3xl font-bold py-3">Shows List</h1>
      <input
        type="text"
        placeholder="Search shows..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 px-6 py-3 border-4 border-black bg-white text-black font-mono text-md
               focus:outline-none focus:bg-black focus:text-white focus:placeholder-gray-300
               w-80 uppercase tracking-wider transition-all duration-200 shadow-lg
               placeholder-gray-600 placeholder:font-bold"
        style={{
          boxShadow: '6px 6px 0px black',
          imageRendering: 'pixelated',
          textShadow: '1px 1px 0px rgba(255,255,255,0.5)'
        }}
      />
      <div className="flex flex-wrap gap-6 justify-center">
        {filteredShows.slice(0, visibleCount).map((show, index) => (
          <ShowCard key={index} show={show} />
        ))}
      </div>
      {visibleCount < filteredShows.length && (
        <button
          onClick={handleLoadMore}
          className="mt-6 px-6 py-3 bg-black hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md transition duration-300 cursor-pointer"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Shows;
