const getVideos = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        {
          params: {
            api_key: "99d30588bfd77d386ee36fc6f1c766de",
            language: "en-US",
          },
        }
      );
  
      const results = response.data.results;
      const trailerVideo = results.find((video) => video.name === "Official Trailer");
  
      if (trailerVideo) {
        return trailerVideo.key;
      } else {
        console.error("No trailer found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching video data:", error.response.data);
      return null;
    }
  };

  
  export default getVideos;