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

      console.log("--> movie fetch", { variant, date: movie.data });

      // const favouriteMovie = getFavourite(movieId);

      setMovie({ ...movie.data, ...cast.data });
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

  const postRating = async (movie, rating) => {
    try {
      const params = {
        method: "post",
        url: backendUrl + `favourites/rate`,
        data: { movieId: movie.id, rating: rating },
        headers
      };
      await axios(params);
    } catch (error) {
      console.error("Unable to post rating", error);
    }
  };

  const setRating = async (movie, rating) => {
    try {
      await postRating(movie, rating);

      return setMovie({
        ...movie,
        rating
      });
    } catch (error) {
      console.error("Unable to set rating on modal", error);
    }
  };

  const postWatched = async movie => {
    try {
      const params = {
        method: "post",
        url: backendUrl + `favourites/watched`,
        data: { movieId: movie.id, watchedStatus: true },
        headers
      };
      await axios(params);
    } catch (error) {
      console.error("Unable to post watched status", error);
    }
  };

  const setWatched = async movie => {
    try {
      if (!movie.watchedStatus) {
        await postWatched(movie);
        return setMovie({
          ...movie,
          watchedStatus: true
        });
      } else {
        await postWatched(movie);
        return setMovie({
          ...movie,
          watchedStatus: null
        });
      }

      // const newFavourites = [...favouriteList].map(favouriteMovie => {
      //   if (favouriteMovie.id === movie.id) {
      //     favouriteMovie.watched = !favouriteMovie.watched;
      //   }
      //   return favouriteMovie;
      // });
      // setFavouriteList(newFavourites);
    } catch (error) {
      console.error("Unable to set Watched status", error);
    }
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
