import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, apiKey } from "../config";

const useMovies = () => {
  const [value, setValue] = useState("");
  const [popularList, setPopularList] = useState([]);
  const [favouriteList, setFavouriteList] = useState([]);

  const fetchPopularData = async () => {
    const res = await axios(`${baseUrl}movie/popular?api_key=${apiKey}`);

    setPopularList(res.data.results);
  };

  useEffect(() => {
    fetchPopularData();
  }, []);

  const searchMovies = async event => {
    setValue(event.target.value);

    const res = await fetch(
      `${baseUrl}search/movie?api_key=${apiKey}&query=${event.target.value}`
    );

    const parsedRes = await res.json();

    return setPopularList(parsedRes.results);
  };

  const favouriteMovie = movie => {
    const newFavourites = [...favouriteList, movie];
    isFavourite(movie)
      ? alert("Already in your favourites")
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

  const setReview = (movie, review) => {
    const newFavourites = [...favouriteList].map(favouriteMovie => {
      if (favouriteMovie.id === movie.id) {
        favouriteMovie.review = review;
      }
      console.log("LOOOOOOOOL", favouriteMovie.review);
      return favouriteMovie;
    });
    setFavouriteList(newFavourites);
  };

  const getFavourite = id => {
    return favouriteList.filter(movie => {
      if (movie.id.toString() === id) {
        console.log("----> getFavourite movie", movie);
        return movie;
      }
    })[0];
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
    setReview,
    getFavourite
  };
};

export default useMovies;
