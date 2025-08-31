import { useState } from "react";
import MangaCard from "../comp/MangaCard";
import { useManga } from "../context/mangaContext";

const MangaList = () => {
  const { mangaList, loading } = useManga();
  const [visibleCount, setVisibleCount] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  if (loading) {
    return <p className="text-center text-lg">Loading manga...</p>;
  }

  // Fuzzy match function
  const fuzzyMatch = (str, query) => {
    if (!str || !query) return false;
    str = str.toLowerCase();
    query = query.toLowerCase();
    return [...query].every((char) => str.includes(char));
  };

  // Show all mangas if searchTerm is empty, otherwise filter
  const filteredMangas = searchTerm
    ? mangaList.filter((manga) => manga.title && fuzzyMatch(manga.title, searchTerm))
    : mangaList;

  return (
    <div className="flex flex-col items-center pb-10 px-3 justify-center">
      <h1 className="text-[40px] font-mono font-bold py-3 text-center">
        Manga List ! ( will be updated ! ^-^ )
      </h1>

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
          boxShadow: '6px 6px 0px black',
          imageRendering: 'pixelated',
          textShadow: '1px 1px 0px rgba(255,255,255,0.5)'
        }}
      />

      <div className="p-3 flex flex-wrap gap-6 justify-center">
        {filteredMangas.slice(0, visibleCount).map((manga, index) => (
          <MangaCard key={index} manga={manga} />
        ))}
      </div>

      {visibleCount < filteredMangas.length && (
        <button
          onClick={handleLoadMore}
          className="mt-6 px-6 py-3 bg-[#000] hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md transition duration-300 cursor-pointer"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default MangaList;
