import React from "react";
import Movie from "../MovieCard";

const ListOfMovies = ({ popularList, favouriteMovie, isFavourite }) => {
  // const { favouriteMovie } = useMovies();
  const movies = popularList.map(movie => {
    return (
      <Movie
        key={movie.id}
        title={movie.title}
        overview={movie.overview}
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        onFavouriteMovie={() => favouriteMovie(movie)}
        isFavourite={isFavourite(movie)}
      />
    );
  });
  return <div>{movies}</div>;
};

export default ListOfMovies;
