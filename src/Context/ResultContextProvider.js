import axios from "axios";
import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search72.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("javascript");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await axios.get(`${baseUrl}${type}`, {
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      },
    });
    const { items } = response.data;

    if (type.includes("/search")) {
      setResults(items);
    } else if (type.includes("/imagesearch")) {
      setResults(items);
    }
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
