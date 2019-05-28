import React from "react";
import Movie from "../Movie";

const ListOfMovies = ({
  popularList,
  favouriteMovie,
  isFavourite,
  variant,
  setRating,
  setModalMovie,
  setWatched
}) => {
  return (
    <div>
      {popularList.map(movie => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            onFavouriteMovie={() => favouriteMovie(movie)}
            isFavourite={isFavourite(movie)}
            variant={variant}
            rating={movie.rating}
            setRating={rating => setRating(movie, rating)}
            setModalMovie={setModalMovie ? () => setModalMovie(movie) : null}
            setWatched={setWatched}
          />
        );
      })}
    </div>
  );
};

export default ListOfMovies;
