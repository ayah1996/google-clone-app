import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../Context/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { results, searchTerm, getResults, isLoading } = useResultContext();

  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/image") {
        getResults(`/imagesearch?q=${searchTerm}`);
      } else {
        getResults(`${location.pathname}?q=${searchTerm}&num=20`);
      }
    }
  }, [location.pathname, searchTerm]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between items-start space-y-6 sm:px-56">
          {results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link?.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/image":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({ title, contextLink, thumbnailImageUrl }, index) => (
            <a
              className="sm:p-3 p-5"
              href={contextLink}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img src={thumbnailImageUrl} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );

    default:
      return "ERROR";
  }
};

export default Results;
