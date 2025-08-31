import { useState } from "react";
import ShowsCard from "../comp/ShowsCard"; // could be renamed MovieCard
import { useAppData } from "../context/AppDataContext";
const fontStyle = {
  fontFamily: "'antsValley', sans-serif"
};
const Movies = () => {
  const { data, loading } = useAppData();
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  if (loading) return <p className="text-center mt-4">Loading movies...</p>;
  if (!data?.movies || data.movies.length === 0)
    return <p className="text-center text-gray-400">No movies available.</p>;

  const fuzzyMatch = (str, query) => {
    if (!str || !query) return false;
    str = str.toLowerCase();
    query = query.toLowerCase();
    return [...query].every((char) => str.includes(char));
  };
  const filteredMovies = searchTerm
    ? data.movies.filter((movie) => movie.title && fuzzyMatch(movie.title, searchTerm))
    : data.movies;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="pb-10 px-4 md:px-10">
     <h2 className="text-center text-[30px] font-bold mb-2  capitalize text-black tracking-wider border-b-4 border-black pb-2 md:text-start md:text-[40px]" style={fontStyle}>
      Movies
    </h2>
      <div className="flex flex-col items-center ">

        <input
          type="text"
          placeholder="Search movies..."
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
          {filteredMovies.slice(0, visibleCount).map((movie, index) => (
            <ShowsCard key={index} show={movie} />
          ))}
        </div>

        {visibleCount < filteredMovies.length && (
          <button
            onClick={handleLoadMore}
            className="mt-6 px-6 py-3 bg-black hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md transition duration-300 cursor-pointer"
          >
            Load More
          </button>
        )}
      </div></div>
  );
};

export default Movies;
