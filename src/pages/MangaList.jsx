import { useState } from "react";
import MangaCard from "../comp/MangaCard";
import { useManga } from "../context/mangaContext";

const fontStyle = {
  fontFamily: "'antsValley', sans-serif"
};

const MangaList = () => {
  const { mangaList, loading } = useManga();
  const [visibleReading, setVisibleReading] = useState(5);   // limit for reading
  const [visibleWillRead, setVisibleWillRead] = useState(5); // limit for planned/will-read
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return <p className="text-center text-lg">Loading manga...</p>;
  }

  // fuzzy search
  const fuzzyMatch = (str, query) => {
    if (!str || !query) return false;
    str = str.toLowerCase();
    query = query.toLowerCase();
    return [...query].every((char) => str.includes(char));
  };

  const filteredMangas = searchTerm
    ? mangaList.filter(
      (manga) => manga.title && fuzzyMatch(manga.title, searchTerm)
    )
    : mangaList;

  // split by status
  const readingMangas = filteredMangas.filter(
    (manga) => manga.status === "reading"
  );
  const willReadMangas = filteredMangas.filter(
    (manga) => manga.status !== "reading"
  );

  return (
    <div className="pb-10 px-4 md:px-10">
      <h2
        className="text-center text-[30px] font-bold mb-2 capitalize text-black tracking-wider border-b-4 border-black pb-2 md:text-start md:text-[40px]"
        style={fontStyle}
      >
        Manga List ! ( will be updated ! ^-^ )
      </h2>

      <div className="flex flex-col items-center justify-center">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search manga..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-6 px-6 py-3 border-4 border-black bg-white text-black font-mono text-md
               focus:outline-none focus:bg-black focus:text-white focus:placeholder-gray-300
               w-80 uppercase tracking-wider transition-all duration-200 shadow-lg
               placeholder-gray-600 placeholder:font-bold"
          style={{
            boxShadow: "6px 6px 0px black",
            imageRendering: "pixelated",
            textShadow: "1px 1px 0px rgba(255,255,255,0.5)"
          }}
        />

        {/* READING LIST */}
        <h3 className="text-center text-[30px] font-bold mb-2 capitalize text-black tracking-wider border-b-4 border-black pb-2 md:text-start md:text-[32px]"
          >To-be Read</h3>
        <div className="p-3 flex flex-wrap gap-6 justify-center">
          {readingMangas.slice(0, visibleReading).map((manga, index) => (
            <MangaCard key={`reading-${index}`} manga={manga} />
          ))}
        </div>
        {visibleReading < readingMangas.length && (
          <button
            onClick={() => setVisibleReading((prev) => prev + 5)}
            className="mt-4 px-6 py-3 bg-black hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md transition duration-300 cursor-pointer"
          >
            Load More
          </button>
        )}

        {/* WILL READ LIST */}
        <h3  className="text-center text-[30px] font-bold mb-2 mt-4 capitalize text-black tracking-wider border-b-4 border-black pb-2 md:text-start md:text-[32px]">Read / Fav list</h3>
        <div className="p-3 flex flex-wrap gap-6 justify-center">
          {willReadMangas.slice(0, visibleWillRead).map((manga, index) => (
            <MangaCard key={`willread-${index}`} manga={manga} />
          ))}
        </div>
        {visibleWillRead < willReadMangas.length && (
          <button
            onClick={() => setVisibleWillRead((prev) => prev + 5)}
            className="mt-4 px-6 py-3 bg-black hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md transition duration-300 cursor-pointer"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default MangaList;
