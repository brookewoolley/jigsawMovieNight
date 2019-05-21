import React, { useState } from "react";
import ListOfMovies from "./ListOfMovies";

import useMovies from "../src/hooks/movies";

const App = () => {
  const {
    value,
    movieList,
    searchMovies,
    favourite,
    favouriteMovie
  } = useMovies();
  // const { popularMoviesList } = usePopularMovies();

  // console.log("------> PM", popularMoviesList);

  return (
    <div>
      <label>
        Search for a film:
        <input type="text" value={value} onChange={searchMovies} />
      </label>

      {!!movieList && (
        <ListOfMovies movieList={movieList} favouriteMovie={favouriteMovie} />
      )}
    </div>
  );
};

export default App;
