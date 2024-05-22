import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  const getMovies = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=99d30588bfd77d386ee36fc6f1c766de")
      .then(res => res.json())
      .then(json => setMovieData(json.results))
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    getMovies();
  }, []);

  // Function to handle click event for watching trailer
  const handleWatchTrailer = (data) => {
    localStorage.setItem("trailerData", JSON.stringify(data));
    navigate("/trailer");
  };

  return (
    <div className="flex w-full justify-center overflow-hidden">
      {/* <div className="flex-shrink-0 w-60"></div>{" "} */}
      {/* Placeholder for fixed sidebar width */}
      <div className="min-[1250px]:ml-[226px] overflow-y-auto flex-grow">
        {/* <Navbar /> */}
        <section className="mt-10">
          <div className="max-w-[1300px] mx-auto py-0 px-5">
            <div className="flex w-full md:px-4 lg:px-10">
              <div className="flex items-center gap-8 text-2xl md:text-3xl font-bold">
                <FontAwesomeIcon
                  className="text-rose-700"
                  icon={faChartColumn}
                />
                <span>Featured Movies</span>
              </div>
            </div>
            <div className="mt-8 grid max-sm:grid-cols-2 max-md:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-5 sm:gap-y-10 place-items-center items-start flex-col justify-start">
              {movieData.map((data, index) => (
                <div key={data.id} onClick={() => handleWatchTrailer(data)}>
                  <Card
                    key={data.id}
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
      </div>
    </div>
  );
}

export default Movies;