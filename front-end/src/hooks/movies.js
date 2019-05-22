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

    console.log(res.data.results);
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

  return {
    value,
    popularList,
    searchMovies,
    favouriteMovie,
    favouriteList,
    isFavourite,
    clearSearch
  };
};

export default useMovies;
