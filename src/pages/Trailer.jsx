import React, { useState, useEffect } from "react";
import { Eye, Star, List, Clock, Calendar } from "lucide-react";
import { useParams } from "react-router-dom";
import Similar from "../components/Similar";
import Span from "../components/Span";
import axios from "axios";
import { ChevronRight } from "lucide-react";

const Trailer = () => {
  const [videoKey, setVideoKey] = useState(null);
  const [trailerData, setTrailerData] = useState();
  const [similarMovies, setSimilarMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const { id } = useParams();

  const getVideos = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=99d30588bfd77d386ee36fc6f1c766de&language=en-US`
      );
  
      const json = response.data; // Axios already parses JSON
  
      if (json.results && json.results.length > 0) {
        const trailerVideo = json.results.find(
          (video) => video.name === "Official Trailer"
        );
  
        if (trailerVideo) {
          setVideoKey(trailerVideo.key);
        } else {
          console.error("No trailer found");
        }
      } else {
        console.error("No results found in the API response");
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  const getSimilarMovies = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=99d30588bfd77d386ee36fc6f1c766de&language=en-US`
      );
      const json = await response.json();

      if (json.results && json.results.length > 0) {
        setSimilarMovies(json.results);
        console.log("similar movies:", similarMovies); // Log similar movies
      } else {
        console.error("No similar movies found");
      }
    } catch (error) {
      console.error("Error fetching similar movies:", error);
    }
  };

  const getMovieGenres = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=99d30588bfd77d386ee36fc6f1c766de&language=en-US&append_to_response=genres`
      );
      const json = await response.json();

      if (json.genres && json.genres.length > 0) {
        const genres = json.genres.map((genre) => genre.name);
        setGenres(genres);
        console.log("Genres:", genres);
        return genres;
      } else {
        console.error("No genres found for this movie");
        return [];
      }
    } catch (error) {
      console.error("Error fetching movie genres:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getVideos(id);
      await getSimilarMovies(id);
      await getMovieGenres(id); // Call getMovieGenres as well
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchDataFromLocalStorage = async () => {
      const data = localStorage.getItem("trailerData");
      if (data) {
        const parsedData = JSON.parse(data);
        setTrailerData(parsedData);
        await getVideos(parsedData.id);
        await getSimilarMovies(parsedData.id);
        await getMovieGenres(parsedData.id); // Call getMovieGenres as well
      }
    };

    fetchDataFromLocalStorage();
  }, []);

  if (!trailerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full overflow-hidden">
      {/* <div className="hidden md:block flex-shrink-0 w-60"></div> */}
      <div className="min-[1250px]:ml-[226px] overflow-y-auto flex-grow">
        <div className="p-5 w-full ">
        {videoKey && (
        <div className="relative h-[450px] md:h-full  pb-[46.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-[450px] md:h-full"
            src={`https://www.youtube.com/embed/${videoKey}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Iframe Example"
          ></iframe>
        </div>
      )}  
        </div>

        <section className="mt-5 mx-auto max-w-[1000px]">
          <div className="flex max-md:flex-col pb-10 max-lg:px-4 items-start justify-start">
            <div className="md:w-[75%]  max-md:border-none border-r p-2 border-r-gray-200">
              <div className="pb-5">
                <h1 className="text-2xl font-medium">{trailerData.title}</h1>
                <div className="flex gap-2 items-center justify-start m-2">
                  {genres.map((genre, index) => (
                    <Span key={index} genreName={genre} />
                  ))}
                </div>
                <div className="mt-4 flex flex-col gap-4">
                  <p className="text-sm leading-2">{trailerData.overview}</p>
                  <p className="text-base leading-2">
                    Director(s):{" "}
                    <span className="text-rose-700">Mike Mitchell.</span>
                  </p>
                  <p className="text-base leading-2">
                    Writers(s):{" "}
                    <span className="text-rose-700">Yet to be known</span>
                  </p>
                  <p className="text-base leading-2">
                    Stars(s):{" "}
                    <span className="text-rose-700">
                      Jack Black, Awkwafina, Bryan Cranston, Viola Davis.
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="flex items-center text-xl mb-5 font-semibold">
                  Similar movies <ChevronRight className="ml-2 w-5 h-5" />
                </h3>
                <div className="flex flex-wrap items-center mt-8  gap-4">
                  {similarMovies.slice(0, 6).map((simData, index) => (
                    <Similar key={index} simPosterPath={simData.poster_path} />
                  ))}
                </div>
              </div>
            </div>

            <div className="max-md:mt-10 grow pl-2">
              <div className="  text-rose-700 flex items-center md:justify-end gap-2">
                <span className="border-r-2 pr-2 border-gray-200 flex gap-1 items-center text-lg font-bold ">
                  <Star className="text-orange-300 " />
                  {trailerData.vote_average}
                </span>
                <span className="text-lg text-rose-700 font-bold">
                  {trailerData.vote_count} votes{" "}
                </span>
              </div>
              <div className="flex flex-col justify-center gap-2 mt-6 items-center">
                <div className="w-full hover:cursor-pointer flex text-white bg-rose-700 font-medium justify-center items-center gap-2 rounded-lg py-3">
                  <Eye />
                  see showtimes
                </div>
                <div className="w-full hover:cursor-pointer flex  bg-rose-200 border border-rose-700 text-black font-medium justify-center items-center gap-2 rounded-lg py-3">
                  <List />
                  More Watch options
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <p className="flex items-center gap-2 font-medium">
                  <Clock />
                  Runtime: 94 mins
                </p>
                <p className="flex items-center gap-2 font-medium">
                  <Calendar />
                  Release Date <span>Sat, 04 Mar 2024 00:00:00 GMT</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Trailer;



