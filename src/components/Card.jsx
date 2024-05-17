import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Card = ({ posterPath, title, releaseDate, rating, id }) => {
  const roundedRating = Math.round(rating);
  return (
    <div
      className="hover:cursor-pointer"
    >
      <div className="relative flex group space-y-2 flex-col  max-w-[90%] md:max-w-[250px]">
        <img
          className="rounded-t-xl w-40 h-60 md:w-60 md:h-80 relative"
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
        />

        <div className="flex items-center justify-center text-gray-300 w-9 h-9 rounded-full py-2 px-3 bg-glass-gray shadow-glass absolute top-[9px] right-6">
          <FontAwesomeIcon icon={faHeart} />
        </div>

        <div className="">
          <span className="text-xs">USA, {releaseDate}</span>
          <h1>{title}</h1>
          <div className="flex items-center justify-between gap-1">
            <span className="font-semibold flex items-center gap-1">
              <img
                className="px-1 h-5"
                src="https://moviebox-ng.vercel.app/images/tmdb.svg"
                alt="TMDB Logo"
              />
              <h1>{roundedRating}/10</h1>
            </span>
            <span className="font-semibold flex items-center gap-1">
              <img
                className=""
                src="https://moviebox-ng.vercel.app/images/tomato.svg"
                alt="Tomato Logo"
              />
              <h2>74%</h2>
            </span>
          </div>
          <span className="text-muted-foreground text-xs font-normal">
            Action,Thriller
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
