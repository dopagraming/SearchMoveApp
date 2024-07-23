import { type } from "@testing-library/user-event/dist/type";
import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseURL =
  "https://google-web-search1.p.rapidapi.com/?query=hello&limit=10&related_keywords=true";
const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [searchTrem, setSearchTrem] = useState();
  const [isloading, setIsLoading] = useState(false);
  const getResult = async () => {
    setIsLoading(true);
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "363992672emsh29bca67333e0f03p1db9ddjsn8652211ee6a3",
        "X-RapidAPI-Host": "google-web-search1.p.rapidapi.com",
      },
    });
    const data = await response.json();
    setResult(data);
    setIsLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{ getResult, result, setSearchTrem, searchTrem, isloading }}
    >
      {children}
    </ResultContext.Provider>
  );
};
export default ResultContextProvider;
export const useResultContext = () => useContext(ResultContext);
