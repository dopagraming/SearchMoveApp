import React, { useEffect } from "react";
import { useResultContext } from "../Context/ResultContext";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";
const Results = () => {
  const location = useLocation();
  const { getResult, result, setSearchTrem, searchTrem, isloading } =
    useResultContext();
  useEffect(() => {
    getResult();
  }, []);
  if (isloading) return <Loading />;
  switch (location.pathname) {
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {/* {result?.results?.map(({ url, title }, index) => (
            <div key={index} className="md:2-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
              </a>
              <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                {title}
              </p>
            </div>
          ))} */}
        </div>
      );
      break;
    case "/":
      return "hhhhhhh";
      break;
    case "/imges":
      return "imges";
      break;
    case "/vidoes":
      return "vidoes";
      break;

    default:
      return "ERROR";
      break;
  }
};

export default Results;
