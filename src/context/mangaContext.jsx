import { createContext, useContext, useEffect, useState } from "react";
import { fetchMangaData } from "../services/MangaService";

const MangaContext = createContext();

export const useManga = () => useContext(MangaContext);

export const MangaProvider = ({ children }) => {
  const [mangaList, setMangaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchMangaData();
      setMangaList(data);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <MangaContext.Provider value={{ mangaList, loading }}>
      {children}
    </MangaContext.Provider>
  );
};
