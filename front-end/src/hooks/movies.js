import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, apiKey } from "../config";

const useMovies = () => {
  const [value, setValue] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`${baseUrl}movie/popular?api_key=${apiKey}`);

      setMovieList(res.data.results);
    };

    fetchData();
  }, []);

  const searchMovies = async event => {
    setValue(event.target.value);

    const res = await fetch(
      `${baseUrl}search/movie?api_key=${apiKey}&query=${event.target.value}`
    );

    const parsedRes = await res.json();

    return setMovieList(parsedRes.results);
  };

  const favouriteMovie = movie => {
    const newFavourites = [...favourite, movie];
    !favourite.includes(movie)
      ? setFavourite(newFavourites)
      : alert("Already in your favourites");
  };

  return { value, movieList, searchMovies, favouriteMovie, favourite };
};

export default useMovies;
