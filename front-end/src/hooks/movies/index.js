import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, apiKey, backendUrl } from "../../config";
import { headers } from "../../authHelpers";

const useMovies = (initialState = []) => {
  const [value, setValue] = useState("");
  const [popularList, setPopularList] = useState([]);
  const [favouriteList, setFavouriteList] = useState(initialState);

  const fetchPopularData = async () => {
    try {
      const params = {
        method: "get",
        url: backendUrl + "films",
        ...headers
      };
      const { data } = await axios(params);

      setPopularList(data);
    } catch (err) {
      console.error("nahh mate", err);
    }
  };

  useEffect(() => {
    fetchPopularData();
  }, []);

  const searchMovies = async event => {
    setValue(event.target.value);
    if (!event.target.value) {
      fetchPopularData();
    } else {
      const res = await fetch(
        `${baseUrl}search/movie?api_key=${apiKey}&query=${event.target.value}`
      );

      const parsedRes = await res.json();

      return setPopularList(parsedRes.results);
    }
  };

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

  const favouriteMovie = movie => {
    const newFavourites = [...favouriteList, movie];
    isFavourite(movie)
      ? deleteFavouriteMovie(movie)
      : setFavouriteList(newFavourites);
  };

  const isFavourite = movie => {
    const result = favouriteList.filter(
      favouriteMovie => favouriteMovie.id === movie.id
    );
    return !!result.length;
  };

  const clearSearch = () => {
    setValue("");
    fetchPopularData();
  };

  const setRating = (movie, rating) => {
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

  const getFavourite = id => {
    return favouriteList.filter(movie => {
      if (movie.id.toString() === id) {
        return movie;
      }
      return null;
    })[0];
  };

  const deleteFavouriteMovie = movie => {
    const newFavourites = favouriteList.filter(favouriteMovie => {
      if (favouriteMovie.id !== movie.id) {
        return favouriteMovie;
      }
      return null;
    });
    setFavouriteList(newFavourites);
  };

  return {
    value,
    popularList,
    searchMovies,
    favouriteMovie,
    favouriteList,
    isFavourite,
    clearSearch,
    setRating,
    setWatched,
    createReview,
    getFavourite,
    deleteReview
  };
};

export default useMovies;
