import React, { useState } from "react";
import ListOfMovies from "./ListOfMovies";

import useMovies from "../src/hooks/movies";

const App = () => {
  const {
    value,
    movieList,
    searchMovies,
    favourite,
    favouriteMovie,
    isFavourite
  } = useMovies();
  // const { popularMoviesList } = usePopularMovies();

  // console.log("------> PM", popularMoviesList);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <label>
          Search for a film:
          <input type="text" value={value} onChange={searchMovies} />
        </label>

        {!!movieList && (
          <ListOfMovies
            movieList={movieList}
            favouriteMovie={favouriteMovie}
            isFavourite={isFavourite}
          />
        )}
      </div>
      {!!favourite && (
        <ListOfMovies
          movieList={favourite}
          favouriteMovie={favouriteMovie}
          isFavourite={isFavourite}
        />
      )}
    </div>
  );
};

export default App;
