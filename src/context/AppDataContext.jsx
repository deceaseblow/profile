import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppDataContext = createContext();

export const useAppData = () => useContext(AppDataContext);

export const AppDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppData = async () => {
      try {
        const response = await axios.get("./data.json");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data.json:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAppData();
  }, []);

  const getLinks = () => {
    return data?.links || [];
  };

  return (
    <AppDataContext.Provider value={{ data, loading, getLinks }}>
      {children}
    </AppDataContext.Provider>
  );
};
