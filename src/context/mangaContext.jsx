import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { fetchMangaData } from "../services/MangaService";

const MangaContext = createContext();

export const useManga = () => useContext(MangaContext);

export const MangaProvider = ({ children }) => {
  const [mangaList, setMangaList] = useState(() => {
    const stored = localStorage.getItem("savedMangaList");
    return stored ? JSON.parse(stored) : [];
  });
  const [loading, setLoading] = useState(mangaList.length === 0);

  const [redirectedManga, setRedirectedManga] = useState(() => {
    const stored = localStorage.getItem("lastChosenManga");
    return stored ? JSON.parse(stored) : null;
  });

  // Persist redirectedManga to localStorage
  useEffect(() => {
    if (redirectedManga) {
      localStorage.setItem("lastChosenManga", JSON.stringify(redirectedManga));
    }
  }, [redirectedManga]);

  // Fetch manga list if not already loaded
  useEffect(() => {
    if (mangaList.length === 0) {
      const loadData = async () => {
        setLoading(true);
        try {
          const data = await fetchMangaData();
          const mangaArray = Array.isArray(data) ? data : [];
          setMangaList(mangaArray);
          localStorage.setItem("savedMangaList", JSON.stringify(mangaArray));
        } catch (error) {
          console.error("Error fetching manga data:", error);
          setMangaList([]);
        } finally {
          setLoading(false);
        }
      };
      loadData();
    }
  }, [mangaList]);

  const findByName = useCallback(
    (name) => {
      if (!Array.isArray(mangaList) || mangaList.length === 0) return null;
      const toUrl = (title) => title.toLowerCase().replace(/\s+/g, "-");
      return mangaList.find((m) => toUrl(m.title) === name) || null;
    },
    [mangaList]
  );

  return (
    <MangaContext.Provider
      value={{
        mangaList,
        loading,
        redirectedManga,
        setRedirectedManga,
        findByName,
      }}
    >
      {children}
    </MangaContext.Provider>
  );
};
