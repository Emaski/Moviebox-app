import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";

const Tvshows = () => {

    const [showsData, setShowsData] = useState([]);

    const getShows = () => {
        fetch("https://api.themoviedb.org/3/discover/tv?api_key=99d30588bfd77d386ee36fc6f1c766de")
        .then(res => res.json())
        .then(json => setShowsData(json.results))
        .catch(error => console.error('Error fetching data:', error));
    } 

    useEffect(() => {
        getShows();
    }, []);

    console.log(showsData);

  return (
    <div className="flex w-full overflow-hidden">
    <div className="flex-shrink-0 w-60"></div>{" "}
    {/* Placeholder for fixed sidebar width */}
    <div className="overflow-y-auto flex-grow">
      
      
      <section className="mt-10">
          <div className="max-w-[1300px] mx-auto py-0 px-5">
            <div className="">
              <div className="flex items-center gap-8 text-3xl ml-10 font-bold">
                <FontAwesomeIcon
                  className="text-rose-700"
                  icon={faChartColumn}
                />
                <span>Featured TV Shows</span>
              </div>
            </div>
            <div className="mt-8 grid max-sm-grid-cols-2 max-md:grid-cols-3 md:grid-cols-3 gap-x-2 gap-y-5 sm:gap-y-10 place-items-center items-start flex-col justify-start ">
              {showsData.map((data, index) => (
                <Card
                  key={index}
                  posterPath={data.poster_path}
                  title={data.name}
                  releaseDate={data.first_air_date}
                  rating={data.vote_average}
                />
              ))}
            </div>
          </div>
        </section>
    </div>
  </div>
  )
}

export default Tvshows
