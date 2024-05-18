// Home.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { ChevronRight, CirclePlay } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);
  const [showsData, setShowsData] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=99d30588bfd77d386ee36fc6f1c766de"
    )
      .then((res) => res.json())
      .then((json) => {
        setMovieData(json.results);
        const randomIndex = Math.floor(Math.random() * json.results.length);
        setRandomMovie(json.results[randomIndex]);
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  };

  const getShows = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=99d30588bfd77d386ee36fc6f1c766de"
    )
      .then((res) => res.json())
      .then((json) => setShowsData(json.results))
      .catch((error) => console.error("Error fetching shows data:", error));
  };

  useEffect(() => {
    getMovies();
    getShows();
  }, []);

  console.log(movieData);
  console.log(showsData);

  const handleWatchTrailer = (data) => {
    localStorage.setItem("trailerData", JSON.stringify(data));
    navigate("/trailer");
  };

  

  // const handleWatchTrailer = async (data) => {
  //   localStorage.setItem("trailerData", JSON.stringify(data));
  //   await getVideos(data.id); // Fetch videos for the selected movie
  //   navigate("/trailer"); // Navigate to trailer page
  // };
{/* <div className="flex-shrink-0 w-60 md:hidden"></div> // */}
  return (
    <div className="flex w-full justify-center overflow-hidden">
    <div className="min-[1250px]:ml-[226px] overflow-y-auto flex-grow">
      <Navbar />
      {randomMovie && (
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
            alt="Random Movie Backdrop"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 left-3 md:left-10 lg:left-20 p-4 lg:p-8">
            <h1 className="text-white py-7 text-4xl md:text-6xl font-bold max-w-[800px]">
              {randomMovie.title}
            </h1>
            <p className="text-white text-sm md:text-base max-w-[300px] md:max-w-[500px]">
              {randomMovie.overview}
            </p>
            <div className="flex text-white items-center gap-5 my-4">
              <span className="font-semibold flex items-center gap-1">
                <img
                  className="px-1 h-5"
                  src="https://moviebox-ng.vercel.app/images/tmdb.svg"
                />
                <h1>{Math.round(randomMovie.vote_average)}/10</h1>
              </span>
              <span className="font-semibold flex items-center gap-1">
                <img
                  className=""
                  src="https://moviebox-ng.vercel.app/images/tomato.svg"
                />
                <h2>74%</h2>
              </span>
            </div>
            <div
              className="bg-rose-700 w-fit p-2 rounded-md hover:cursor-pointer"
              onClick={() => handleWatchTrailer(randomMovie)}
            >
              <a className="text-white hover:opacity-90 flex items-center gap-2">
                <CirclePlay className="w-5" /> Watch Trailer
              </a>
            </div>
          </div>
        </div>
      )}
      <section className="mt-10">
        <div className="max-w-[1300px] mx-auto py-0 px-5">
          <div className="flex justify-between w-full md:px-4 lg:px-10">
            <div className="flex items-center gap-4 md:gap-8 text-xl md:text-3xl font-bold">
              <FontAwesomeIcon
                className="text-rose-700"
                icon={faChartColumn}
              />
              <span>Featured Movies</span>
            </div>
            <div className="flex items-center text-base text-rose-700 font-semibold">
              <Link to="/movies" className="text-sm flex items-center">
                see more
                <ChevronRight className="ml-1 text-xsm" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid  max-sm-grid-cols-2 max-md:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-5 sm:gap-y-10 place-items-center items-start flex-col justify-start ">
            {movieData.slice(0, 9).map((data, index) => (
              <div key={index} onClick={() => handleWatchTrailer(data)}>
                <Card
                  key={index}
                  posterPath={data.poster_path}
                  title={data.title}
                  releaseDate={data.release_date}
                  rating={data.vote_average}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="max-w-[1300px] mx-auto py-0 px-5">
          <div className="flex justify-between w-full md:px-4 lg:px-10">
            <div className="flex items-center gap-4 md:gap-8 text-xl md:text-3xl font-bold">
              <FontAwesomeIcon
                className="text-rose-700"
                icon={faChartColumn}
              />
              <span>Featured TV Shows</span>
            </div>
            <div className="flex items-center text-base text-rose-700 font-semibold">
              <Link to="/tvshows" className="flex items-center">
                see more
                <ChevronRight className="ml-1 text-xsm" />
              </Link>
            </div>
          </div>
          <div className="mt-8 grid  max-sm-grid-cols-2 max-md:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-5 sm:gap-y-10 place-items-center items-start flex-col justify-start ">
            {showsData.slice(0, 9).map((data, index) => (
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
  );
};

export default Home;
