import React from "react";
import Movie from "./Movie";

import useMovies from "../src/hooks/movies";

const ListOfMovies = ({ movieList, favouriteMovie }) => {
  // const { favouriteMovie } = useMovies();
  const movies = movieList.map(movie => {
    return (
      <Movie
        key={movie.id}
        title={movie.title}
        overview={movie.overview}
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        onFavouriteMovie={() => favouriteMovie(movie)}
      />
    );
  });
  return <div>{movies}</div>;
};

export default ListOfMovies;
