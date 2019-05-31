import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, apiKey } from "../config";
import Promise from "bluebird";

const useMovie = (movieId, getFavourite, http = axios) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(0);

  const fetchMovieData = async event => {
    const { movie, cast } = await Promise.props({
      cast: http(`${baseUrl}movie/${movieId}/credits?api_key=${apiKey}`),
      movie: http(`${baseUrl}movie/${movieId}?api_key=${apiKey}`)
    });

    const favouriteMovie = getFavourite(movieId);

    setMovie({ ...movie.data, ...cast.data, ...favouriteMovie });
    setLoading(false);
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
