import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, apiKey, backendUrl } from "../../config";
import Promise from "bluebird";
import { headers } from "../../authHelpers";

const useMovie = (
  movieId,
  getFavourite,
  setFavouriteList,
  favouriteList,
  variant,
  http = axios
) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovieData = async () => {
    console.log(headers);
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
          headers
        })
      });

      console.log("--> movie fetch", movie.data);

      const favouriteMovie = getFavourite(movieId);

      setMovie({ ...movie.data, ...cast.data, ...favouriteMovie });
      setLoading(false);
    } catch (error) {
      console.error("movieById not loading", error);
    }
  };

  useEffect(() => {
    fetchMovieData();
    return setMovie(null);
  }, []);

  const createReview = (movie, event) => {
    const newFavourites = [...favouriteList].map(favouriteMovie => {
      if (favouriteMovie.id === movie.id) {
        favouriteMovie.review = event.target.value;
      }
      return favouriteMovie;
    });
    setFavouriteList(newFavourites);
  };

  const deleteReview = movie => {
    const newFavourites = [...favouriteList].map(favouriteMovie => {
      if (favouriteMovie.id === movie.id) {
        delete favouriteMovie.review;
      }
      return favouriteMovie;
    });
    setFavouriteList(newFavourites);
  };

  const setRating = async (movie, rating) => {
    const newFavourites = [...favouriteList].map(favouriteMovie => {
      if (favouriteMovie.id === movie.id) {
        favouriteMovie.rating = rating;
      }
      return favouriteMovie;
    });
    setFavouriteList(newFavourites);
  };

  const setWatched = movie => {
    const newFavourites = [...favouriteList].map(favouriteMovie => {
      if (favouriteMovie.id === movie.id) {
        favouriteMovie.watched = !favouriteMovie.watched;
      }
      return favouriteMovie;
    });
    setFavouriteList(newFavourites);
  };

  return {
    movie,
    setMovie,
    loading,
    createReview,
    deleteReview,
    setWatched,
    setRating
  };
};

export default useMovie;
