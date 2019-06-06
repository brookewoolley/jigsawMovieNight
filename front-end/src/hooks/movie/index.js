import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, apiKey, backendUrl } from "../../config";
import Promise from "bluebird";
import { headers } from "../../authHelpers";

const useMovie = (movieId, getFavourite, variant, http = axios) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(0);

  const fetchMovieData = async () => {
    try {
      const { movie, cast } = await Promise.props({
        cast: http(`${baseUrl}movie/${movieId}/credits?api_key=${apiKey}`),
        movie: http({
          method: "GET",
          url:
            backendUrl +
            (variant === "favourites"
              ? `favourites/${movieId}`
              : `films/${movieId}`),
          ...headers
        })
      });

      console.log("--> movie", movie);

      const favouriteMovie = getFavourite(movieId);

      setMovie({ ...movie.data, ...cast.data, ...favouriteMovie });
      setLoading(false);
    } catch (error) {
      console.error("movieById not loading", error);
    }
  };

  const onUpdate = () => {
    const newUpdate = update + 1;
    setUpdate(newUpdate);
  };

  useEffect(() => {
    fetchMovieData();
    return setMovie(null);
  }, [update]);

  return {
    movie,
    setMovie,
    loading,
    onUpdate
  };
};

export default useMovie;
